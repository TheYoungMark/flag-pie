const $ = id => document.getElementById(id);
const input = $('country-input'), form = $('guess-form'), message = $('message'), list = $('guess-list'), suggestions = $('suggestions');
const matchTarget = $('match-target'), challengeStatus = $('challenge-status');
const soloMode = $('solo-mode'), friendMode = $('friend-mode'), friendControls = $('friend-controls'), modeDescription = $('mode-description');
const inviteLinkWrap = $('invite-link-wrap'), inviteLink = $('invite-link');
const waitingScreen = $('waiting-screen'), waitingLink = $('waiting-link'), opponentIndicator = $('opponent-indicator');
const matchParams = new URLSearchParams(window.location.search);
const sharedMatchId = matchParams.get('match');
const sharedTarget = matchParams.get('firstTo');
const SUPABASE_URL = 'https://ukzktvrbqqnmlrwvqzpr.supabase.co';
const SUPABASE_KEY = 'sb_publishable_JEFdHvuMS6rrAdbShBMsMw_PKSGXDfG';
let answer, guesses, finished, activeSuggestion = -1, supabaseClient, playerId, activeMatch, matchPoll;

function dailyIndex() { const now = new Date(); return Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000) % countries.length; }
function normalize(s) { return s.trim().toLocaleLowerCase(); }

function setPlayMode(mode) {
  const friend = mode === 'friend';
  soloMode.classList.toggle('active', !friend); soloMode.setAttribute('aria-pressed', String(!friend));
  friendMode.classList.toggle('active', friend); friendMode.setAttribute('aria-pressed', String(friend));
  friendControls.hidden = !friend;
  modeDescription.textContent = friend
    ? 'Choose the target, then send a shared match link to your opponent.'
    : 'Solve today’s puzzle on your own, or start a fresh practice round.';
  if (!friend) { 
    challengeStatus.textContent = ''; 
    inviteLinkWrap.hidden = true; 
    activeMatch = null; 
    clearInterval(matchPoll); 
    $('match-panel').hidden = true; 
    opponentIndicator.hidden = true; 
    waitingScreen.hidden = true; 
  }
}

function inviteUrl(target, matchId) {
  const url = new URL(window.location.href);
  url.searchParams.set('match', matchId);
  url.searchParams.set('firstTo', target);
  return url.toString();
}

async function copyInvite(text, target) {
  if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
  else window.prompt('Copy this invite for your friend:', text);
  challengeStatus.textContent = `Invite link copied — first to ${target} wins.`;
}

async function inviteFriend() {
  const target = matchTarget.value;
  try {
    await ensurePlayer();
    const { data: matchId, error } = await supabaseClient.rpc('start_match', { p_target:Number(target), p_country_index:Math.floor(Math.random() * countries.length) });
    if (error) throw error;
    await enterMatch(matchId);
    const url = inviteUrl(target, matchId);
    inviteLink.value = url; waitingLink.value = url; inviteLinkWrap.hidden = false;
    challengeStatus.textContent = `Your live first-to-${target} match is ready. Send this link to your friend.`;
    waitingScreen.hidden = false;
  } catch (error) {
    challengeStatus.textContent = `Couldn’t create the match: ${error.message || 'please try again.'}`;
  }
}

async function copyGeneratedInvite() {
  if (!inviteLink.value) return;
  try { await copyInvite(inviteLink.value, matchTarget.value); }
  catch { window.prompt('Copy this invite for your friend:', inviteLink.value); }
}

async function ensurePlayer() {
  if (!supabaseClient) supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) { playerId = session.user.id; return; }
  const { data, error } = await supabaseClient.auth.signInAnonymously();
  if (error) throw error;
  playerId = data.user.id;
}

function resetMatchRound(match) {
  answer = countries[match.country_index]; guesses = []; finished = false; list.innerHTML = ''; input.value = ''; input.disabled = false; form.querySelector('button').disabled = false;
  $('tries').textContent = '5 tries left'; $('result-screen').hidden = true; renderChart();
}

