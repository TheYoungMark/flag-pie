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
let answer, guesses, finished, activeSuggestion = -1, supabaseClient, playerId, activeMatch, matchPoll, lastShownFireRound = 0, nextRoundTimerStarted = false;

// Filter out micro-states with population <= 50,000
(function() {
  function parsePopulation(str) {
    if (!str) return 0;
    let clean = str.replace(/,/g, '').trim().toLowerCase();
    let factor = 1;
    if (clean.includes('billion')) {
      factor = 1000000000;
      clean = clean.replace('billion', '');
    } else if (clean.includes('million')) {
      factor = 1000000;
      clean = clean.replace('million', '');
    } else if (clean.includes('thousand')) {
      factor = 1000;
      clean = clean.replace('thousand', '');
    }
    const val = parseFloat(clean);
    return isNaN(val) ? 0 : val * factor;
  }
  const filtered = countries.filter(c => parsePopulation(c.population) > 50000);
  countries.splice(0, countries.length, ...filtered);
})();

function dailyIndex() { const now = new Date(); return Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000) % countries.length; }
function normalize(s) {
  if (!s) return '';
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLocaleLowerCase();
}

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
    $('challenge-section').hidden = false;
  } else {
    if (!activeMatch) {
      $('challenge-section').hidden = false;
    } else {
      $('challenge-section').hidden = true;
    }
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
  answer = countries[match.country_index]; guesses = []; finished = false; list.innerHTML = ''; input.value = ''; input.disabled = false; form.querySelector('button').disabled = false; $('skip-btn').disabled = false;
  $('tries').textContent = '5 tries left'; $('result-screen').hidden = true; showFlagImage(false); renderChart();
}

