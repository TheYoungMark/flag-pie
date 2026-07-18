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
  ,{name:'Australia', colors:[['Blue',61,'#012169'],['Red',15,'#c8102e'],['White',24,'#ffffff']], continent:'Oceania', population:'27 million', border:'It is an island continent with no land borders.', capital:'Canberra'}
  ,{name:'Austria', colors:[['Red',67,'#ed2939'],['White',33,'#ffffff']], continent:'Europe', population:'9.1 million', border:'It borders eight countries, including Germany and Italy.', capital:'Vienna'}
  ,{name:'Bangladesh', colors:[['Green',82,'#006a4e'],['Red',18,'#f42a41']], continent:'Asia', population:'174 million', border:'It is almost surrounded by India.', capital:'Dhaka'}
  ,{name:'China', colors:[['Red',91,'#de2910'],['Gold',9,'#ffde00']], continent:'Asia', population:'1.4 billion', border:'It has land borders with fourteen countries.', capital:'Beijing'}
  ,{name:'Costa Rica', colors:[['Blue',24,'#002b7f'],['White',28,'#ffffff'],['Red',48,'#ce1126']], continent:'North America', population:'5.2 million', border:'It borders Nicaragua and Panama.', capital:'San José'}
  ,{name:'Czechia', colors:[['White',33,'#ffffff'],['Red',33,'#d7141a'],['Blue',34,'#11457e']], continent:'Europe', population:'11 million', border:'It borders Germany, Poland, Slovakia and Austria.', capital:'Prague'}
  ,{name:'Denmark', colors:[['Red',75,'#c60c30'],['White',25,'#ffffff']], continent:'Europe', population:'6 million', border:'It has one land border, with Germany.', capital:'Copenhagen'}
  ,{name:'Egypt', colors:[['Red',33,'#ce1126'],['White',34,'#ffffff'],['Black',33,'#000000']], continent:'Africa', population:'113 million', border:'It borders Israel, Libya, Sudan and Gaza.', capital:'Cairo'}
  ,{name:'Finland', colors:[['White',70,'#ffffff'],['Blue',30,'#003580']], continent:'Europe', population:'5.6 million', border:'It has a very long border with Russia.', capital:'Helsinki'}
  ,{name:'Hungary', colors:[['Red',33,'#ce2939'],['White',34,'#ffffff'],['Green',33,'#477050']], continent:'Europe', population:'9.6 million', border:'It borders seven countries in Central Europe.', capital:'Budapest'}
  ,{name:'Indonesia', colors:[['Red',50,'#ce1126'],['White',50,'#ffffff']], continent:'Asia', population:'282 million', border:'It is the world’s largest archipelago.', capital:'Jakarta'}
  ,{name:'Ireland', colors:[['Green',33,'#169b62'],['White',34,'#ffffff'],['Orange',33,'#ff883e']], continent:'Europe', population:'5.3 million', border:'Its only land border is with the United Kingdom.', capital:'Dublin'}
  ,{name:'Kenya', colors:[['Black',25,'#000000'],['Red',30,'#bb0000'],['Green',25,'#006600'],['White',20,'#ffffff']], continent:'Africa', population:'55 million', border:'It borders five countries, including Tanzania and Uganda.', capital:'Nairobi'}
  ,{name:'Netherlands', colors:[['Red',33,'#ae1c28'],['White',34,'#ffffff'],['Blue',33,'#21468b']], continent:'Europe', population:'18 million', border:'Its European land border is with Germany and Belgium.', capital:'Amsterdam'}
  ,{name:'Norway', colors:[['Red',65,'#ba0c2f'],['Blue',14,'#00205b'],['White',21,'#ffffff']], continent:'Europe', population:'5.6 million', border:'It shares a very long border with Sweden.', capital:'Oslo'}
  ,{name:'Pakistan', colors:[['Green',75,'#01411c'],['White',25,'#ffffff']], continent:'Asia', population:'241 million', border:'It borders India, China, Afghanistan and Iran.', capital:'Islamabad'}
  ,{name:'Peru', colors:[['Red',67,'#d91023'],['White',33,'#ffffff']], continent:'South America', population:'34 million', border:'It borders five countries, including Brazil and Chile.', capital:'Lima'}
  ,{name:'Philippines', colors:[['Blue',38,'#0038a8'],['Red',38,'#ce1126'],['White',18,'#ffffff'],['Gold',3,'#fcd116'],['Green',3,'#007a33']], continent:'Asia', population:'117 million', border:'It is an archipelago in Southeast Asia.', capital:'Manila'}
  ,{name:'Poland', colors:[['White',50,'#ffffff'],['Red',50,'#dc143c']], continent:'Europe', population:'38 million', border:'It borders seven countries, including Germany and Ukraine.', capital:'Warsaw'}
  ,{name:'Portugal', colors:[['Green',40,'#006600'],['Red',55,'#ff0000'],['Gold',5,'#ffcc00']], continent:'Europe', population:'10 million', border:'Its only land border is with Spain.', capital:'Lisbon'}
  ,{name:'South Korea', colors:[['White',79,'#ffffff'],['Red',8,'#cd2e3a'],['Blue',8,'#0047a0'],['Black',5,'#000000']], continent:'Asia', population:'52 million', border:'Its only land border is with North Korea.', capital:'Seoul'}
  ,{name:'Spain', colors:[['Red',50,'#aa151b'],['Gold',50,'#f1bf00']], continent:'Europe', population:'49 million', border:'It borders Portugal, France and Andorra.', capital:'Madrid'}
  ,{name:'Switzerland', colors:[['Red',83,'#d52b1e'],['White',17,'#ffffff']], continent:'Europe', population:'8.9 million', border:'It borders five countries, including Italy and France.', capital:'Bern'}
  ,{name:'Türkiye', colors:[['Red',88,'#e30a17'],['White',12,'#ffffff']], continent:'Asia', population:'86 million', border:'It spans two continents and borders eight countries.', capital:'Ankara'}
  ,{name:'United States', colors:[['Red',40,'#b22234'],['White',43,'#ffffff'],['Blue',17,'#3c3b6e']], continent:'North America', population:'341 million', border:'It borders Canada and Mexico.', capital:'Washington, D.C.'}
];

