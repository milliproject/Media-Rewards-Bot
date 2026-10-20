# Media Rewards Bot

Telegram Mini App for media tasks and referrals.

- Telegram channel tasks
- YouTube task
- Referral links
- Earnings dashboard
- USDT BEP20 withdrawals
- Minimum withdrawal: $0.15
- Reward per task: $0.002

<!DOCTYPE html>
<html lang="ps">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Media Rewards Bot</title>
<style>
:root {
  --bg: #0b1220;
  --panel: #141f31;
  --panel2: #1b2a40;
  --green: #25d695;
  --text: #f3f7ff;
  --muted: #9aabc1;
  --line: #293950;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: Arial, sans-serif;
}
header {
  padding: 22px 16px;
  background: linear-gradient(135deg,#103b38,#12263b);
  border-bottom: 1px solid var(--line);
}
.wrap { max-width: 760px; margin: auto; }
.brand { font-size: 23px; font-weight: bold; }
.brand span { color: var(--green); }
header p { color: var(--muted); margin-bottom: 0; }
main { padding: 18px 14px 40px; }
.balance {
  background: linear-gradient(135deg,#126b50,#174c5c);
  border-radius: 18px;
  padding: 22px;
  margin-bottom: 18px;
}
.small { color: #c6eadd; font-size: 14px; }
.amount { font-size: 36px; font-weight: bold; margin: 8px 0; }
.stats { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.stat, .card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 15px;
  padding: 16px;
}
.stat strong { display: block; font-size: 21px; margin-top: 8px; }
section { margin-top: 24px; }
h2 { font-size: 19px; margin-bottom: 12px; }
.task {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}
.task-icon { font-size: 25px; }
.task-info { flex: 1; min-width: 0; }
.task-info strong { display: block; }
.muted { color: var(--muted); font-size: 13px; margin-top: 5px; }
button, .link-button {
  border: 0;
  border-radius: 10px;
  padding: 11px 14px;
  font-size: 14px;
  font-weight: bold;
  background: var(--green);
  color: #06251b;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}
button:disabled { opacity: .55; cursor: not-allowed; }
.secondary { background: var(--panel2); color: var(--text); }
input, select {
  display: block;
  width: 100%;
  background: #0c1727;
  color: var(--text);
  border: 1px solid var(--line);
  padding: 13px;
  margin: 9px 0 14px;
  border-radius: 10px;
  font-size: 15px;
}
label { color: var(--muted); font-size: 14px; }
.full { width: 100%; }
.notice {
  padding: 12px;
  border-radius: 10px;
  background: #302b1c;
  color: #f6d78b;
  font-size: 13px;
  line-height: 1.7;
}
#message { margin-top: 12px; color: var(--green); }
.history-item {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
footer {
  text-align: center;
  color: var(--muted);
  padding: 22px 10px;
  font-size: 12px;
}
[dir="rtl"] .task { text-align: right; }
</style>
</head>
<body>
<header>
  <div class="wrap">
    <div class="brand">🎁 Media <span>Rewards</span></div>
    <p>د ټاسکونو له لارې انعامونه ترلاسه کړه</p>
  </div>
</header>

<main class="wrap">
  <div class="balance">
    <div class="small">ستاسې د ډیمو بیلانس</div>
    <div class="amount" id="balance">$0.000</div>
    <div class="small">د هر ټاسک انعام: $0.002</div>
  </div>

  <div class="stats">
    <div class="stat">
      <span class="muted">بشپړ شوي ټاسکونه</span>
      <strong id="taskCount">0</strong>
    </div>
    <div class="stat">
      <span class="muted">دعوتونه</span>
      <strong id="refCount">0</strong>
    </div>
  </div>

  <section>
    <h2>📢 Telegram Tasks — د ټیلیګرام دندې</h2>
    <div class="card task">
      <div class="task-icon">📣</div>
      <div class="task-info">
        <strong>زموږ ټیلیګرام چینل</strong>
        <div class="muted">چینل وګوره او ګډون پکې وکړه</div>
        <div class="muted">انعام: $0.002</div>
      </div>
      <a class="link-button" href="https://t.me/" target="_blank" rel="noopener">خلاص کړه</a>
    </div>
    <button class="full" onclick="completeTask('telegram')">د ټاسک بشپړول</button>
  </section>

  <section>
    <h2>▶️ YouTube Task — د یوټیوب دنده</h2>
    <div class="card task">
      <div class="task-icon">▶️</div>
      <div class="task-info">
        <strong>د یوټیوب ویډیو وګوره</strong>
        <div class="muted">د ویډیو لینک باید وروسته تنظیم شي</div>
        <div class="muted">انعام: $0.002</div>
      </div>
      <a class="link-button" href="https://youtube.com/" target="_blank" rel="noopener">خلاص کړه</a>
    </div>
    <button class="full" onclick="completeTask('youtube')">د ټاسک بشپړول</button>
  </section>

  <section>
    <h2>🔗 Referral System — د بلنې سیستم</h2>
    <div class="card">
      <p>خپل د بلنې لینک کاپي او له ملګرو سره یې شریک کړه.</p>
      <input id="refLink" readonly value="د ډیمو بلنې لینک">
      <button class="full" onclick="copyReferral()">📋 د لینک کاپي کول</button>
      <p class="muted">د بلنې حقیقي شمېر د سرور له نښلولو وروسته محاسبه کېږي.</p>
    </div>
  </section>

  <section>
    <h2>💰 Earnings Dashboard — د عایداتو تاریخچه</h2>
    <div class="card" id="history">
      <p class="muted">تر اوسه د انعام تاریخچه نشته.</p>
    </div>
  </section>

  <section>
    <h2>💵 USDT BEP20 — د پیسو ایستل</h2>
    <div class="card">
      <div class="notice">
        لږ تر لږه ایستل: $0.15<br>
        دا یوازې د ډیمو فورم دی؛ پیسې نه لېږي.
      </div>
      <form id="withdrawForm">
        <label for="wallet">ستاسې د USDT BEP20 والټ عام ادرس</label>
        <input id="wallet" type="text" placeholder="د والټ عام ادرس ولیکه" required>
        <label for="withdrawAmount">د ایستلو اندازه (USDT)</label>
        <input id="withdrawAmount" type="number" min="0.15" step="0.01" placeholder="0.15" required>
        <button class="full" type="submit">د ایستلو غوښتنه ثبت کړه</button>
      </form>
      <div id="message" role="status"></div>
    </div>
  </section>

  <section>
    <h2>⚙️ د ډیمو معلومات</h2>
    <div class="card">
      <p class="muted">دا نسخه معلومات یوازې په همدې براوزر کې ساتي. دا حقیقي حساب، حقیقي انعام یا تادیه نه ده.</p>
      <button class="secondary full" onclick="resetDemo()">د ډیمو معلومات صفر کول</button>
    </div>
  </section>
</main>

<footer>Media Rewards Bot · Demo Version</footer>

<script>
const REWARD = 0.002;
const MIN_WITHDRAW = 0.15;
const STORAGE_KEY = "mediaRewardsDemoV1";

let data = { balance: 0, completed: [], history: [], requests: [] };

try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) data = { ...data, ...JSON.parse(saved) };
} catch (e) {}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
  render();
}

function money(value) {
  return "$" + Number(value || 0).toFixed(3);
}

function render() {
  document.getElementById("balance").textContent = money(data.balance);
  document.getElementById("taskCount").textContent = data.completed.length;
  document.getElementById("refCount").textContent = "0";

  const history = document.getElementById("history");
  if (!data.history.length) {
    history.innerHTML = '<p class="muted">تر اوسه د انعام تاریخچه نشته.</p>';
  } else {
    history.innerHTML = data.history.slice().reverse().map(item =>
      '<div class="history-item"><span>' +
      escapeHtml(item.label) +
      '</span><strong>+' + money(item.amount) +
      '</strong></div>'
    ).join("");
  }

  document.querySelectorAll("[data-task]").forEach(button => {
    const done = data.completed.includes(button.dataset.task);
    button.disabled = done;
    button.textContent = done ? "بشپړ شوی" : "د ټاسک بشپړول";
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  }[char]));
}

function completeTask(task) {
  if (data.completed.includes(task)) {
    alert("دا ډیمو ټاسک مخکې بشپړ شوی دی.");
    return;
  }
  data.completed.push(task);
  data.balance = Math.round((data.balance + REWARD) * 1000) / 1000;
  data.history.push({
    label: task === "telegram" ? "Telegram task (demo)" : "YouTube task (demo)",
    amount: REWARD
  });
  save();
  alert("ډیمو انعام اضافه شو. دا حقیقي تادیه نه ده.");
}

document.querySelectorAll("button[onclick^='completeTask']").forEach(button => {
  const match = button.getAttribute("onclick").match(/completeTask\('([^']+)'\)/);
  if (match) {
    button.removeAttribute("onclick");
    button.dataset.task = match[1];
    button.addEventListener("click", () => completeTask(match[1]));
  }
});

async function copyReferral() {
  const field = document.getElementById("refLink");
  field.value = "دا د ډیمو لینک دی؛ حقیقي شخصي لینک نه دی.";
  try {
    await navigator.clipboard.writeText(field.value);
    alert("د ډیمو متن کاپي شو.");
  } catch (e) {
    field.select();
    alert("متن انتخاب شو؛ د کاپي کولو اختیار وکاروه.");
  }
}

document.getElementById("withdrawForm").addEventListener("submit", event => {
  event.preventDefault();
  const amount = Number(document.getElementById("withdrawAmount").value);
  const wallet = document.getElementById("wallet").value.trim();
  const message = document.getElementById("message");

  if (!Number.isFinite(amount) || amount < MIN_WITHDRAW) {
    message.textContent = "لږ تر لږه د ایستلو اندازه $0.15 ده.";
    return;
  }
  if (amount > data.balance) {
    message.textContent = "ستا د ډیمو بیلانس د دې اندازې لپاره کافي نه دی.";
    return;
  }
  if (wallet.length < 20) {
    message.textContent = "مهرباني وکړه د والټ ادرس وګوره.";
    return;
  }

  data.requests.push({ amount, wallet, status: "demo" });
  data.balance = Math.round((data.balance - amount) * 1000) / 1000;
  save();
  message.textContent = "د ډیمو غوښتنه ثبت شوه؛ هېڅ پیسې نه دي لېږل شوي.";
  event.target.reset();
});

function resetDemo() {
  if (!confirm("د ډیمو ټول معلومات صفر شي؟")) return;
  data = { balance: 0, completed: [], history: [], requests: [] };
  save();
  document.getElementById("message").textContent = "";
}

render();
</script>
</body>
</html>

