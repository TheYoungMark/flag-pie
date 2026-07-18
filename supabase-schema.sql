create extension if not exists pgcrypto;

create table if not exists public.matches (
  id uuid primary key default gen_random_uuid(),
  target smallint not null check (target in (3, 5)),
  country_index integer not null check (country_index >= 0 and country_index < 194),
  round_number integer not null default 1,
  status text not null default 'active' check (status in ('active', 'finished')),
  winner_id uuid references auth.users(id),
  last_winner_id uuid references auth.users(id),
  last_winner_country text,
  created_at timestamptz not null default now()
);

create table if not exists public.match_players (
  match_id uuid not null references public.matches(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  score integer not null default 0 check (score >= 0),
  joined_at timestamptz not null default now(),
  primary key (match_id, user_id)
);

create table if not exists public.match_guesses (
  id bigint generated always as identity primary key,
  match_id uuid not null references public.matches(id) on delete cascade,
  round_number integer not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  country_name text not null,
  guess_number smallint not null check (guess_number > 0 and guess_number <= 5),
  is_correct boolean not null,
  created_at timestamptz not null default now(),
  unique (match_id, round_number, user_id, guess_number)
);

alter table public.matches enable row level security;
alter table public.match_players enable row level security;
alter table public.match_guesses enable row level security;

drop policy if exists "players can view their match" on public.matches;
drop policy if exists "players can view match players" on public.match_players;
drop policy if exists "players can view match guesses" on public.match_guesses;

create or replace function public.is_match_player(p_match uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.match_players where match_id = p_match and user_id = auth.uid());
$$;

create policy "players can view their match" on public.matches for select to authenticated using (public.is_match_player(id));
create policy "players can view match players" on public.match_players for select to authenticated using (public.is_match_player(match_id));
create policy "players can view match guesses" on public.match_guesses for select to authenticated using (public.is_match_player(match_id));

create or replace function public.start_match(p_target smallint, p_country_index integer)
returns uuid language plpgsql security definer set search_path = public as $$
declare v_match uuid;
begin
  if auth.uid() is null then raise exception 'Sign in required'; end if;
  if p_target not in (3, 5) or p_country_index not between 0 and 193 then raise exception 'Invalid match settings'; end if;
  insert into public.matches (target, country_index) values (p_target, p_country_index) returning id into v_match;
  insert into public.match_players (match_id, user_id) values (v_match, auth.uid());
  return v_match;
end;
$$;

create or replace function public.join_match(p_match uuid)
returns void language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'Sign in required'; end if;
  if not exists (select 1 from public.matches where id = p_match) then raise exception 'Match not found'; end if;
  insert into public.match_players (match_id, user_id) values (p_match, auth.uid()) on conflict do nothing;
end;
$$;

create or replace function public.match_state(p_match uuid)
returns jsonb language plpgsql security definer set search_path = public as $$
declare v_match public.matches;
begin
  if not public.is_match_player(p_match) then raise exception 'Not a match player'; end if;
  select * into v_match from public.matches where id = p_match;
  return jsonb_build_object(
    'match', to_jsonb(v_match),
    'players', (select coalesce(jsonb_agg(to_jsonb(p) order by p.joined_at), '[]'::jsonb) from public.match_players p where p.match_id = p_match),
    'guesses', (select coalesce(jsonb_agg(to_jsonb(g) order by g.created_at), '[]'::jsonb) from public.match_guesses g where g.match_id = p_match and g.round_number = v_match.round_number)
  );
end;
$$;

create or replace function public.submit_match_guess(p_match uuid, p_country_name text, p_is_correct boolean)
returns jsonb language plpgsql security definer set search_path = public as $$
declare v_match public.matches; v_number smallint; v_score integer;
begin
  if auth.uid() is null or not public.is_match_player(p_match) then raise exception 'Not a match player'; end if;
  select * into v_match from public.matches where id = p_match for update;
  if v_match.status <> 'active' then return public.match_state(p_match); end if;
  select count(*) + 1 into v_number from public.match_guesses where match_id = p_match and round_number = v_match.round_number and user_id = auth.uid();
  if v_number > 5 then raise exception 'No guesses left this round'; end if;
  insert into public.match_guesses (match_id, round_number, user_id, country_name, guess_number, is_correct) values (p_match, v_match.round_number, auth.uid(), p_country_name, v_number, p_is_correct);
  if p_is_correct then
    update public.match_players set score = score + 1 where match_id = p_match and user_id = auth.uid() returning score into v_score;
    if v_score >= v_match.target then update public.matches set status = 'finished', winner_id = auth.uid(), last_winner_id = auth.uid(), last_winner_country = p_country_name where id = p_match;
    else update public.matches set round_number = round_number + 1, country_index = floor(random() * 194)::integer, last_winner_id = auth.uid(), last_winner_country = p_country_name where id = p_match; end if;
  end if;
  return public.match_state(p_match);
end;
$$;

grant execute on function public.start_match(smallint, integer), public.join_match(uuid), public.match_state(uuid), public.submit_match_guess(uuid, text, boolean) to authenticated;