function renderMatch(state) {
  const match = state.match, players = state.players || [], guessesInRound = state.guesses || [];
  const roundChanged = !activeMatch || activeMatch.round_number !== match.round_number || activeMatch.country_index !== match.country_index;
  activeMatch = match;
  
  $('match-panel').hidden = false; 
  $('match-round').textContent = match.status === 'finished' ? 'Match complete' : `Round ${match.round_number} · first to ${match.target}`;
  $('match-score').innerHTML = players.map(player => `<span>${player.user_id === playerId ? 'You' : 'Friend'} ${player.score}</span>`).join('');
  
  const opponent = guessesInRound.filter(guess => guess.user_id !== playerId), mine = guessesInRound.filter(guess => guess.user_id === playerId);
  
  // Update visual opponent guess track (dots)
  opponentIndicator.hidden = false;
  const dots = $('opponent-guess-track').querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('used', index < opponent.length);
  });
  
  // Render live opponent guesses list
  $('opponent-guess-list').innerHTML = opponent.length 
    ? opponent.map(guess => `<span class="${guess.is_correct ? 'correct' : ''}">${guess.country_name}${guess.is_correct ? ' ✓' : ''}</span>`).join('') 
    : '<span>No guesses yet…</span>';
  
  // Lock on waiting screen if friend hasn't joined yet
  if (players.length > 1) {
    waitingScreen.hidden = true;
  } else {
    waitingScreen.hidden = false;
    const url = inviteUrl(match.target, match.id);
    waitingLink.value = url;
  }
  
  if (roundChanged) resetMatchRound(match);
  
  // Render my guesses with persistent hints
  list.innerHTML = mine.map((guess, index) => {
    const isCorrect = guess.is_correct;
    const hintText = isCorrect ? 'Correct! 🎉' : hintForShort(index + 1);
    return `<div class="guess-row${isCorrect ? ' win' : ''}"><span>${guess.country_name}</span><span class="wrong">${hintText}</span></div>`;
  }).join('');
  
  guesses = mine.map(guess => countries.find(country => country.name === guess.country_name)).filter(Boolean);
  $('tries').textContent = `${Math.max(0, 5 - guesses.length)} tries left`;
  
  // Block input if user is finished but round hasn't advanced yet
  const isMineFinished = mine.some(g => g.is_correct) || mine.length >= 5;
  if (isMineFinished && match.status === 'active') {
    input.disabled = true;
    form.querySelector('button').disabled = true;
    message.innerHTML = mine.some(g => g.is_correct)
      ? '<strong>You got it!</strong> Waiting for your friend to finish...'
      : '<strong>No tries left.</strong> Waiting for your friend to finish...';
  } else if (match.status === 'active') {
    input.disabled = false;
    form.querySelector('button').disabled = false;
    if (mine.length > 0) {
      message.innerHTML = hintFor(mine.length);
    } else {
      message.textContent = 'Type a country to start making guesses.';
    }
  }
  
  if (match.last_winner_id && isMineFinished) {
    message.textContent = `${match.last_winner_id === playerId ? 'You' : 'Your friend'} won the last round with ${match.last_winner_country}.`;
  }
  if (match.status === 'finished') { 
    finished = true; 
    input.disabled = true; 
    form.querySelector('button').disabled = true; 
    message.textContent = match.winner_id === playerId ? 'You won the match! 🎉' : 'Your friend won the match.'; 
  }
}

async function syncMatch(state) {
  try {
    if (!state) { const { data, error } = await supabaseClient.rpc('match_state', { p_match:activeMatch.id }); if (error) throw error; state = data; }
    renderMatch(state);
  } catch (error) { challengeStatus.textContent = `Match connection lost: ${error.message || 'retrying…'}`; }
}

async function enterMatch(matchId) {
  await ensurePlayer();
  const { error } = await supabaseClient.rpc('join_match', { p_match:matchId }); if (error) throw error;
  activeMatch = { id:matchId }; setPlayMode('friend'); await syncMatch();
  clearInterval(matchPoll); matchPoll = setInterval(syncMatch, 2000);
}

async function submitMatchGuess(country) {
  const { data, error } = await supabaseClient.rpc('submit_match_guess', { p_match:activeMatch.id, p_country_name:country.name, p_is_correct:country.name === answer.name });
  if (error) { message.textContent = error.message; return; }
  await syncMatch(data);
}

function renderChart() {
  let at = 0; const stops = answer.colors.map(([,,hex],i) => { const start=at; at += answer.colors[i][1] * 3.6; return `${hex} ${start}deg ${at}deg`; });
  $('pie-chart').style.background = `conic-gradient(${stops.join(',')})`;
  $('color-count').textContent = answer.colors.length;
  $('legend').innerHTML = answer.colors.map(([name,pct,hex]) => `<span class="legend-item"><i class="swatch" style="background:${hex}"></i>${name} ${pct}%</span>`).join('');
}

function hintForShort(n) {
  if (!answer) return 'Incorrect';
  const hints = [
    `Continent: ${answer.continent}`,
    `Population: ${answer.population}`,
    `${answer.border}`,
    `Capital: ${answer.capital}`,
    `Incorrect`
  ];
  return hints[n-1] || 'Incorrect';
}

function hintFor(n) { const hints = [ `Hint 1: It is in <strong>${answer.continent}</strong>.`, `Hint 2: Its documented population is <strong>${answer.population}</strong>.`, `Hint 3: ${answer.border}`, `Hint 4: Its capital is <strong>${answer.capital}</strong>.` ]; return hints[n-1]; }

function newGame(practice=false) {
  const idx = practice ? Math.floor(Math.random()*countries.length) : dailyIndex();
  answer=countries[idx]; guesses=[]; finished=false; list.innerHTML=''; input.disabled=false; form.querySelector('button').disabled=false; input.value='';
  $('result-screen').hidden=true; suggestions.classList.remove('show');
  message.innerHTML = practice ? 'Practice round: a random country has been chosen.' : 'Today’s puzzle is the same for everyone — share it with a friend.';
  $('tries').textContent='5 tries left'; renderChart(); input.focus();
}

