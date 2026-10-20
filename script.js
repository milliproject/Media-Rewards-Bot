const REWARD = 0.002;

const tasks = [
  {platform:"Telegram",name:"چینل ۱ — Sharitullah",url:"https://t.me/Sharitullah",action:"Join"},
  {platform:"Telegram",name:"چینل ۲ — Sharifullah2",url:"https://t.me/Sharifullah2",action:"Join"},
  {platform:"Telegram",name:"چینل ۳ — Afghanistan20000",url:"https://t.me/Afghanistan20000",action:"Join"},
  {platform:"Telegram",name:"چینل ۴ — MusicPashto",url:"https://t.me/MusicPashto",action:"Join"},
  {platform:"Telegram",name:"چینل ۵ — WStaskbot0",url:"https://t.me/WStaskbot0",action:"Join"},
  {platform:"Telegram",name:"چینل ۶ — eclqz",url:"https://t.me/eclqz",action:"Join"},
  {platform:"Telegram",name:"چینل ۷ — Afghanistan Telegram Group",url:"https://t.me/AfghanistanTelegramGroup",action:"Join"},
  {platform:"YouTube",name:"زموږ یوټیوب چینل",url:"https://www.youtube.com/@Sharitullah1",action:"Subscribe"},
  {platform:"WhatsApp",name:"زموږ واټساپ چینل",url:"https://whatsapp.com/channel/0029VbAjTTJLNSZxsJvaOK3k",action:"Follow"}
];

const list = document.getElementById("taskList");

if (list) {
  list.replaceChildren();

  tasks.forEach(task => {
    const row = document.createElement("div");
    row.className = "task";

    const info = document.createElement("div");
    const name = document.createElement("b");
    name.textContent = task.name;

    const detail = document.createElement("small");
    detail.textContent = task.platform + " • Reward: $" + REWARD.toFixed(3);

    info.append(name, detail);

    const link = document.createElement("a");
    link.className = "btn";
    link.textContent = task.action;
    link.href = task.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    row.append(info, link);
    list.append(row);
  });
}

const copyButton = document.getElementById("copyLink");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const field = document.getElementById("refLink");

    if (!field || !field.value.trim()) {
      alert("د دعوت لینک لپاره د Telegram Bot او سرور اتصال اړین دی.");
      return;
    }

    try {
      await navigator.clipboard.writeText(field.value);
      alert("د دعوت لینک کاپي شو.");
    } catch {
      alert("لینک کاپي نه شو. لینک په لاس کاپي کړه.");
    }
  });
}

const withdrawButton = document.getElementById("withdrawBtn");

if (withdrawButton) {
  withdrawButton.addEventListener("click", () => {
    const amount = Number(document.getElementById("amount")?.value);
    const wallet = document.getElementById("wallet")?.value.trim();
    const message = document.getElementById("message");

    if (!Number.isFinite(amount) || amount < 0.15 || !wallet) {
      message.textContent = "لږ تر لږه $0.15 او د والټ عامه پته ولیکئ.";
      return;
    }

    message.textContent =
      "غوښتنه نه ده لېږل شوې؛ د خوندي سرور او حقیقي بیلانس اتصال لا نشته.";
  });
}