function renderMatch(state) {
  const match = state.match, players = state.players || [], guessesInRound = state.guesses || [];
  const roundChanged = !activeMatch || activeMatch.round_number !== match.round_number || activeMatch.country_index !== match.country_index;
  activeMatch = match;
  
  $('match-panel').hidden = false; 
  $('challenge-section').hidden = true; // Hide play mode panel when match is active
  $('match-round').textContent = match.status === 'finished' ? 'Match complete' : `Round ${match.round_number} · first to ${match.target}`;
  
  // Render match score with flame icon next to the round winner
  $('match-score').innerHTML = players.map(player => {
    const isRoundWinner = match.last_winner_id === player.user_id;
    const flame = isRoundWinner ? ' 🔥' : '';
    return `<span>${player.user_id === playerId ? 'You' : 'Friend'} ${player.score}${flame}</span>`;
  }).join('');
  
  const opponent = guessesInRound.filter(guess => guess.user_id !== playerId), mine = guessesInRound.filter(guess => guess.user_id === playerId);
  
  // Update visual opponent guess track (dots)
  opponentIndicator.hidden = false;
  const dots = $('opponent-guess-track').querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('used', index < opponent.length);
  });
  
  // Render live opponent guesses list (Hiding actual country names as requested!)
  $('opponent-guess-list').innerHTML = opponent.length 
    ? opponent.map(guess => `<span class="${guess.is_correct ? 'correct' : ''}">Guess ${guess.guess_number}: ${guess.is_correct ? 'Correct! 🎉' : 'Incorrect'}</span>`).join('') 
    : '<span>No guesses yet…</span>';
  
  // Lock on waiting screen if friend hasn't joined yet
  if (players.length > 1) {
    waitingScreen.hidden = true;
  } else {
    waitingScreen.hidden = false;
    const url = inviteUrl(match.target, match.id);
    waitingLink.value = url;
  }
  
  if (roundChanged) {
    resetMatchRound(match);
    list.innerHTML = '';
    nextRoundTimerStarted = false;
  }
  
  // Render my guesses incrementally with persistent hints (solving the animation glitch)
  const currentCount = list.children.length;
  if (mine.length !== currentCount || roundChanged) {
    const startIdx = roundChanged ? 0 : currentCount;
    for (let i = startIdx; i < mine.length; i++) {
      const guess = mine[i];
      const isCorrect = guess.is_correct;
      const hintText = isCorrect ? 'Correct! 🎉' : hintForShort(i + 1);
      const displayName = guess.country_name === 'Skip' ? 'Skipped' : guess.country_name;
      const row = document.createElement('div');
      row.className = `guess-row${isCorrect ? ' win' : ''}`;
      row.innerHTML = `<span>${displayName}</span><span class="wrong">${hintText}</span>`;
      list.appendChild(row);
    }
  }
  
  guesses = mine.map(guess => countries.find(country => country.name === guess.country_name)).filter(Boolean);
  
  // Check win and limit states
  const oppCorrectGuess = opponent.find(g => g.is_correct);
  const myCorrectGuess = mine.find(g => g.is_correct);
  
  const oppLimit = oppCorrectGuess ? oppCorrectGuess.guess_number : 5;
  const myLimit = myCorrectGuess ? myCorrectGuess.guess_number : 5;
  
  if (oppCorrectGuess && lastShownFireRound !== match.round_number) {
    lastShownFireRound = match.round_number;
    triggerFireAnimation(oppLimit);
  }
  
  const isMineFinished = myCorrectGuess !== undefined || mine.length >= oppLimit;
  const isOpponentFinished = oppCorrectGuess !== undefined || opponent.length >= myLimit;
  
  const triesLeft = Math.max(0, oppLimit - mine.length);
  $('tries').textContent = `${triesLeft} ${triesLeft === 1 ? 'try' : 'tries'} left`;
  
  const isRoundFinished = (myCorrectGuess !== undefined && isOpponentFinished) || (oppCorrectGuess !== undefined && isMineFinished) || (mine.length >= 5 && opponent.length >= 5);
  
  if (isRoundFinished && match.status === 'active') {
    input.disabled = true;
    form.querySelector('button').disabled = true;
    $('skip-btn').disabled = true;
    $('next-round-panel').hidden = true;
    showFlagImage(true);
    
    if (match.last_winner_id) {
      if (match.last_winner_id === playerId) {
        message.innerHTML = `<strong>You won this round!</strong> 🔥 The country was <strong>${answer.name}</strong>. Next round starts in 5 seconds...`;
      } else {
        message.innerHTML = `<strong>Your friend won this round!</strong> 🔥 The country was <strong>${answer.name}</strong>. Next round starts in 5 seconds...`;
      }
    } else {
      message.innerHTML = `<strong>Round over!</strong> The country was <strong>${answer.name}</strong>. Next round starts in 5 seconds...`;
    }
    
    if (!nextRoundTimerStarted) {
      nextRoundTimerStarted = true;
      setTimeout(async () => {
        try {
          const nextIndex = Math.floor(Math.random() * countries.length);
          const { data, error } = await supabaseClient.rpc('next_match_round', { 
            p_match: activeMatch.id, 
            p_country_index: nextIndex, 
            p_current_round: match.round_number 
          });
          if (error) throw error;
          await syncMatch(data);
        } catch (err) {
          console.error('Error starting next round:', err);
        }
      }, 5000);
    }
  } else if (match.status === 'active') {
    $('next-round-panel').hidden = true;
    showFlagImage(false);
    
    if (isMineFinished) {
      // You finished, waiting for opponent
      input.disabled = true;
      form.querySelector('button').disabled = true;
      $('skip-btn').disabled = true;
      if (myCorrectGuess) {
        message.innerHTML = `<strong>You got it!</strong> 🔥 Waiting for your friend to finish (they are limited to ${myLimit} tries)...`;
      } else {
        message.innerHTML = `<strong>No tries left.</strong> Capped at ${oppLimit} tries. Waiting for your friend to finish...`;
      }
    } else {
      // You are still playing
      input.disabled = false;
      form.querySelector('button').disabled = false;
      $('skip-btn').disabled = false;
      if (oppCorrectGuess) {
        message.innerHTML = `<strong>Your opponent got it in ${oppLimit} tries! 🔥</strong> You are limited to ${oppLimit} tries to guess it or you lose!`;
      } else if (mine.length > 0) {
        message.innerHTML = hintFor(mine.length);
      } else {
        message.textContent = 'Type a country to start making guesses.';
      }
    }
  }
  
  if (match.status === 'finished') { 
    finished = true; 
    input.disabled = true; 
    form.querySelector('button').disabled = true; 
    $('next-round-panel').hidden = true;
    message.textContent = match.winner_id === playerId ? 'You won the match! 🎉' : 'Your friend won the match.'; 
    $('challenge-section').hidden = false; // Show play mode again to allow starting another match
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
  activeMatch = { id:matchId }; lastShownFireRound = 0; setPlayMode('friend'); await syncMatch();
  clearInterval(matchPoll); matchPoll = setInterval(syncMatch, 2000);
}

