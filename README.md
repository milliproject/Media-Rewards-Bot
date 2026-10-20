
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
