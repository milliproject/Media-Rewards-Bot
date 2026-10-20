
<!DOCTYPE html>
<html lang="ps" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Media Rewards</title>
<style>
*{box-sizing:border-box}
body{margin:0;background:#071710;color:white;font-family:Arial,sans-serif}
header{background:#10462e;padding:20px;text-align:center}
.logo{font-size:35px}
main{max-width:700px;margin:auto;padding:14px}
.card{background:#11291e;border:1px solid #28513c;border-radius:14px;padding:15px;margin:12px 0}
h1,h2{margin:5px 0 14px}
h1{color:#30e894}
button{background:#2be58e;color:#062016;border:0;border-radius:9px;padding:11px;font-weight:bold;cursor:pointer}
a{color:#2be58e;text-decoration:none}
input,select{width:100%;padding:12px;margin:7px 0;background:#071710;color:white;border:1px solid #28513c;border-radius:8px}
.stats{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.stat{background:#173729;border-radius:10px;padding:12px}
.number{color:#2be58e;font-size:23px;font-weight:bold}
.item{display:flex;align-items:center;gap:12px}
.pic{width:48px;height:48px;object-fit:cover;border-radius:12px;background:#204936}
.info{flex:1;min-width:0}
.info p{margin:5px 0;color:#b8d4c3;font-size:12px;overflow-wrap:anywhere}
.actions{display:flex;gap:7px;margin-top:12px;flex-wrap:wrap}
.actions a,.actions button{flex:1;text-align:center}
.secondary{background:#234b36;color:white}
.tabs{display:flex;gap:6px;flex-wrap:wrap}
.tabs button{flex:1}
footer{text-align:center;color:#a8c7b5;padding:20px;font-size:12px}
</style>
</head>
<body>
<header>
 <div class="logo">💚</div>
 <h1>MEDIA REWARDS</h1>
 <p>ټاسکونه • ریفرل • انعامونه</p>
 <select id="lang" onchange="languageChange()">
  <option value="ps">پښتو</option>
  <option value="fa">دری</option>
  <option value="en">English</option>
 </select>
</header>

<main>
<section class="card">
 <h2 id="welcome">👋 ښه راغلاست!</h2>
 <div class="stats">
  <div class="stat"><div id="balLabel">بیلانس</div><div class="number" id="balance">$0.000</div></div>
  <div class="stat"><div>ټاسکونه</div><div class="number" id="count">0</div></div>
  <div class="stat"><div>ریفرلونه</div><div class="number" id="refs">0</div></div>
  <div class="stat"><div>ریفرل عاید</div><div class="number" id="refEarn">$0.000</div></div>
 </div>
 <small>یادونه: دا مخکینۍ ډیمو ده؛ بیلانس حقیقي پیسې نه دي.</small>
</section>

<section class="card">
 <h2>📱 چینلونه او ټاسکونه</h2>
 <div class="tabs">
  <button onclick="show('all')">ټول</button>
  <button onclick="show('Telegram')">Telegram</button>
  <button onclick="show('YouTube')">YouTube</button>
  <button onclick="show('WhatsApp')">WhatsApp</button>
 </div>
 <div id="tasks"></div>
</section>

<section class="card">
 <h2>👥 ریفرل سیستم</h2>
 <p>خپل لینک له ملګرو سره شریک کړه.</p>
 <input id="refLink" readonly>
 <button onclick="copyRef()">ریفرل لینک کاپي کړه</button>
 <p class="muted">ریفرل عاید دلته یوازې ډیمو دی؛ حقیقي محاسبه سرور ته اړتیا لري.</p>
</section>

<section class="card">
 <h2>💵 د پیسو ایستل</h2>
 <p>USDT • BEP20 • لږ تر لږه $0.15</p>
 <input id="amount" type="number" min=".15" step=".001" placeholder="د پیسو اندازه">
 <input id="wallet" placeholder="عامه BEP20 والټ پته">
 <button onclick="withdraw()">غوښتنه ثبت کړه</button>
 <p id="withdrawMsg"></p>
</section>

<section class="card">
 <h2>📜 شرایط</h2>
 <label><input type="checkbox" id="terms" style="width:auto"> ما شرایط ولوستل او منم چې دا ډیمو ده او حقیقي تادیه نه کوي.</label>
</section>

<footer>Media Rewards © 2026</footer>
</main>

<script>
const tasks=[
 {name:"Sharitullah",type:"Telegram",url:"https://t.me/Sharitullah",img:"https://telegram.org/img/t_logo.png"},
 {name:"Sharifullah2",type:"Telegram",url:"https://t.me/Sharifullah2",img:"https://telegram.org/img/t_logo.png"},
 {name:"Afghanistan20000",type:"Telegram",url:"https://t.me/Afghanistan20000",img:"https://telegram.org/img/t_logo.png"},
 {name:"Music Pashto",type:"Telegram",url:"https://t.me/MusicPashto",img:"https://telegram.org/img/t_logo.png"},
 {name:"WStaskbot0",type:"Telegram",url:"https://t.me/WStaskbot0",img:"https://telegram.org/img/t_logo.png"},
 {name:"eclqz",type:"Telegram",url:"https://t.me/eclqz",img:"https://telegram.org/img/t_logo.png"},
 {name:"Afghanistan Telegram Group",type:"Telegram",url:"https://t.me/AfghanistanTelegramGroup",img:"https://telegram.org/img/t_logo.png"},
 {name:"Sharitullah YouTube",type:"YouTube",url:"https://www.youtube.com/@Sharitullah1",img:"https://www.youtube.com/s/desktop/9c6e2b7b/img/favicon_144x144.png"},
 {name:"WhatsApp Channel",type:"WhatsApp",url:"https://whatsapp.com/channel/0029VbAjTTJLNSZxsJvaOK3k",img:"https://static.whatsapp.net/rsrc.php/v4/yP/r/rYZqPCBaG70.png"}
];
let balance=0,count=0;
const done=new Set();
function show(filter){
 document.getElementById("tasks").innerHTML=tasks.filter(t=>filter==="all"||t.type===filter).map((t,i)=>{
 const id=tasks.indexOf(t);
 return `<div class="card">
 <div class="item">
 <img class="pic" src="${t.img}" alt="${t.type}" onerror="this.style.display='none'">
 <div class="info"><b>${t.name}</b><p>${t.type} • ډیمو انعام $0.002</p></div>
 </div>
 <div class="actions">
 <a href="${t.url}" target="_blank" rel="noopener"><button>لینک خلاص کړه ↗</button></a>
 <button class="secondary" onclick="complete(${id})" ${done.has(id)?"disabled":""}>${done.has(id)?"بشپړ شو":"ډیمو بشپړ"}</button>
 </div></div>`;
 }).join("");
}
function complete(id){
 if(!document.getElementById("terms").checked)return alert("لومړی شرایط ومنه.");
 if(done.has(id))return;
 if(!confirm("دا یوازې ډیمو ده، ګډون نه تاییدوي او حقیقي پیسې نه ورکوي. دوام ورکړې؟"))return;
 done.add(id);count++;balance+=.002;
 document.getElementById("balance").textContent="$"+balance.toFixed(3);
 document.getElementById("count").textContent=count;
 show(document.querySelector(".tabs button.active")?.dataset?.filter||"all");
}
function copyRef(){
 const input=document.getElementById("refLink");
 input.select();input.setSelectionRange(0,99999);
 if(navigator.clipboard)navigator.clipboard.writeText(input.value).then(()=>alert("کاپي شو")).catch(()=>alert(input.value));
 else alert(input.value);
}
function withdraw(){
 if(!document.getElementById("terms").checked)return alert("لومړی شرایط ومنه.");
 const amount=Number(document.getElementById("amount").value);
 const wallet=document.getElementById("wallet").value.trim();
 const msg=document.getElementById("withdrawMsg");
 if(!wallet)return msg.textContent="د والټ عامه پته ولیکه.";
 if(amount<.15)return msg.textContent="لږ تر لږه $0.15 اړین دي.";
 if(amount>balance)return msg.textContent="بیلانس کافي نه دی.";
 msg.textContent="دا یوازې ډیمو ده؛ حقیقي تادیه نه ده لېږل شوې.";
}
function languageChange(){
 const l=document.getElementById("lang").value;
 document.documentElement.lang=l;
 document.documentElement.dir=l==="en"?"ltr":"rtl";
 document.getElementById("welcome").textContent=
 l==="en"?"Welcome!":l==="fa"?"خوش آمدید!":"👋 ښه راغلاست!";
 document.getElementById("balLabel").textContent=
 l==="en"?"Balance":l==="fa"?"موجودی":"بیلانس";
}
document.getElementById("refLink").value=location.origin+location.pathname+"?ref=MEDIA-DEMO";
show("all");
</script>
</body>
</html>
