
<!DOCTYPE html>
<html lang="ps">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Media Rewards Bot</title>
<style>
*{box-sizing:border-box}
body{margin:0;background:#04111f;color:#f4f8ff;font-family:Arial,sans-serif}
header{padding:18px;background:#091d30;display:flex;justify-content:space-between;align-items:center}
.logo{font-size:20px;font-weight:bold}.logo span{color:#08e5a0}
select,input{background:#10273b;color:white;border:1px solid #23506b;border-radius:10px;padding:12px;max-width:100%}
main{max-width:900px;margin:auto;padding:14px}
.card{background:#0a2033;border:1px solid #173e55;border-radius:16px;padding:16px;margin-bottom:14px}
.balance{background:linear-gradient(130deg,#075b49,#073452)}
.green{color:#08e5a0}.amount{font-size:34px;font-weight:bold;margin:12px 0}
.stats,.nav,.grid{display:grid;gap:9px}
.stats{grid-template-columns:repeat(3,1fr)}
.stat{text-align:center;background:#061726;border-radius:12px;padding:13px 4px}
.stat strong{display:block;font-size:18px;margin-bottom:5px}
small,p{color:#a9bed0;line-height:1.6}
.nav{grid-template-columns:repeat(4,1fr);margin:16px 0}
button,.btn{border:0;border-radius:10px;padding:11px;background:#126ce0;color:white;cursor:pointer;font-weight:bold;text-decoration:none;display:inline-block;text-align:center}
.nav button{background:#10283b;border:1px solid #21465c;font-size:12px;padding:12px 3px}
.nav button.active{background:#075344;color:#08e5a0;border-color:#08e5a0}
.grid{grid-template-columns:repeat(3,minmax(0,1fr))}
.task{background:#061726;border:1px solid #1c4158;border-radius:12px;padding:12px;min-width:0}
.task a{color:white;overflow-wrap:anywhere}
.icon{font-size:27px}
.tag{color:#08e5a0;font-size:11px;margin:8px 0}
.task .btn{margin-top:10px;width:100%;font-size:12px}
.greenbtn{background:#08e5a0;color:#03251b}
.section.hidden{display:none}
.full{width:100%;margin-top:8px}
.field{display:block;width:100%;margin:7px 0 13px}
.ref{background:#03131f;border:1px dashed #08e5a0;border-radius:10px;padding:12px;overflow-wrap:anywhere}
.notice{font-size:12px;color:#ffd27b}
footer{text-align:center;color:#8da7bd;padding:20px;font-size:12px}
@media(max-width:600px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}.logo{font-size:17px}.amount{font-size:29px}.nav{gap:5px}.nav button{font-size:10px}}
@media(max-width:340px){.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<header>
  <div class="logo">▶ Media <span>Rewards</span></div>
  <select id="language" aria-label="Language">
    <option value="ps">پښتو</option>
    <option value="fa">دری</option>
    <option value="en">English</option>
  </select>
</header>

<main>
  <section class="card balance">
    <small>💰 ستا بیلانس</small>
    <div class="amount green" id="balance">$0.000</div>
    <div>🎁 د هر ټاسک انعام: <b>$0.002</b></div>
    <p>📉 لږ تر لږه ایستل: <b>$0.15</b></p>
    <button class="greenbtn" onclick="showSection('referral')">🔗 ملګري دعوت کړه</button>
  </section>

  <section class="stats">
    <div class="stat"><strong id="done">0</strong><small>ټاسکونه</small></div>
    <div class="stat"><strong id="total">$0.000</strong><small>انعام</small></div>
    <div class="stat"><strong id="friends">0</strong><small>ملګري</small></div>
  </section>

  <nav class="nav">
    <button class="active" onclick="showSection('telegram',this)">✈️ ټیلیګرام</button>
    <button onclick="showSection('youtube',this)">▶️ یوټیوب</button>
    <button onclick="showSection('whatsapp',this)">🟢 واټساپ</button>
    <button onclick="showSection('referral',this)">🔗 دعوت</button>
  </nav>

  <section class="card section" id="telegram">
    <h3>✈️ د ټیلیګرام چینلونه</h3>
    <p>هر چینل جلا خلاص کړه.</p>
    <div class="grid" id="telegramGrid"></div>
  </section>

  <section class="card section hidden" id="youtube">
    <h3>▶️ زما یوټیوب چینل</h3>
    <div class="task">
      <div class="icon">🔴 ▶️</div>
      <h3>Sharitullah1</h3>
      <p>زما چینل او ویډیوګانې وګوره.</p>
      <a class="btn full" href="https://www.youtube.com/@Sharitullah1" target="_blank" rel="noopener">یوټیوب خلاص کړه</a>
    </div>
  </section>

  <section class="card section hidden" id="whatsapp">
    <h3>🟢 د واټساپ چینل</h3>
    <div class="task">
      <div class="icon">🟢</div>
      <h3>WhatsApp Channel</h3>
      <p>زموږ واټساپ چینل خلاص کړه.</p>
      <a class="btn full" href="https://whatsapp.com/channel/0029VbAjTTJLNSZxsJvaOK3k" target="_blank" rel="noopener">واټساپ خلاص کړه</a>
    </div>
  </section>

  <section class="card section hidden" id="referral">
    <h3>🔗 د دعوت لینک</h3>
    <p>لاندې لینک کاپي کولای شې:</p>
    <div class="ref" id="refLink">https://t.me/Sharitullah</div>
    <button class="greenbtn full" onclick="copyLink()">📋 لینک کاپي کړه</button>
    <p id="copyStatus"></p>
    <p class="notice">دا نمونه لینک دی. د حقیقي دعوتونو د شمېرلو لپاره بیک‌اېنډ ته اړتیا ده.</p>
  </section>

  <section class="card">
    <h3>💵 د USDT ایستل — BEP20</h3>
    <p>لږ تر لږه اندازه: $0.15</p>
    <form id="withdrawForm">
      <label for="wallet">د والټ ادرس</label>
      <input class="field" id="wallet" placeholder="د BEP20 والټ ادرس" required>
      <label for="withdrawAmount">د ایستلو اندازه (USD)</label>
      <input class="field" id="withdrawAmount" type="number" min="0.15" step="0.001" placeholder="0.15" required>
      <label><input type="checkbox" id="terms" required> د کارولو شرطونه منم</label>
      <button class="greenbtn full" type="submit">د ایستلو غوښتنه</button>
    </form>
    <p id="withdrawStatus" class="notice"></p>
    <p class="notice">دا یوازې ډیمو ده؛ حقیقي پیسې نه لېږي. د حقیقي تادیاتو لپاره سرور او د تادیاتو سیستم ته اړتیا ده.</p>
  </section>

  <footer>Media Rewards Bot · Demo Version</footer>
</main>

<script>
const channels=[
 ["Sharitullah","https://t.me/Sharitullah"],
 ["Sharifullah2","https://t.me/Sharifullah2"],
 ["Afghanistan 20000","https://t.me/Afghanistan20000"],
 ["Music Pashto","https://t.me/MusicPashto"],
 ["WStaskbot0","https://t.me/WStaskbot0"],
 ["eclqz","https://t.me/eclqz"],
 ["Afghanistan Telegram Group","https://t.me/AfghanistanTelegramGroup"]
];

let balance=0,done=0;
const completed=new Set();
const grid=document.getElementById("telegramGrid");

channels.forEach(([name,url],i)=>{
 const item=document.createElement("div");
 item.className="task";
 item.innerHTML=`
  <div class="icon">✈️</div>
  <div class="tag">TELEGRAM TASK</div>
  <h3>${name}</h3>
  <a href="${url}" target="_blank" rel="noopener">چینل خلاص کړه ↗</a>
  <button class="greenbtn" id="task${i}">بشپړ شو</button>`;
 grid.appendChild(item);
 document.getElementById("task"+i).onclick=()=>{
  if(!document.getElementById("terms").checked){
   alert("لومړی شرطونه ومنه.");return;
  }
  if(completed.has(i)){alert("دا ټاسک مخکې ثبت شوی.");return;}
  completed.add(i);done++;balance+=0.002;
  document.getElementById("balance").textContent="$"+balance.toFixed(3);
  document.getElementById("total").textContent="$"+balance.toFixed(3);
  document.getElementById("done").textContent=done;
  document.getElementById("task"+i).textContent="ثبت شو ✓";
  document.getElementById("task"+i).disabled=true;
  alert("ډیمو ټاسک ثبت شو؛ حقیقي انعام نه دی.");
 };
});

function showSection(id,button){
 document.querySelectorAll(".section").forEach(s=>s.classList.add("hidden"));
 document.getElementById(id).classList.remove("hidden");
 document.querySelectorAll(".nav button").forEach(b=>b.classList.remove("active"));
 if(button)button.classList.add("active");
 else document.querySelectorAll(".nav button").forEach(b=>{
  if(b.getAttribute("onclick").includes("'"+id+"'"))b.classList.add("active");
 });
 document.getElementById(id).scrollIntoView({behavior:"smooth",block:"start"});
}

async function copyLink(){
 const text=document.getElementById("refLink").textContent;
 try{
  await navigator.clipboard.writeText(text);
  document.getElementById("copyStatus").textContent="لینک کاپي شو ✓";
 }catch(e){
  document.getElementById("copyStatus").textContent="دا لینک کاپي کړه: "+text;
 }
}

document.getElementById("withdrawForm").addEventListener("submit",e=>{
 e.preventDefault();
 const amount=Number(document.getElementById("withdrawAmount").value);
 const wallet=document.getElementById("wallet").value.trim();
 if(amount<0.15){alert("لږ تر لږه ایستل $0.15 دي.");return;}
 if(!wallet){alert("د والټ ادرس ولیکه.");return;}
 document.getElementById("withdrawStatus").textContent=
 "دا ډیمو ده؛ د پیسو غوښتنه نه ده لېږل شوې.";
});
</script>
</body>
</html>

<!DOCTYPE html>
<html lang="ps" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Media Rewards</title>
<style>
*{box-sizing:border-box}
:root{--bg:#06111e;--card:#0d1e30;--line:#183e57;--green:#16e6a0;--blue:#087cff;--muted:#a5b8cc}
body{margin:0;background:var(--bg);color:#f4f8ff;font-family:Arial,sans-serif}
header{padding:20px 14px;background:linear-gradient(120deg,#062e35,#102448);border-bottom:1px solid var(--line)}
.wrap{max-width:850px;margin:auto}
.brand{font-size:27px;font-weight:bold;color:var(--green)}
header p{margin:5px 0;color:var(--muted)}
main{padding:14px}
.card{background:var(--card);border:1px solid var(--line);border-radius:17px;padding:16px;margin-bottom:14px}
h2{font-size:19px;margin:0 0 13px}
.muted{color:var(--muted);font-size:13px;line-height:1.7}
.balance{background:linear-gradient(120deg,#075b48,#092b43);border-color:#087f70}
.money{font-size:36px;color:var(--green);font-weight:bold;direction:ltr;text-align:right}
.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:9px}
.stat{padding:13px;background:#0a1929;border:1px solid var(--line);border-radius:12px}
.stat strong{display:block;font-size:22px;color:var(--green);margin-top:6px}
button,.btn{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:10px;padding:11px 13px;background:var(--green);color:#032218;font-weight:bold;text-decoration:none;cursor:pointer;font-size:13px}
.blue{background:var(--blue);color:white}
.dark{background:#1a3046;color:white}
.tabs{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px}
.tabs button{flex:1;min-width:65px}
.taskgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.task{min-width:0;padding:12px;background:#091827;border:1px solid var(--line);border-radius:14px}
.tasktop{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.icon{width:43px;height:43px;border-radius:13px;display:grid;place-items:center;font-size:24px;background:#123754}
.taskname{font-size:14px;font-weight:bold;overflow-wrap:anywhere}
.tasktype{font-size:11px;color:var(--muted);margin-top:4px}
.actions{display:flex;gap:6px;margin-top:10px}
.actions>*{flex:1;min-width:0;text-align:center;padding:10px 5px}
input,select{width:100%;padding:12px;margin:7px 0 13px;border-radius:9px;border:1px solid var(--line);background:#061321;color:white;font-size:14px}
label{font-size:13px;color:var(--muted)}
.full{width:100%}
.notice{background:#30291b;color:#f6d68c;padding:11px;border-radius:9px;font-size:12px;line-height:1.7}
nav{position:sticky;bottom:0;display:flex;justify-content:space-around;gap:5px;padding:10px;background:#081421;border-top:1px solid var(--line)}
nav button{background:transparent;color:#b9cbe0;flex:1;padding:9px 3px}
nav button:focus{color:var(--green)}
.page{display:none}
.page.active{display:block}
footer{text-align:center;color:var(--muted);font-size:12px;padding:20px}
@media(min-width:650px){.taskgrid{grid-template-columns:repeat(3,minmax(0,1fr))}.stats{grid-template-columns:repeat(4,1fr)}}
</style>
</head>
<body>
<header>
<div class="wrap">
<div class="brand">◈ Media Rewards</div>
<p>Telegram · YouTube · WhatsApp · Rewards</p>
</div>
</header>

<main class="wrap">
<section class="card balance">
<div class="muted">ستاسې د ډیمو بیلانس</div>
<div class="money" id="balance">$0.000</div>
<div class="stats">
<div class="stat">🎁 د هر ټاسک انعام<strong>$0.002</strong></div>
<div class="stat">💸 لږ تر لږه ایستل<strong>$0.15</strong></div>
</div>
</section>

<section class="stats" style="margin-bottom:14px">
<div class="stat">👥 دعوتونه<strong id="invites">0</strong></div>
<div class="stat">✅ ټاسکونه<strong id="count">0</strong></div>
<div class="stat">▶️ ویډیو<strong id="videos">0</strong></div>
<div class="stat">💰 ټول عاید<strong id="earned">$0.000</strong></div>
</section>

<nav>
<button onclick="tab('home')">🏠 کور</button>
<button onclick="tab('tasks')">📋 دندې</button>
<button onclick="tab('video')">▶️ ویډیو</button>
<button onclick="tab('referral')">👥 ریفرل</button>
<button onclick="tab('withdraw')">💳 ایستل</button>
</nav>

<section id="home" class="page active">
<div class="card">
<h2>✨ چټک لاسرسی</h2>
<div class="stats">
<button onclick="tab('tasks')">✈️ ټیلیګرام</button>
<button onclick="tab('tasks')">▶️ یوټیوب</button>
<button onclick="tab('tasks')">🟢 واټس‌اپ</button>
<button onclick="tab('referral')">🔗 د بلنې لینک</button>
</div>
</div>
<div class="card">
<h2>📌 مهم معلومات</h2>
<p class="muted">هر چینل جلا لینک لري. د ټاسک تڼۍ یوازې په دې ډیمو کې کار ثبتوي؛ ګډون په رښتیا نه تاییدوي.</p>
</div>
</section>

<section id="tasks" class="page">
<div class="card">
<h2>📱 د رسنیو ټاسکونه</h2>
<div class="tabs">
<button onclick="renderTasks('all')">ټول</button>
<button class="blue" onclick="renderTasks('Telegram')">✈️ Telegram</button>
<button class="blue" onclick="renderTasks('YouTube')">▶️ YouTube</button>
<button class="blue" onclick="renderTasks('WhatsApp')">🟢 WhatsApp</button>
</div>
<div id="taskList" class="taskgrid"></div>
</div>
</section>

<section id="video" class="page">
<div class="card">
<h2>▶️ د ویډیو برخه</h2>
<div id="videoBox" class="muted">د ویډیو لینک د تنظیماتو له برخې اضافه کړه.</div>
<label>د ویډیو لینک</label>
<input id="videoUrl" placeholder="https://www.youtube.com/watch?v=...">
<label>د ویډیو د کتلو ټاکلې شمېر (ډیمو)</label>
<input id="videoLimit" type="number" min="1" max="20" value="1">
<button class="full" onclick="saveVideo()">ویډیو خوندي کړه</button>
<button class="full blue" style="margin-top:8px" onclick="openVideo()">ویډیو خلاصه کړه</button>
<p class="muted">د شمېر حد یوازې د دې براوزر د ډیمو لپاره دی؛ اتومات لیدنې یا حقیقي انعامونه نه جوړوي.</p>
</div>
</section>

<section id="referral" class="page">
<div class="card">
<h2>👥 ملګري دعوت کړه</h2>
<p class="muted">خپل د بلنې لینک کاپي کړه او له ملګرو سره یې شریک کړه.</p>
<input id="refLink" readonly>
<button class="full blue" onclick="copyRef()">🔗 لینک کاپي کړه</button>
<div class="stat" style="margin-top:12px">دعوتونه<strong id="refCount">0</strong></div>
<p class="muted">حقیقي دعوتونه او د هر کس جلا عاید د Telegram Bot او سرور ته اړتیا لري.</p>
</div>
</section>

<section id="withdraw" class="page">
<div class="card">
<h2>💳 د USDT ایستل</h2>
<div class="notice">لږ تر لږه $0.15 USDT · BEP20<br>دا فورم ډیمو دی او پیسې نه لېږي.</div>
<label>د والټ عامه ادرس</label>
<input id="wallet" placeholder="0x...">
<label>د ایستلو اندازه (USDT)</label>
<input id="amount" type="number" min="0.15" step="0.001" placeholder="0.150">
<button class="full" onclick="withdraw()">د ایستلو غوښتنه</button>
<p id="withdrawMsg" class="muted"></p>
<p class="muted">شخصي کیلي یا Seed Phrase مه داخلوه.</p>
</div>
</section>

<section class="card">
<h2>⚙️ د ژبې او انعام تنظیمات</h2>
<label>ژبه</label>
<select id="language" onchange="changeLang()">
<option value="ps">پښتو</option>
<option value="fa">دری</option>
<option value="en">English</option>
</select>
<p class="muted">انعام: $0.002 · لږ تر لږه ایستل: $0.15</p>
</section>
<footer>Media Rewards · Demo Version</footer>
</main>

<script>
const tasks=[
["Telegram","Sharitullah","https://t.me/Sharitullah","✈️"],
["Telegram","Sharifullah2","https://t.me/Sharifullah2","✈️"],
["Telegram","Afghanistan20000","https://t.me/Afghanistan20000","✈️"],
["Telegram","MusicPashto","https://t.me/MusicPashto","✈️"],
["Telegram Bot","WStaskbot0","https://t.me/WStaskbot0","🤖"],
["Telegram Link","eclqz","https://t.me/eclqz","✈️"],
["Telegram Group","Afghanistan Telegram Group","https://t.me/AfghanistanTelegramGroup","👥"],
["YouTube","Sharitullah1","https://www.youtube.com/@Sharitullah1","▶️"],
["WhatsApp","WhatsApp Channel","https://whatsapp.com/channel/0029VbAjTTJLNSZxsJvaOK3k","🟢"]
];
const KEY="mrDemoDesignV2";
let data={balance:0,done:[],videoCount:0};
try{data={...data,...JSON.parse(localStorage.getItem(KEY)||"{}")}}catch(e){}
function save(){localStorage.setItem(KEY,JSON.stringify(data));update()}
function money(n){return "$"+Number(n).toFixed(3)}
function update(){
 document.getElementById("balance").textContent=money(data.balance);
 document.getElementById("earned").textContent=money(data.balance);
 document.getElementById("count").textContent=data.done.length;
 document.getElementById("videos").textContent=data.videoCount;
}
function tab(id){
 document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 window.scrollTo({top:0,behavior:"smooth"});
}
function renderTasks(filter="all"){
 document.getElementById("taskList").innerHTML=tasks.map((t,i)=>{
 if(filter!=="all"&&t[0]!==filter)return "";
 const done=data.done.includes(i);
 const color=t[0]==="YouTube"?"#ff3030":t[0]==="WhatsApp"?"#0baf70":"#168cff";
 return `<article class="task">
 <div class="tasktop">
 <div class="icon" style="color:${color}">${t[3]}</div>
 <div><div class="taskname">${t[1]}</div><div class="tasktype">${t[0]} · $0.002</div></div>
 </div>
 <div class="actions">
 <a class="btn blue" href="${t[2]}" target="_blank" rel="noopener">لینک ↗</a>
 <button ${done?"disabled":""} onclick="complete(${i})">${done?"✓ بشپړ":"بشپړ کړه"}</button>
 </div>
 </article>`;
 }).join("");
}
function complete(i){
 if(data.done.includes(i))return;
 if(!confirm("دا د ډیمو ثبت دی، ګډون نه تاییدوي او حقیقي پیسې نه ورکوي. دوام ورکړې؟"))return;
 data.done.push(i);data.balance=Math.round((data.balance+.002)*1000)/1000;
 save();renderTasks();
}
function copyRef(){
 const el=document.getElementById("refLink");el.select();el.setSelectionRange(0,99999);
 if(navigator.clipboard)navigator.clipboard.writeText(el.value).then(()=>alert("لینک کاپي شو")).catch(()=>alert(el.value));
 else alert(el.value);
}
function withdraw(){
 const amount=Number(document.getElementById("amount").value);
 const wallet=document.getElementById("wallet").value.trim();
 const msg=document.getElementById("withdrawMsg");
 if(!/^0x[a-fA-F0-9]{40}$/.test(wallet)){msg.textContent="د BEP20 ادرس بڼه وګوره.";return}
 if(amount<.15){msg.textContent="لږ تر لږه $0.15 اړین دي.";return}
 if(amount>data.balance){msg.textContent="ډیمو بیلانس کافي نه دی.";return}
 msg.textContent="ډیمو غوښتنه ده؛ پیسې نه دي لېږل شوې.";
}
function saveVideo(){
 const url=document.getElementById("videoUrl").value.trim();
 const limit=Number(document.getElementById("videoLimit").value);
 if(!/^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(url)){alert("د YouTube سم لینک ولیکه.");return}
 if(limit<1||limit>20){alert("حد باید له 1 تر 20 وي.");return}
 localStorage.setItem("mrDemoVideo",url);
 localStorage.setItem("mrDemoVideoLimit",String(limit));
 renderVideo();alert("د ډیمو تنظیمات خوندي شول.");
}
function renderVideo(){
 const url=localStorage.getItem("mrDemoVideo")||"";
 const box=document.getElementById("videoBox");
 if(!url){box.textContent="د ویډیو لینک د همدې برخې له لارې اضافه کړه.";return}
 box.innerHTML='<p>ویډیو لینک خوندي دی.</p><a class="btn blue" href="'+url+'" target="_blank" rel="noopener">ویډیو خلاصه کړه ↗</a>';
 document.getElementById("videoUrl").value=url;
 document.getElementById("videoLimit").value=localStorage.getItem("mrDemoVideoLimit")||"1";
}
function openVideo(){
 const url=localStorage.getItem("mrDemoVideo");
 if(url){data.videoCount++;save();window.open(url,"_blank","noopener")}
 else alert("لومړی د ویډیو لینک خوندي کړه.");
}
function changeLang(){
 const l=document.getElementById("language").value;
 document.documentElement.lang=l;
 document.documentElement.dir=l==="en"?"ltr":"rtl";
 alert(l==="en"?"Language selected for demo.":l==="fa"?"زبان انتخاب شد.":"ژبه وټاکل شوه.");
}
document.getElementById("refLink").value=location.href.split("?")[0]+"?ref=DEMO123";
document.getElementById("invites").textContent="0";
document.getElementById("refCount").textContent="0";
renderTasks();renderVideo();update();
</script>
</body>
</html>
