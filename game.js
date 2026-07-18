const countries = [
  {name:'Argentina', colors:[['Sky blue',50,'#75aadb'],['White',42,'#ffffff'],['Gold',8,'#f6bd38']], continent:'South America', population:'46 million', border:'It borders Chile, Bolivia, Paraguay, Brazil and Uruguay.', capital:'Buenos Aires'},
  {name:'Belgium', colors:[['Black',33,'#181818'],['Gold',33,'#f8d047'],['Red',34,'#d13a32']], continent:'Europe', population:'12 million', border:'It borders France, Luxembourg, Germany and the Netherlands.', capital:'Brussels'},
  {name:'Brazil', colors:[['Green',54,'#229e52'],['Gold',27,'#ffdc36'],['Blue',12,'#254aa5'],['White',7,'#ffffff']], continent:'South America', population:'212 million', border:'It borders every South American country except Chile and Ecuador.', capital:'Brasília'},
  {name:'Canada', colors:[['Red',42,'#d52b1e'],['White',58,'#ffffff']], continent:'North America', population:'41 million', border:'Its only land border is with the United States.', capital:'Ottawa'},
  {name:'Chile', colors:[['White',43,'#ffffff'],['Red',43,'#d52b1e'],['Blue',14,'#0039a6']], continent:'South America', population:'20 million', border:'It shares a very long border with Argentina.', capital:'Santiago'},
  {name:'Colombia', colors:[['Gold',50,'#f7d117'],['Blue',25,'#224fa0'],['Red',25,'#d52b1e']], continent:'South America', population:'53 million', border:'It borders five countries, including Panama and Venezuela.', capital:'Bogotá'},
  {name:'France', colors:[['Blue',33,'#1d45a0'],['White',34,'#ffffff'],['Red',33,'#e23d35']], continent:'Europe', population:'68 million', border:'It has land borders with eight European countries.', capital:'Paris'},
  {name:'Germany', colors:[['Black',33,'#1c1c1c'],['Red',33,'#d33632'],['Gold',34,'#ffce38']], continent:'Europe', population:'84 million', border:'It borders nine countries.', capital:'Berlin'},
  {name:'Greece', colors:[['Blue',50,'#2167ae'],['White',50,'#ffffff']], continent:'Europe', population:'10 million', border:'It borders Albania, North Macedonia, Bulgaria and Türkiye.', capital:'Athens'},
  {name:'India', colors:[['Saffron',33,'#ff9933'],['White',34,'#ffffff'],['Green',33,'#138808']], continent:'Asia', population:'1.4 billion', border:'It borders six countries, including Pakistan and China.', capital:'New Delhi'},
  {name:'Italy', colors:[['Green',33,'#009246'],['White',34,'#ffffff'],['Red',33,'#ce2b37']], continent:'Europe', population:'59 million', border:'It surrounds two tiny independent countries.', capital:'Rome'},
  {name:'Jamaica', colors:[['Green',42,'#009b3a'],['Gold',16,'#fed100'],['Black',42,'#111111']], continent:'North America', population:'2.8 million', border:'It is an island country in the Caribbean.', capital:'Kingston'},
  {name:'Japan', colors:[['White',87,'#ffffff'],['Red',13,'#bc002d']], continent:'Asia', population:'123 million', border:'It is an island nation with no land borders.', capital:'Tokyo'},
  {name:'Mexico', colors:[['Green',33,'#006847'],['White',34,'#ffffff'],['Red',33,'#ce1126']], continent:'North America', population:'131 million', border:'It borders the United States, Guatemala and Belize.', capital:'Mexico City'},
  {name:'Nigeria', colors:[['Green',67,'#008753'],['White',33,'#ffffff']], continent:'Africa', population:'233 million', border:'It borders Benin, Niger, Chad and Cameroon.', capital:'Abuja'},
  {name:'South Africa', colors:[['Red',21,'#de3831'],['Blue',21,'#002395'],['Green',25,'#007a4d'],['Black',12,'#111111'],['Gold',8,'#ffb612'],['White',13,'#ffffff']], continent:'Africa', population:'63 million', border:'It completely surrounds Lesotho.', capital:'Pretoria (executive)'},
  {name:'Sweden', colors:[['Blue',74,'#006aa7'],['Gold',26,'#fecc00']], continent:'Europe', population:'11 million', border:'It shares a long border with Norway.', capital:'Stockholm'},
  {name:'Thailand', colors:[['Red',32,'#a51931'],['White',28,'#ffffff'],['Blue',40,'#2d2a4a']], continent:'Asia', population:'71 million', border:'It borders four countries in Southeast Asia.', capital:'Bangkok'},
  {name:'Ukraine', colors:[['Blue',50,'#0057b7'],['Gold',50,'#ffd700']], continent:'Europe', population:'38 million', border:'It borders seven countries.', capital:'Kyiv'},
  {name:'United Kingdom', colors:[['Blue',58,'#012169'],['Red',19,'#c8102e'],['White',23,'#ffffff']], continent:'Europe', population:'69 million', border:'Its only land border is on the island of Ireland.', capital:'London'}
];