async function submitMatchGuess(country) {
  const { data, error } = await supabaseClient.rpc('submit_match_guess', { p_match:activeMatch.id, p_country_name:country.name, p_is_correct:country.name === answer.name });
  if (error) { message.textContent = error.message; return; }
  if (country.name === answer.name) {
    triggerConfetti();
  }
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
    `Borders: ${answer.border.replace('It borders ', '')}`,
    `Capital: ${answer.capital}`,
    `Incorrect`
  ];
  return hints[n-1] || 'Incorrect';
}

function hintFor(n) {
  const hints = [
    `Continent: <strong>${answer.continent}</strong>`,
    `Population: <strong>${answer.population}</strong>`,
    `Borders: <strong>${answer.border.replace('It borders ', '')}</strong>`,
    `Capital: <strong>${answer.capital}</strong>`
  ];
  return hints[n-1];
}

function newGame(practice=false) {
  const idx = practice ? Math.floor(Math.random()*countries.length) : dailyIndex();
  answer=countries[idx]; guesses=[]; finished=false; list.innerHTML=''; input.disabled=false; form.querySelector('button').disabled=false; $('skip-btn').disabled=false; input.value='';
  $('result-screen').hidden=true; suggestions.classList.remove('show'); showFlagImage(false);
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
  
  $('tries').textContent=`${Math.max(0,5-guesses.length)} ${Math.max(0,5-guesses.length)===1?'try':'tries'} left`;
  if (won) {
    triggerConfetti();
    finished = true;
    input.disabled = true;
    form.querySelector('button').disabled = true;
    $('skip-btn').disabled = true;
    message.innerHTML = `<strong>Correct! 🎉</strong> The country was <strong>${answer.name}</strong>. Next round starts in 5 seconds...`;
    showFlagImage(true);
    setTimeout(() => {
      if (!activeMatch && finished) newGame(true);
    }, 5000);
  }
  else if (guesses.length===5) {
    finished = true;
    input.disabled = true;
    form.querySelector('button').disabled = true;
    $('skip-btn').disabled = true;
    message.innerHTML = `<strong>Round over!</strong> The country was <strong>${answer.name}</strong>. Next round starts in 5 seconds...`;
    showFlagImage(true);
    setTimeout(() => {
      if (!activeMatch && finished) newGame(true);
    }, 5000);
  }
  else message.innerHTML=hintFor(guesses.length);
}

function end(text) { finished=true; input.disabled=true; form.querySelector('button').disabled=true; suggestions.classList.remove('show'); message.innerHTML=text; $('result-title').textContent=guesses.at(-1).name===answer.name?'You got it!':'The answer was…'; $('result-copy').innerHTML=`<strong>${answer.name}</strong><br>${text}`; $('result-screen').hidden=false; }
function showSuggestions() {
  const term = normalize(input.value);
  const matches = countries.filter(c => {
    const normName = normalize(c.name);
    return normName.startsWith(term) || normName.split(/\s+/).some(word => word.startsWith(term));
  });
  activeSuggestion = -1;
  suggestions.innerHTML = matches.map(c => `<button type="button" role="option" data-country="${c.name}">${c.name}</button>`).join('');
  suggestions.classList.toggle('show', matches.length > 0 && !finished);
}
function chooseSuggestion(name) { input.value=name; suggestions.classList.remove('show'); input.focus(); }

