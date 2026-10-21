
<!doctype html>
<html lang="ps" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#fffaf0">
<title>Media Rewards</title>
<style>
:root {
  --gold: #e9a313;
  --ink: #242424;
  --muted: #777;
  --paper: #fffefa;
  --line: #f0dfb8;
  --green: #169b68;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Arial, Tahoma, sans-serif;
  color: var(--ink);
  background: linear-gradient(135deg, #fffaf0, #f5f7f7, #fff7e8);
  line-height: 1.6;
}
button, input, select { font: inherit; }
a { text-decoration: none; color: inherit; }
.wrap { max-width: 980px; margin: auto; padding: 0 14px; }
header {
  position: sticky; top: 0; z-index: 5;
  background: #fffefaed; border-bottom: 1px solid var(--line);
}
.top {
  min-height: 76px; display: flex;
  align-items: center; justify-content: space-between; gap: 12px;
}
.brand { display: flex; align-items: center; gap: 10px; }
.mark {
  width: 48px; height: 48px; border-radius: 50%;
  display: grid; place-items: center;
  background: linear-gradient(135deg, #fff2b2, #e4a10e);
  color: #754900; font-weight: 900; font-size: 24px;
}
.brand strong { font-size: 21px; color: var(--gold); }
.muted { color: var(--muted); font-size: 12px; }
.iconbtn { background: none; border: 0; font-size: 22px; padding: 7px; }
.country { display: flex; gap: 8px; margin: 14px 0; }
.country select { flex: 1; min-width: 0; }
input, select {
  width: 100%; padding: 12px; border: 1px solid #e6d8b8;
  background: #fffefa; border-radius: 12px;
}
.btn {
  border: 0; border-radius: 12px; padding: 11px 14px;
  background: var(--gold); color: white; font-weight: bold;
  display: inline-flex; align-items: center; justify-content: center;
  gap: 6px; cursor: pointer; text-align: center;
}
.btn.light { background: white; color: #865b08; border: 1px solid var(--line); }
.btn.green { background: var(--green); }
.btn.full { width: 100%; margin-top: 8px; }
.hero {
  margin: 16px 0; padding: 23px 20px;
  border: 1px solid var(--line); border-radius: 24px;
  background: linear-gradient(135deg, #fffefa, #fff1d0);
}
.hero h1 { margin: 0 0 5px; font-size: 25px; }
.hero p, .panel p { color: var(--muted); margin: 0 0 14px; }
.pill {
  display: inline-block; background: #fff0c7; color: #8b5b00;
  border: 1px solid #f3dfa6; border-radius: 99px;
  padding: 4px 10px; font-size: 12px; font-weight: bold;
}
.stats {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 10px; margin: 14px 0 24px;
}
.stat, .panel {
  background: var(--paper); border: 1px solid var(--line);
  border-radius: 18px; padding: 15px;
}
.statlabel { font-size: 12px; color: var(--muted); }
.statvalue { font-size: 22px; font-weight: 800; color: #b47a08; }
.section { margin: 25px 0; }
.head {
  display: flex; align-items: center; justify-content: space-between;
  gap: 8px; margin-bottom: 12px;
}
.head h2 { font-size: 19px; margin: 0; }
.tabs { display: flex; gap: 7px; overflow-x: auto; padding: 2px 0 9px; }
.tab {
  white-space: nowrap; border: 1px solid var(--line);
  border-radius: 99px; background: #fff; color: #725a2b; padding: 8px 13px;
}
.tab.active { background: var(--gold); color: white; }
.tasks { display: grid; grid-template-columns: 1fr; gap: 11px; }
.task {
  display: flex; align-items: center; gap: 10px; padding: 12px;
  background: var(--paper); border: 1px solid var(--line);
  border-radius: 17px; min-width: 0;
}
.tasklogo {
  flex: 0 0 46px; height: 46px; border-radius: 14px;
  background: #fff2d7; display: grid; place-items: center; font-size: 24px;
}
.taskinfo { flex: 1; min-width: 0; }
.taskinfo strong { display: block; overflow-wrap: anywhere; }
.taskinfo small { display: block; color: var(--muted); font-size: 11px; }
.reward { color: #9a6800; font-size: 12px; font-weight: bold; }
.actions { display: flex; flex-direction: column; gap: 6px; }
.actions .btn { padding: 8px; font-size: 12px; min-width: 68px; }
.notice {
  background: #fff7df; border: 1px solid #f2dfaa; color: #775b1b;
  border-radius: 12px; padding: 11px; font-size: 12px; margin-top: 12px;
}
.message { font-size: 13px; color: var(--green); margin-top: 9px; overflow-wrap: anywhere; }
.field { margin: 12px 0; }
label { display: block; font-size: 13px; font-weight: bold; margin-bottom: 6px; }
.refstats { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-top: 12px; }
.refstat { background: #fff7e6; border: 1px solid var(--line); border-radius: 13px; padding: 12px; }
.refstat b { display: block; color: #a96f05; font-size: 19px; }
.refrow { display: flex; gap: 7px; }
.refrow input { min-width: 0; }
.video { width: 100%; aspect-ratio: 16/9; border: 0; border-radius: 15px; background: #111; }
.videocap { font-size: 13px; font-weight: bold; margin: 7px 0 10px; }
.videonav { display: flex; gap: 7px; }
.videonav .btn { flex: 1; padding: 9px 5px; }
.dots { display: flex; justify-content: center; gap: 6px; margin-top: 10px; }
.dot { border: 0; width: 8px; height: 8px; border-radius: 99px; padding: 0; background: #e6d8ba; }
.dot.active { width: 22px; background: var(--gold); }
.bottom {
  position: sticky; bottom: 0; background: #fffefaed;
  border-top: 1px solid var(--line); display: grid;
  grid-template-columns: repeat(4, 1fr); padding: 7px 4px;
}
.nav {
  background: none; border: 0; color: #777;
  display: flex; flex-direction: column; align-items: center; font-size: 11px;
}
.nav span:first-child { font-size: 21px; }
.nav.active { color: var(--gold); font-weight: bold; }
footer { text-align: center; color: #858585; font-size: 12px; padding: 18px 0 24px; }
@media (min-width: 650px) {
  .stats { grid-template-columns: repeat(4, 1fr); }
  .tasks { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .actions { flex-direction: row; }
}
@media (max-width: 390px) {
  .brand strong { font-size: 18px; }
  .mark { width: 42px; height: 42px; }
  .task { gap: 7px; padding: 9px; }
  .tasklogo { width: 40px; height: 40px; flex-basis: 40px; }
  .actions .btn { min-width: 0; padding: 7px 6px; }
}
</style>
</head>
<body>
<header>
  <div class="wrap top">
    <div class="brand">
      <div class="mark">M</div>
      <div><strong>MEDIA REWARDS</strong><div class="muted">Telegram · YouTube · Rewards</div></div>
    </div>
    <div>
      <button class="iconbtn" onclick="go('countrySection')">🌐</button>
      <button class="iconbtn" onclick="go('referralSection')">♙</button>
      <button class="iconbtn" onclick="go('tasksSection')">☰</button>
    </div>
  </div>
</header>

<main class="wrap">
  <section class="country" id="countrySection">
    <select id="country" aria-label="هېواد">
      <option>🇦🇫 افغانستان</option><option>🇵🇰 پاکستان</option>
      <option>🇮🇳 هند</option><option>🇮🇷 ایران</option>
      <option>🇹🇷 ترکیه</option><option>🇵🇸 فلسطین</option>
      <option>🇧🇩 بنګله‌دېش</option><option>🇸🇦 سعودي عربستان</option>
      <option>🇺🇸 امریکا</option><option>🇬🇧 بریتانیا</option>
    </select>
    <button class="btn" onclick="chooseCountry()">هېواد وټاکه</button>
  </section>

  <section class="hero">
    <span class="pill">✨ د میډیا انعامونو مرکز</span>
    <h1>خپل ټاسکونه بشپړ کړه</h1>
    <p>د Telegram لازمي چینلونه او اختیاري YouTube او WhatsApp کارونه په یوه ځای کې.</p>
    <button class="btn" onclick="go('tasksSection')">📋 ټاسکونه وګوره ↓</button>
  </section>

  <section class="stats" id="statsSection">
    <div class="stat"><div class="statlabel">زما ډیمو بیلانس</div><div class="statvalue" id="balance">$0.000</div></div>
    <div class="stat"><div class="statlabel">ټولې ډیمو ګټې</div><div class="statvalue" id="earned">$0.000</div></div>
    <div class="stat"><div class="statlabel">نښه شوي کارونه</div><div class="statvalue" id="taskCount">0</div></div>
    <div class="stat"><div class="statlabel">لږ تر لږه ایستل</div><div class="statvalue">$0.150</div></div>
  </section>

  <section class="section" id="tasksSection">
    <div class="head"><h2>📋 دندې او چینلونه</h2><span class="muted">هر چینل جلا</span></div>
    <div class="tabs">
      <button class="tab active" data-filter="all">ټول</button>
      <button class="tab" data-filter="telegram">✈️ Telegram</button>
      <button class="tab" data-filter="youtube">▶️ YouTube</button>
      <button class="tab" data-filter="whatsapp">🟢 WhatsApp</button>
    </div>
    <div class="tasks" id="taskList"></div>
    <div class="notice">دا د ډیزاین ډیمو ده. د «ډیمو نښه» تڼۍ غړیتوب نه تاییدوي او حقیقي پیسې نه ورکوي. د واقعي سیستم لپاره سرور او Telegram Bot API اړین دي.</div>
  </section>

  <section class="section" id="videosSection">
    <div class="head"><h2>🎬 د YouTube ویډیوګانې</h2><span class="muted">۳ ویډیوګانې</span></div>
    <div class="panel">
      <iframe id="videoFrame" class="video" src="https://www.youtube-nocookie.com/embed/eWJKYE0UsoI" title="YouTube video player" loading="lazy" allowfullscreen></iframe>
      <div class="videocap" id="videoCaption">ویډیو ۱ / ۳</div>
      <div class="videonav">
        <button class="btn light" onclick="changeVideo(-1)">مخکینۍ ←</button>
        <button class="btn" onclick="openVideo()">په YouTube کې ▶</button>
        <button class="btn light" onclick="changeVideo(1)">راتلونکې →</button>
      </div>
      <div class="dots" id="dots"></div>
      <a class="btn light" style="margin-top:12px" href="https://www.youtube.com/@Sharitullah1" target="_blank" rel="noopener">▶️ زموږ YouTube چینل</a>
    </div>
  </section>

  <section class="section" id="referralSection">
    <div class="head"><h2>👥 د ملګرو بلنه</h2><span class="muted">Referral</span></div>
    <div class="panel">
      <p>خپل لینک له ملګرو سره شریک کړه. حقیقي شمېرې د سرور له لارې ثبتېږي.</p>
      <div class="field"><label for="refLink">ستاسو د بلنې لینک</label><div class="refrow"><input id="refLink" readonly><button class="btn" onclick="copyRef()">کاپي</button></div></div>
      <div class="refstats">
        <div class="refstat"><span class="muted">بلل شوي کسان</span><b>0</b></div>
        <div class="refstat"><span class="muted">د ریفرل ګټه</span><b>$0.000</b></div>
      </div>
      <div class="message" id="refMessage">دا شمېرې تر سرور نښلولو پورې ډیمو دي.</div>
    </div>
  </section>

  <section class="section" id="withdrawSection">
    <div class="head"><h2>💵 د USDT ایستل</h2><span class="muted">BEP20</span></div>
    <div class="panel">
      <p>لږ تر لږه ایستل: $0.15. دا فورم یوازې ډیمو دی.</p>
      <form id="withdrawForm">
        <div class="field"><label for="amount">اندازه (USDT)</label><input id="amount" type="number" min="0.15" step="0.001" placeholder="0.150" required></div>
        <div class="field"><label for="wallet">عامه BEP20 والټ پته</label><input id="wallet" placeholder="0x..." required></div>
        <button class="btn full" type="submit">د ایستلو غوښتنه ثبت کړه</button>
      </form>
      <div id="withdrawMessage" class="message"></div>
      <div class="notice">د والټ پټ عبارت، شخصي کیلي یا د روباټ Token مه شریکوه. دا فورم حقیقي تادیه نه لېږي.</div>
    </div>
  </section>

  <section class="section" id="historySection">
    <div class="head"><h2>📜 وروستي فعالیتونه</h2></div>
    <div class="panel" id="history"><p>تر اوسه فعالیت نشته.</p></div>
  </section>
</main>

<nav class="bottom">
  <button class="nav active" onclick="go('statsSection')"><span>▦</span>کور</button>
  <button class="nav" onclick="go('withdrawSection')"><span>▣</span>والټ</button>
  <button class="nav" onclick="go('tasksSection')"><span>◎</span>ټاسکونه</button>
  <button class="nav" onclick="go('referralSection')"><span>♙</span>پروفایل</button>
</nav>
<footer class="wrap">Media Rewards · ډیزاین ډیمو نسخه</footer>

<script>
const tasks = [
 {id:"tg1",cat:"telegram",icon:"✈️",name:"Sharitullah",url:"https://t.me/Sharitullah"},
 {id:"tg2",cat:"telegram",icon:"✈️",name:"Sharifullah2",url:"https://t.me/Sharifullah2"},
 {id:"tg3",cat:"telegram",icon:"✈️",name:"Afghanistan20000",url:"https://t.me/Afghanistan20000"},
 {id:"tg4",cat:"telegram",icon:"✈️",name:"MusicPashto",url:"https://t.me/MusicPashto"},
 {id:"tg5",cat:"telegram",icon:"🤖",name:"WStaskbot0",url:"https://t.me/WStaskbot0"},
 {id:"tg6",cat:"telegram",icon:"✈️",name:"eclqz",url:"https://t.me/eclqz"},
 {id:"tg7",cat:"telegram",icon:"👥",name:"Afghanistan Telegram Group",url:"https://t.me/AfghanistanTelegramGroup"},
 {id:"yt1",cat:"youtube",icon:"▶️",name:"Sharitullah YouTube چینل",url:"https://www.youtube.com/@Sharitullah1"},
 {id:"wa1",cat:"whatsapp",icon:"🟢",name:"WhatsApp چینل",url:"https://whatsapp.com/channel/0029VbAjTTJLNSZxsJvaOK3k"}
];
const videos = [
 {id:"eWJKYE0UsoI",title:"ویډیو ۱",url:"https://youtu.be/eWJKYE0UsoI"},
 {id:"vEb_6i-s-YU",title:"ویډیو ۲",url:"https://youtu.be/vEb_6i-s-YU"},
 {id:"9Wwvje-WELE",title:"ویډیو ۳ (Shorts)",url:"https://youtube.com/shorts/9Wwvje-WELE"}
];
let videoIndex = 0;
const marked = new Set();
let historyItems = [];

function go(id) {
  document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});
}
function chooseCountry() {
  const s = document.getElementById("country");
  alert("ټاکل شوی هېواد: " + s.options[s.selectedIndex].text +
    "\nدا یوازې د پاڼې انتخاب دی؛ د حساب واقعي هېواد نه بدلوي.");
}
function renderTasks(filter="all") {
  const list = document.getElementById("taskList");
  const shown = tasks.filter(t => filter==="all" || t.cat===filter);
  list.innerHTML = shown.map(t => `
    <article class="task">
      <div class="tasklogo">${t.icon}</div>
      <div class="taskinfo">
        <strong>${t.name}</strong>
        <small>${t.cat.toUpperCase()} · جلا لینک</small>
        <span class="reward">${t.cat==="telegram" ? "ټول لازمي Telegram کارونه یوځای $0.002" : "اختیاري کار"}</span>
      </div>
      <div class="actions">
        <a class="btn light" href="${t.url}" target="_blank" rel="noopener">خلاص</a>
        <button class="btn" ${marked.has(t.id) ? "disabled" : ""} onclick="markDemo('${t.id}')">${marked.has(t.id) ? "نښه شوی" : "ډیمو نښه"}</button>
      </div>
    </article>`).join("");
}
function markDemo(id) {
  if (marked.has(id)) return;
  const t = tasks.find(x => x.id===id);
  if (!t) return;
  alert("یوازې ډیمو نښه کېږي؛ غړیتوب نه تاییدېږي او انعام نه ورکول کېږي.");
  marked.add(id);
  historyItems.unshift("د ډیمو نښه: " + t.name + " — حقیقي انعام نه دی ورکړل شوی");
  document.getElementById("taskCount").textContent = marked.size;
  renderTasks(document.querySelector(".tab.active").dataset.filter);
  renderHistory();
}
function renderHistory() {
  document.getElementById("history").innerHTML = historyItems.length
    ? historyItems.map(x => "<p>" + x.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c])) + "</p>").join("")
    : "<p>تر اوسه فعالیت نشته.</p>";
}
function updateVideo() {
  const v = videos[videoIndex];
  document.getElementById("videoFrame").src = "https://www.youtube-nocookie.com/embed/" + v.id;
  document.getElementById("videoCaption").textContent = v.title + " · " + (videoIndex+1) + " / " + videos.length;
  document.getElementById("dots").innerHTML = videos.map((x,i) =>
    `<button class="dot ${i===videoIndex ? "active" : ""}" aria-label="ویډیو ${i+1}" onclick="selectVideo(${i})"></button>`
  ).join("");
}
function changeVideo(d) {
  videoIndex = (videoIndex + d + videos.length) % videos.length;
  updateVideo();
}
function selectVideo(i) { videoIndex = i; updateVideo(); }
function openVideo() {
  window.open(videos[videoIndex].url, "_blank", "noopener,noreferrer");
}
async function copyRef() {
  const input = document.getElementById("refLink");
  input.value = location.href.split("?")[0] + "?ref=DEMO";
  input.select();
  try {
    await navigator.clipboard.writeText(input.value);
    document.getElementById("refMessage").textContent = "د ډیمو لینک کاپي شو؛ ریفرل لا سرور ته نه ثبتېږي.";
  } catch {
    document.getElementById("refMessage").textContent = "لینک انتخاب شو؛ کاپي یې کړه.";
  }
}
document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  renderTasks(b.dataset.filter);
}));
document.getElementById("withdrawForm").addEventListener("submit", e => {
  e.preventDefault();
  const a = Number(document.getElementById("amount").value);
  const w = document.getElementById("wallet").value.trim();
  const m = document.getElementById("withdrawMessage");
  if (a < 0.15) { m.textContent = "لږ تر لږه ایستل $0.15 دي."; return; }
  if (!/^0x[a-fA-F0-9]{40}$/.test(w)) {
    m.textContent = "د BEP20 عامه پته باید 0x او ورپسې 40 هیکس کرکټرونه ولري.";
    return;
  }
  m.textContent = "دا یوازې ډیمو فورم دی؛ غوښتنه سرور ته نه ده لېږل شوې او تادیه نه ده شوې.";
});
document.getElementById("refLink").value = location.href.split("?")[0] + "?ref=DEMO";
renderTasks();
updateVideo();
</script>
</body>
</html>