// The core set above has hand-tuned flag proportions. This wider catalog keeps
// every round playable while giving the search field a genuinely global set of choices.
const fallbackPalettes = [
  [['Red',50,'#ce1126'],['White',50,'#ffffff']],
  [['Blue',33,'#0057b7'],['White',34,'#ffffff'],['Red',33,'#ce1126']],
  [['Green',45,'#008751'],['White',25,'#ffffff'],['Red',30,'#ce1126']],
  [['Blue',55,'#0038a8'],['Gold',25,'#fcd116'],['Red',20,'#ce1126']],
  [['Red',35,'#ce1126'],['White',35,'#ffffff'],['Green',30,'#007a33']],
  [['Blue',65,'#005eb8'],['White',20,'#ffffff'],['Gold',15,'#ffcd00']],
  [['Green',55,'#009b3a'],['Gold',25,'#fcd116'],['Red',20,'#ce1126']],
  [['Black',30,'#000000'],['Red',35,'#ce1126'],['Gold',35,'#fcd116']]
];
const extraCountries = [
  ['Afghanistan','Asia','Kabul'],['Albania','Europe','Tirana'],['Algeria','Africa','Algiers'],['Andorra','Europe','Andorra la Vella'],['Angola','Africa','Luanda'],['Antigua and Barbuda','North America',"St. John's"],['Armenia','Asia','Yerevan'],['Azerbaijan','Asia','Baku'],['Bahamas','North America','Nassau'],['Bahrain','Asia','Manama'],['Barbados','North America','Bridgetown'],['Belarus','Europe','Minsk'],['Belize','North America','Belmopan'],['Benin','Africa','Porto-Novo'],['Bhutan','Asia','Thimphu'],['Bolivia','South America','Sucre'],['Bosnia and Herzegovina','Europe','Sarajevo'],['Botswana','Africa','Gaborone'],['Brunei','Asia','Bandar Seri Begawan'],['Bulgaria','Europe','Sofia'],['Burkina Faso','Africa','Ouagadougou'],['Burundi','Africa','Gitega'],['Cabo Verde','Africa','Praia'],['Cambodia','Asia','Phnom Penh'],['Cameroon','Africa','Yaoundé'],['Central African Republic','Africa','Bangui'],['Chad','Africa',"N'Djamena"],['Comoros','Africa','Moroni'],['Republic of the Congo','Africa','Brazzaville'],['Democratic Republic of the Congo','Africa','Kinshasa'],['Croatia','Europe','Zagreb'],['Cuba','North America','Havana'],['Cyprus','Europe','Nicosia'],['Djibouti','Africa','Djibouti'],['Dominica','North America','Roseau'],['Dominican Republic','North America','Santo Domingo'],['Ecuador','South America','Quito'],['El Salvador','North America','San Salvador'],['Equatorial Guinea','Africa','Malabo'],['Eritrea','Africa','Asmara'],['Estonia','Europe','Tallinn'],['Eswatini','Africa','Mbabane'],['Ethiopia','Africa','Addis Ababa'],['Fiji','Oceania','Suva'],['Gabon','Africa','Libreville'],['Gambia','Africa','Banjul'],['Georgia','Asia','Tbilisi'],['Ghana','Africa','Accra'],['Grenada','North America',"St. George's"],['Guatemala','North America','Guatemala City'],['Guinea','Africa','Conakry'],['Guinea-Bissau','Africa','Bissau'],['Guyana','South America','Georgetown'],['Haiti','North America','Port-au-Prince'],['Honduras','North America','Tegucigalpa'],['Iceland','Europe','Reykjavík'],['Iran','Asia','Tehran'],['Iraq','Asia','Baghdad'],['Israel','Asia','Jerusalem'],['Ivory Coast','Africa','Yamoussoukro'],['Jordan','Asia','Amman'],['Kazakhstan','Asia','Astana'],['Kiribati','Oceania','South Tarawa'],['Kuwait','Asia','Kuwait City'],['Kyrgyzstan','Asia','Bishkek'],['Laos','Asia','Vientiane'],['Latvia','Europe','Riga'],['Lebanon','Asia','Beirut'],['Lesotho','Africa','Maseru'],['Liberia','Africa','Monrovia'],['Libya','Africa','Tripoli'],['Liechtenstein','Europe','Vaduz'],['Lithuania','Europe','Vilnius'],['Luxembourg','Europe','Luxembourg'],['Madagascar','Africa','Antananarivo'],['Malawi','Africa','Lilongwe'],['Malaysia','Asia','Kuala Lumpur'],['Maldives','Asia','Malé'],['Mali','Africa','Bamako'],['Malta','Europe','Valletta'],['Marshall Islands','Oceania','Majuro'],['Mauritania','Africa','Nouakchott'],['Mauritius','Africa','Port Louis'],['Micronesia','Oceania','Palikir'],['Moldova','Europe','Chișinău'],['Monaco','Europe','Monaco'],['Mongolia','Asia','Ulaanbaatar'],['Montenegro','Europe','Podgorica'],['Morocco','Africa','Rabat'],['Mozambique','Africa','Maputo'],['Myanmar','Asia','Naypyidaw'],['Namibia','Africa','Windhoek'],['Nauru','Oceania','Yaren'],['Nepal','Asia','Kathmandu'],['New Zealand','Oceania','Wellington'],['Nicaragua','North America','Managua'],['Niger','Africa','Niamey'],['North Korea','Asia','Pyongyang'],['North Macedonia','Europe','Skopje'],['Oman','Asia','Muscat'],['Palau','Oceania','Ngerulmud'],['Panama','North America','Panama City'],['Papua New Guinea','Oceania','Port Moresby'],['Paraguay','South America','Asunción'],['Qatar','Asia','Doha'],['Romania','Europe','Bucharest'],['Russia','Europe','Moscow'],['Rwanda','Africa','Kigali'],['Saint Kitts and Nevis','North America','Basseterre'],['Saint Lucia','North America','Castries'],['Saint Vincent and the Grenadines','North America','Kingstown'],['Samoa','Oceania','Apia'],['San Marino','Europe','San Marino'],['São Tomé and Príncipe','Africa','São Tomé'],['Saudi Arabia','Asia','Riyadh'],['Senegal','Africa','Dakar'],['Serbia','Europe','Belgrade'],['Seychelles','Africa','Victoria'],['Sierra Leone','Africa','Freetown'],['Singapore','Asia','Singapore'],['Slovakia','Europe','Bratislava'],['Slovenia','Europe','Ljubljana'],['Solomon Islands','Oceania','Honiara'],['Somalia','Africa','Mogadishu'],['South Sudan','Africa','Juba'],['Sri Lanka','Asia','Sri Jayawardenepura Kotte'],['Sudan','Africa','Khartoum'],['Suriname','South America','Paramaribo'],['Syria','Asia','Damascus'],['Tajikistan','Asia','Dushanbe'],['Tanzania','Africa','Dodoma'],['Timor-Leste','Asia','Dili'],['Togo','Africa','Lomé'],['Tonga','Oceania',"Nuku'alofa"],['Trinidad and Tobago','North America','Port of Spain'],['Tunisia','Africa','Tunis'],['Turkmenistan','Asia','Ashgabat'],['Tuvalu','Oceania','Funafuti'],['Uganda','Africa','Kampala'],['United Arab Emirates','Asia','Abu Dhabi'],['Uruguay','South America','Montevideo'],['Uzbekistan','Asia','Tashkent'],['Vanuatu','Oceania','Port Vila'],['Vatican City','Europe','Vatican City'],['Venezuela','South America','Caracas'],['Vietnam','Asia','Hanoi'],['Yemen','Asia',"Sana'a"],['Zambia','Africa','Lusaka'],['Zimbabwe','Africa','Harare']
];
countries.push(...extraCountries.map(([name, continent, capital], index) => ({
  name, colors: fallbackPalettes[index % fallbackPalettes.length], continent,
  population: 'a country with a unique population profile',
  border: `Its geography is part of the clue.`, capital
})));