async function guess(value) {
  const country=countries.find(c=>normalize(c.name)===normalize(value));
  if (!country) { message.textContent='Choose a country from the suggestions.'; return; }
  if (guesses.some(c=>c.name===country.name)) { message.textContent='You already tried that one.'; return; }
  if (activeMatch) { input.value=''; suggestions.classList.remove('show'); await submitMatchGuess(country); return; }
  guesses.push(country); const won=country.name===answer.name;
  
  const hintText = won ? 'Correct! 🎉' : hintForShort(guesses.length);
  const row=document.createElement('div'); row.className=`guess-row${won?' win':''}`;
  row.innerHTML=`<span>${country.name}</span><span class="wrong">${hintText}</span>`; list.append(row); input.value=''; suggestions.classList.remove('show');
  
  $('tries').textContent=`${Math.max(0,5-guesses.length)} tries left`;
  if (won) end(`You got it in <strong>${guesses.length}</strong> ${guesses.length===1?'guess':'guesses'}! It was <strong>${answer.name}</strong>.`);
  else if (guesses.length===5) end(`So close — the answer was <strong>${answer.name}</strong>. Hit “New round” for another.`);
  else message.innerHTML=hintFor(guesses.length);
}

function end(text) { finished=true; input.disabled=true; form.querySelector('button').disabled=true; suggestions.classList.remove('show'); message.innerHTML=text; $('result-title').textContent=guesses.at(-1).name===answer.name?'You got it!':'The answer was…'; $('result-copy').innerHTML=`<strong>${answer.name}</strong><br>${text}`; $('result-screen').hidden=false; }
function showSuggestions() { const term=normalize(input.value); const matches=countries.filter(c=>normalize(c.name).includes(term)).slice(0,8); activeSuggestion=-1; suggestions.innerHTML=matches.map(c=>`<button type="button" role="option" data-country="${c.name}">${c.name}</button>`).join(''); suggestions.classList.toggle('show',matches.length>0 && !finished); }
function chooseSuggestion(name) { input.value=name; suggestions.classList.remove('show'); input.focus(); }

input.addEventListener('input',showSuggestions);
input.addEventListener('focus',showSuggestions);
input.addEventListener('keydown',e=>{ const options=[...suggestions.querySelectorAll('button')]; if(!options.length) return; if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault(); activeSuggestion=(activeSuggestion+(e.key==='ArrowDown'?1:options.length-1))%options.length; options.forEach((o,i)=>o.classList.toggle('active',i===activeSuggestion));} if(e.key==='Enter'&&activeSuggestion>=0){e.preventDefault();chooseSuggestion(options[activeSuggestion].dataset.country);} if(e.key==='Escape') suggestions.classList.remove('show'); });
suggestions.addEventListener('click',e=>{if(e.target.dataset.country) chooseSuggestion(e.target.dataset.country);});
document.addEventListener('click',e=>{if(!e.target.closest('.autocomplete')) suggestions.classList.remove('show');});
form.addEventListener('submit',e=>{e.preventDefault(); if(!finished) guess(input.value);});
$('new-game').addEventListener('click',()=>activeMatch ? syncMatch() : newGame(true));
$('play-another').addEventListener('click',()=>activeMatch ? syncMatch() : newGame(true));
$('invite-friend').addEventListener('click', inviteFriend);
$('copy-invite-link').addEventListener('click', copyGeneratedInvite);
$('copy-waiting-link').addEventListener('click', async () => {
  try { await copyInvite(waitingLink.value, matchTarget.value); }
  catch { window.prompt('Copy this invite for your friend:', waitingLink.value); }
});
$('cancel-waiting').addEventListener('click', () => setPlayMode('solo'));
soloMode.addEventListener('click', () => setPlayMode('solo'));
friendMode.addEventListener('click', () => setPlayMode('friend'));

// How to Play Event Listeners
$('how-to-btn').addEventListener('click', () => $('how-to-screen').hidden = false);
$('close-how-to').addEventListener('click', () => $('how-to-screen').hidden = true);
$('how-to-screen').addEventListener('click', (e) => {
  if (e.target === $('how-to-screen')) $('how-to-screen').hidden = true;
});

if (sharedTarget === '3' || sharedTarget === '5') matchTarget.value = sharedTarget;
setPlayMode(sharedMatchId ? 'friend' : 'solo');
if (sharedMatchId && sharedTarget) challengeStatus.textContent = `Joining your live first-to-${sharedTarget} match…`;
newGame();
if (sharedMatchId) enterMatch(sharedMatchId).catch(error => { challengeStatus.textContent = `Couldn’t join this match: ${error.message || 'please try again.'}`; });