async function handleSkip() {
  if (activeMatch) {
    await submitMatchGuess({ name: 'Skip' });
  } else {
    guesses.push({ name: 'Skip' });
    const hintText = hintForShort(guesses.length);
    const row = document.createElement('div');
    row.className = 'guess-row';
    row.innerHTML = `<span>Skipped</span><span class="wrong">${hintText}</span>`;
    list.append(row);
    input.value = '';
    suggestions.classList.remove('show');
    
    $('tries').textContent = `${Math.max(0, 5 - guesses.length)} ${Math.max(0, 5 - guesses.length) === 1 ? 'try' : 'tries'} left`;
    
    if (guesses.length === 5) {
      finished = true;
      input.disabled = true;
      form.querySelector('button').disabled = true;
      $('skip-btn').disabled = true;
      message.innerHTML = `<strong>Round over!</strong> The country was <strong>${answer.name}</strong>. Next round starts in 5 seconds...`;
      showFlagImage(true);
      setTimeout(() => {
        if (!activeMatch && finished) newGame(true);
      }, 5000);
    } else {
      message.innerHTML = hintFor(guesses.length);
    }
  }
}

input.addEventListener('input',showSuggestions);
input.addEventListener('focus',showSuggestions);
input.addEventListener('keydown',e=>{ const options=[...suggestions.querySelectorAll('button')]; if(!options.length) return; if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault(); activeSuggestion=(activeSuggestion+(e.key==='ArrowDown'?1:options.length-1))%options.length; options.forEach((o,i)=>{ const active = i===activeSuggestion; o.classList.toggle('active',active); if (active) o.scrollIntoView({ block: 'nearest' }); });} if(e.key==='Enter'&&activeSuggestion>=0){e.preventDefault();chooseSuggestion(options[activeSuggestion].dataset.country);} if(e.key==='Escape') suggestions.classList.remove('show'); });
suggestions.addEventListener('click',e=>{if(e.target.dataset.country) chooseSuggestion(e.target.dataset.country);});
document.addEventListener('click',e=>{if(!e.target.closest('.autocomplete')) suggestions.classList.remove('show');});
form.addEventListener('submit',e=>{e.preventDefault(); if(!finished) guess(input.value);});
$('skip-btn').addEventListener('click', () => { if (!finished) handleSkip(); });
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

// Theme toggle initialization and binding
const themeToggle = $('theme-toggle');
let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '☀️ Light' : '🌙 Night';
themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  themeToggle.textContent = currentTheme === 'dark' ? '☀️ Light' : '🌙 Night';
});

// Next Round 1v1 handler
$('next-round-btn').addEventListener('click', async () => {
  try {
    $('next-round-btn').disabled = true;
    $('next-round-btn').textContent = 'Loading…';
    const nextIndex = Math.floor(Math.random() * countries.length);
    const { data, error } = await supabaseClient.rpc('next_match_round', { p_match: activeMatch.id, p_country_index: nextIndex });
    if (error) throw error;
    await syncMatch(data);
  } catch (err) {
    message.textContent = `Error starting next round: ${err.message}`;
  } finally {
    $('next-round-btn').disabled = false;
    $('next-round-btn').textContent = 'Next Round ➔';
  }
});

// Floating Fire Capping Warning Overlay
function triggerFireAnimation(limit) {
  const el = document.createElement('div');
  el.style.position = 'fixed';
  el.style.inset = '0';
  el.style.display = 'flex';
  el.style.flexDirection = 'column';
  el.style.justifyContent = 'center';
  el.style.alignItems = 'center';
  el.style.zIndex = '99999';
  el.style.background = 'rgba(0, 0, 0, 0.4)';
  el.style.backdropFilter = 'blur(6px)';
  el.style.color = '#fff';
  el.style.fontFamily = 'inherit';
  el.style.animation = 'fade-in 0.3s ease forwards';
  
  el.innerHTML = `
    <div style="font-size: 6rem; animation: pulse-pop 0.6s infinite ease-in-out;">🔥</div>
    <h2 style="margin: 20px 0 10px; font-size: 1.8rem; text-align: center;">Friend got it in ${limit}!</h2>
    <p style="margin: 0; font-size: 1.1rem; color: #ffca28; font-weight: bold; text-align: center;">You are capped at ${limit} ${limit === 1 ? 'try' : 'tries'}!</p>
  `;
  
  document.body.appendChild(el);
  
  setTimeout(() => {
    el.style.animation = 'fade-out 0.3s ease forwards';
    setTimeout(() => el.remove(), 300);
  }, 2500);
}