const $ = id => document.getElementById(id);
const input = $('country-input'), form = $('guess-form'), message = $('message'), list = $('guess-list');
let answer, guesses, finished;

function dailyIndex() { const now = new Date(); return Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000) % countries.length; }
function normalize(s) { return s.trim().toLocaleLowerCase(); }
function renderChart() {
  let at = 0; const stops = answer.colors.map(([,,hex],i) => { const start=at; at += answer.colors[i][1] * 3.6; return `${hex} ${start}deg ${at}deg`; });
  $('pie-chart').style.background = `conic-gradient(${stops.join(',')})`;
  $('color-count').textContent = answer.colors.length;
  $('legend').innerHTML = answer.colors.map(([name,pct,hex]) => `<span class="legend-item"><i class="swatch" style="background:${hex}"></i>${name} ${pct}%</span>`).join('');
}
function hintFor(n) { const hints = [ `Hint 1: It is in <strong>${answer.continent}</strong>.`, `Hint 2: Its population is about <strong>${answer.population}</strong>.`, `Hint 3: ${answer.border}`, `Hint 4: Its capital is <strong>${answer.capital}</strong>.` ]; return hints[n-1]; }
function newGame(practice=false) {
  const idx = practice ? Math.floor(Math.random()*countries.length) : dailyIndex();
  answer=countries[idx]; guesses=[]; finished=false; list.innerHTML=''; input.disabled=false; form.querySelector('button').disabled=false; input.value='';
  message.innerHTML = practice ? 'Practice round: a random country has been chosen.' : 'Today’s puzzle is the same for everyone — share it with a friend.';
  $('tries').textContent='5 tries left'; renderChart(); input.focus();
}
function guess(value) {
  const country=countries.find(c=>normalize(c.name)===normalize(value));
  if (!country) { message.textContent='Choose a country from the suggestions.'; return; }
  if (guesses.some(c=>c.name===country.name)) { message.textContent='You already tried that one.'; return; }
  guesses.push(country); const won=country.name===answer.name;
  const row=document.createElement('div'); row.className=`guess-row${won?' win':''}`;
  row.innerHTML=`<span>${country.name}</span><span class="wrong">${won?'Correct! 🎉':`Not quite · ${5-guesses.length} left`}</span>`; list.append(row); input.value='';
  $('tries').textContent=`${Math.max(0,5-guesses.length)} tries left`;
  if (won) end(`You got it in <strong>${guesses.length}</strong> ${guesses.length===1?'guess':'guesses'}! It was <strong>${answer.name}</strong>.`);
  else if (guesses.length===5) end(`So close — the answer was <strong>${answer.name}</strong>. Hit “Practice round” for another.`);
  else message.innerHTML=hintFor(guesses.length);
}
function end(text) { finished=true; input.disabled=true; form.querySelector('button').disabled=true; message.innerHTML=text; }
$('countries').innerHTML=countries.map(c=>`<option value="${c.name}"></option>`).join('');
form.addEventListener('submit',e=>{e.preventDefault(); if(!finished) guess(input.value);});
$('new-game').addEventListener('click',()=>newGame(true));
newGame();