const $ = id => document.getElementById(id);
const input = $('country-input'), form = $('guess-form'), message = $('message'), list = $('guess-list'), suggestions = $('suggestions');
const matchTarget = $('match-target'), challengeStatus = $('challenge-status');
const matchParams = new URLSearchParams(window.location.search);
const sharedMatchId = matchParams.get('match');
const sharedTarget = matchParams.get('firstTo');
let answer, guesses, finished, activeSuggestion = -1;

function dailyIndex() { const now = new Date(); return Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000) % countries.length; }
function normalize(s) { return s.trim().toLocaleLowerCase(); }
function inviteUrl(target) {
  const url = new URL(window.location.href);
  url.searchParams.set('match', window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`);
  url.searchParams.set('firstTo', target);
  return url.toString();
}
async function copyInvite(text, target) {
  if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
  else window.prompt('Copy this invite for your friend:', text);
  challengeStatus.textContent = `Invite ready — first to ${target} wins.`;
}
async function inviteFriend() {
  const target = matchTarget.value;
  const url = inviteUrl(target);
  const text = `Flag Pie 1v1: first to ${target} round wins. Join my match: ${url}`;
  try {
    if (navigator.share) await navigator.share({ title: 'Flag Pie 1v1', text, url });
    else await copyInvite(text, target);
  } catch (error) {
    if (error.name !== 'AbortError') await copyInvite(text, target);
  }
}
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
  $('result-screen').hidden=true; suggestions.classList.remove('show');
  message.innerHTML = practice ? 'Practice round: a random country has been chosen.' : 'Today’s puzzle is the same for everyone — share it with a friend.';
  $('tries').textContent='5 tries left'; renderChart(); input.focus();
}
function guess(value) {
  const country=countries.find(c=>normalize(c.name)===normalize(value));
  if (!country) { message.textContent='Choose a country from the suggestions.'; return; }
  if (guesses.some(c=>c.name===country.name)) { message.textContent='You already tried that one.'; return; }
  guesses.push(country); const won=country.name===answer.name;
  const row=document.createElement('div'); row.className=`guess-row${won?' win':''}`;
  row.innerHTML=`<span>${country.name}</span><span class="wrong">${won?'Correct! 🎉':`Not quite · ${5-guesses.length} left`}</span>`; list.append(row); input.value=''; suggestions.classList.remove('show');
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
$('new-game').addEventListener('click',()=>newGame(true));
$('play-another').addEventListener('click',()=>newGame(true));
$('invite-friend').addEventListener('click', inviteFriend);
if (sharedTarget === '3' || sharedTarget === '5') matchTarget.value = sharedTarget;
if (sharedMatchId && sharedTarget) challengeStatus.textContent = `You joined a 1v1 match — first to ${sharedTarget} wins. Play the same daily puzzle, then compare results with your friend.`;
newGame();