// Lightweight Confetti Particle Explosion
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const colors = ['#ff6f59', '#4ade80', '#3b82f6', '#facc15', '#a855f7', '#ec4899'];
  
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.85,
      vx: (Math.random() - 0.5) * 16,
      vy: -Math.random() * 18 - 4,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      r: Math.random() * 360,
      vr: (Math.random() - 0.5) * 8
    });
  }
  
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // gravity
      p.vx *= 0.98; // air resistance
      p.r += p.vr;
      if (p.y < canvas.height + 50) active = true;
      
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
      ctx.restore();
    });
    
    if (active) requestAnimationFrame(update);
    else canvas.remove();
  }
  update();
}

const isoMap = {
  "Argentina": "ar",
  "Belgium": "be",
  "Brazil": "br",
  "Canada": "ca",
  "Chile": "cl",
  "Colombia": "co",
  "France": "fr",
  "Germany": "de",
  "Greece": "gr",
  "India": "in",
  "Italy": "it",
  "Jamaica": "jm",
  "Japan": "jp",
  "Mexico": "mx",
  "Nigeria": "ng",
  "South Africa": "za",
  "Sweden": "se",
  "Thailand": "th",
  "Ukraine": "ua",
  "United Kingdom": "gb",
  "Australia": "au",
  "Austria": "at",
  "Bangladesh": "bd",
  "China": "cn",
  "Costa Rica": "cr",
  "Denmark": "dk",
  "Egypt": "eg",
  "Finland": "fi",
  "Hungary": "hu",
  "Indonesia": "id",
  "Ireland": "ie",
  "Kenya": "ke",
  "Netherlands": "nl",
  "Norway": "no",
  "Pakistan": "pk",
  "Peru": "pe",
  "Philippines": "ph",
  "Poland": "pl",
  "Portugal": "pt",
  "South Korea": "kr",
  "Spain": "es",
  "Switzerland": "ch",
  "Türkiye": "tr",
  "United States": "us",
  "Afghanistan": "af",
  "Albania": "al",
  "Algeria": "dz",
  "Andorra": "ad",
  "Angola": "ao",
  "Antigua and Barbuda": "ag",
  "Armenia": "am",
  "Azerbaijan": "az",
  "Bahrain": "bh",
  "Barbados": "bb",
  "Belarus": "by",
  "Belize": "bz",
  "Benin": "bj",
  "Bhutan": "bt",
  "Bolivia": "bo",
  "Bosnia and Herzegovina": "ba",
  "Botswana": "bw",
  "Brunei": "bn",
  "Bulgaria": "bg",
  "Burkina Faso": "bf",
  "Burundi": "bi",
  "Cabo Verde": "cv",
  "Cambodia": "kh",
  "Cameroon": "cm",
  "Central African Republic": "cf",
  "Chad": "td",
  "Comoros": "km",
  "Republic of the Congo": "cg",
  "Democratic Republic of the Congo": "cd",
  "Croatia": "hr",
  "Cuba": "cu",
  "Cyprus": "cy",
  "Djibouti": "dj",
  "Dominica": "dm",
  "Dominican Republic": "do",
  "Ecuador": "ec",
  "El Salvador": "sv",
  "Equatorial Guinea": "gq",
  "Eritrea": "er",
  "Estonia": "ee",
  "Eswatini": "sz",
  "Ethiopia": "et",
  "Fiji": "fj",
  "Gabon": "ga",
  "Georgia": "ge",
  "Ghana": "gh",
  "Grenada": "gd",
  "Guatemala": "gt",
  "Guinea": "gn",
  "Guinea-Bissau": "gw",
  "Guyana": "gy",
  "Haiti": "ht",
  "Honduras": "hn",
  "Iceland": "is",
  "Iran": "ir",
  "Iraq": "iq",
  "Israel": "il",
  "Jordan": "jo",
  "Kazakhstan": "kz",
  "Kiribati": "ki",
  "Kuwait": "kw",
  "Kyrgyzstan": "kg",
  "Laos": "la",
  "Latvia": "lv",
  "Lebanon": "lb",
  "Lesotho": "ls",
  "Liberia": "lr",
  "Libya": "ly",
  "Liechtenstein": "li",
  "Lithuania": "lt",
  "Luxembourg": "lu",
  "Madagascar": "mg",
  "Malawi": "mw",
  "Malaysia": "my",
  "Maldives": "mv",
  "Mali": "ml",
  "Malta": "mt",
  "Marshall Islands": "mh",
  "Mauritania": "mr",
  "Mauritius": "mu",
  "Micronesia": "fm",
  "Moldova": "md",
  "Monaco": "mc",
  "Mongolia": "mn",
  "Montenegro": "me",
  "Morocco": "ma",
  "Mozambique": "mz",
  "Myanmar": "mm",
  "Namibia": "na",
  "Nauru": "nr",
  "New Zealand": "nz",
  "Nicaragua": "ni",
  "Niger": "ne",
  "North Korea": "kp",
  "North Macedonia": "mk",
  "Oman": "om",
  "Palau": "pw",
  "Panama": "pa",
  "Papua New Guinea": "pg",
  "Paraguay": "py",
  "Qatar": "qa",
  "Romania": "ro",
  "Russia": "ru",
  "Rwanda": "rw",
  "Saint Kitts and Nevis": "kn",
  "Saint Lucia": "lc",
  "Saint Vincent and the Grenadines": "vc",
  "Samoa": "ws",
  "San Marino": "sm",
  "São Tomé and Príncipe": "st",
  "Saudi Arabia": "sa",
  "Senegal": "sn",
  "Serbia": "rs",
  "Seychelles": "sc",
  "Sierra Leone": "sl",
  "Singapore": "sg",
  "Slovakia": "sk",
  "Slovenia": "si",
  "Solomon Islands": "sb",
  "Somalia": "so",
  "South Sudan": "ss",
  "Sri Lanka": "lk",
  "Sudan": "sd",
  "Suriname": "sr",
  "Syria": "sy",
  "Tajikistan": "tj",
  "Tanzania": "tz",
  "Timor-Leste": "tl",
  "Togo": "tg",
  "Tonga": "to",
  "Trinidad and Tobago": "tt",
  "Tunisia": "tn",
  "Turkmenistan": "tm",
  "Tuvalu": "tv",
  "Uganda": "ug",
  "United Arab Emirates": "ae",
  "Uruguay": "uy",
  "Uzbekistan": "uz",
  "Vanuatu": "vu",
  "Vatican City": "va",
  "Venezuela": "ve",
  "Vietnam": "vn",
  "Yemen": "ye",
  "Zambia": "zm",
  "Zimbabwe": "zw"
};

function showFlagImage(show) {
  const flagImg = $('flag-img');
  const pieChart = $('pie-chart');
  const chartCenter = $('chart-center');
  
  if (show && answer) {
    const code = isoMap[answer.name];
    if (code) {
      flagImg.src = `https://flagcdn.com/w320/${code}.png`;
      flagImg.hidden = false;
      pieChart.style.opacity = '0';
      chartCenter.style.opacity = '0';
    }
  } else {
    flagImg.hidden = true;
    pieChart.style.opacity = '1';
    chartCenter.style.opacity = '1';
  }
}

if (sharedTarget === '3' || sharedTarget === '5') matchTarget.value = sharedTarget;
setPlayMode(sharedMatchId ? 'friend' : 'solo');
if (sharedMatchId && sharedTarget) challengeStatus.textContent = `Joining your live first-to-${sharedTarget} match…`;
newGame();
if (sharedMatchId) enterMatch(sharedMatchId).catch(error => { challengeStatus.textContent = `Couldn’t join this match: ${error.message || 'please try again.'}`; });
