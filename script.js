/* ===========================================
   假資料區 — 之後請直接替換成真實行程資料
   =========================================== */

const tripData = {
  title: "沖繩親子旅行",
  budgetJPY: 250000,
  days: [
    {
      id: "D1",
      date: "2026-07-08",
      theme: "旅行啟程日",
      departureTime: "13:10",
      route: "那霸機場 → AEON名護 用餐＋採買 → BANKSHI-SA",
      meals: { lunch: "—", dinner: "AEON名護" },
      hotel: "BANKSHI-SA",
      foodBudgetMin: 10000,
      foodBudgetMax: 17500,
      schedule: [
        { time: "15:45", place: "那霸機場", note: "抵達沖繩、入境" },
        { time: "17:00", place: "OTS RENT-A-CAR", note: "取車" },
        { time: "", place: "AEON名護", note: "用餐＋採買" },
        { time: "", place: "BANKSHI-SA", note: "入住" }
      ],
      mapPoints: [
        { name: "OTS 豐崎本店", type: "交通", link: "https://www.google.com/maps/search/?api=1&query=沖縄県豊見城市豊崎3-37" },
        { name: "AEON名護", type: "購物", link: "https://www.google.com/maps/search/?api=1&query=名護市字名護見取川原4472+Nago+Okinawa+905-0012+日本" }
      ]
    },
    {
      id: "D2",
      date: "2026-07-09",
      theme: "美麗海水族館日",
      departureTime: "08:30",
      route: "美麗海水族館 → 超市 → 飯店",
      meals: { lunch: "Ocean Blue Café", dinner: "民宿用餐" },
      hotel: "ONNA RESORT NAKADOMARI",
      foodBudgetMin: 22500,
      foodBudgetMax: 37500,
      schedule: [
        { time: "08:30", place: "出發", note: "" },
        { time: "09:00", place: "美麗海水族館", note: "參觀水族館" },
        { time: "11:45", place: "Ocean Blue Café", note: "午餐" },
        { time: "13:00", place: "海豚劇場", note: "海豚秀" },
        { time: "15:00", place: "海豚劇場", note: "海豚秀" },
        { time: "17:00", place: "San-A Apunie Shopping Town", note: "採購" },
        { time: "18:30", place: "ONNA RESORT NAKADOMARI", note: "回程、晚餐" }
      ],
      mapPoints: [
        { name: "美麗海水族館", type: "景點", link: "https://www.google.com/maps/search/?api=1&query=424+Ishikawa+Motobu+Kunigami+District+Okinawa+905-0206+日本" },
        { name: "San-A Apunie Shopping Town", type: "購物", link: "https://www.google.com/maps/search/?api=1&query=1+Chome-2-13+Agarie+Nago+Okinawa+905-0021+日本" },
        { name: "ONNA RESORT NAKADOMARI", type: "住宿", link: "https://www.google.com/maps/search/?api=1&query=沖縄県国頭郡恩納村仲泊1393-3" }
      ]
    },
    {
      id: "D3",
      date: "2026-07-10",
      theme: "中部慢遊日",
      departureTime: "09:00-09:30",
      route: "海灘玩水 → AEON Rycom → 飯店",
      meals: { lunch: "Shimabutaya Maeganeku", dinner: "民宿用餐" },
      hotel: "ONNA RESORT NAKADOMARI",
      foodBudgetMin: 25000,
      foodBudgetMax: 40000,
      schedule: [
        { time: "08:00", place: "早餐", note: "" },
        { time: "09:00", place: "出發", note: "" },
        { time: "09:30", place: "Tiger Beach", note: "玩水" },
        { time: "10:45", place: "民宿", note: "回民宿洗澡換衣服" },
        { time: "11:40", place: "Shimabutaya Maeganeku", note: "午餐" },
        { time: "13:30", place: "AEON Rycom", note: "逛街採購" },
        { time: "16:00", place: "AEON Rycom 周邊", note: "採購晚餐食材，回民宿用餐" }
      ],
      mapPoints: [
        { name: "Tiger Beach", type: "景點", link: "https://www.google.com/maps/search/?api=1&query=1550-1+Fuchaku+Onna+Kunigami+District+Okinawa+904-0413+日本" },
        { name: "Shimabutaya Maeganeku", type: "餐廳", link: "https://www.google.com/maps/search/?api=1&query=96-1+Maeganeku+Onna+Kunigami+District+Okinawa+904-0414+日本" },
        { name: "AEON Rycom", type: "購物", link: "https://www.google.com/maps/search/?api=1&query=1番地+Raikamu+Kitanakagusuku+Nakagami+District+Okinawa+901-2306+日本" },
        { name: "ONNA RESORT NAKADOMARI", type: "住宿", link: "https://www.google.com/maps/search/?api=1&query=沖縄県国頭郡恩納村仲泊1393-3" }
      ]
    },
    {
      id: "D4",
      date: "2026-07-11",
      theme: "沖繩兒童王國日",
      departureTime: "09:30",
      route: "沖繩兒童王國 → 民宿",
      meals: { lunch: "園區午餐", dinner: "彈性安排" },
      hotel: "D-and Stay 5 Resort Okinawa",
      foodBudgetMin: 25000,
      foodBudgetMax: 45000,
      schedule: [
        { time: "08:00", place: "早餐、整理行李", note: "" },
        { time: "09:30", place: "沖繩兒童王國", note: "前往" },
        { time: "11:40", place: "沖繩兒童王國", note: "園區午餐" },
        { time: "13:30", place: "Wonder Museum", note: "參觀" },
        { time: "15:30", place: "D-and Stay 5 Resort Okinawa", note: "前往飯店" }
      ],
      mapPoints: [
        { name: "沖繩兒童王國", type: "景點", link: "https://www.google.com/maps/search/?api=1&query=5+Chome-7-1+Goya+Okinawa+904-0021+日本" },
        { name: "D-and Stay 5 Resort Okinawa", type: "住宿", link: "https://www.google.com/maps/search/?api=1&query=沖縄県浦添市前田2-14-8" }
      ]
    },
    {
      id: "D5",
      date: "2026-07-12",
      theme: "回家日",
      departureTime: "10:00",
      route: "退房 → Parco City 購物 → OTS還車 → 那霸機場",
      meals: { lunch: "機場輕食", dinner: "—" },
      hotel: "—",
      foodBudgetMin: 15000,
      foodBudgetMax: 25000,
      schedule: [
        { time: "08:00", place: "早餐", note: "" },
        { time: "10:00", place: "退房", note: "" },
        { time: "10:15", place: "niko and...", note: "" },
        { time: "12:00", place: "OTS機場還車", note: "" }
      ],
      mapPoints: [
        { name: "niko and... Parco City店", type: "購物", link: "https://www.google.com/maps/search/?api=1&query=サンエー浦添西海岸パルコシティ" },
        { name: "OTS 豐崎本店", type: "交通", link: "https://www.google.com/maps/search/?api=1&query=沖縄県豊見城市豊崎3-37" },
        { name: "那霸機場", type: "交通", link: "#" }
      ]
    }
  ],
  transport: {
    outboundFlight: "JX302 臺中(RMQ) 13:10 → 沖繩(OKA) 15:45",
    returnFlight: "JX303 沖繩(OKA) 16:45 → 臺中(RMQ) 17:25",
    rentalCompany: "OTS Toyosaki Main Office（OTS 豐崎本店／臨空豐崎營業所）",
    rentalAddress: "沖繩縣豐見城市豐崎 3-37",
    rentalMapLink: "https://www.google.com/maps/search/?api=1&query=沖縄県豊見城市豊崎3-37",
    pickupLocation: "OTS 豐崎本店（7/8（三）17:00 取車）",
    returnLocation: "OTS 豐崎本店（7/12（日）13:00 還車）"
  },
  hotels: [
    { nights: "D1", name: "BANKSHI-SA", address: "沖縄県国頭郡本部町山川503番地3", mapLink: "https://www.google.com/maps/search/?api=1&query=沖縄県国頭郡本部町山川503番地3", checkIn: "15:00", checkOut: "10:00" },
    { nights: "D2-D3", name: "ONNA RESORT NAKADOMARI", address: "沖縄県国頭郡恩納村仲泊1393-3", mapLink: "https://www.google.com/maps/search/?api=1&query=沖縄県国頭郡恩納村仲泊1393-3", checkIn: "15:00", checkOut: "10:00" },
    { nights: "D4", name: "D-and Stay 5 Resort Okinawa", address: "沖縄県浦添市前田2-14-8", mapLink: "https://www.google.com/maps/search/?api=1&query=沖縄県浦添市前田2-14-8", checkIn: "15:00", checkOut: "11:00" }
  ],
};

/* ===========================================
   狀態
   =========================================== */

let currentDayIndex = getTodayIndex();
let expenses = loadExpenses();
let editingExpenseIndex = null;

function getTodayIndex() {
  const todayStr = new Date().toISOString().slice(0, 10);
  const idx = tripData.days.findIndex(d => d.date === todayStr);
  return idx >= 0 ? idx : 0;
}

function loadExpenses() {
  const raw = localStorage.getItem("okinawa-expenses");
  return raw ? JSON.parse(raw) : [];
}

function saveExpenses() {
  localStorage.setItem("okinawa-expenses", JSON.stringify(expenses));
}

/* ===========================================
   View 切換
   =========================================== */

function showView(viewName) {
  document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
  document.getElementById("view-" + viewName).classList.remove("hidden");

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });

  if (viewName === "home") renderHome();
  if (viewName === "itinerary") renderItinerary();
  if (viewName === "map") renderMap();
  if (viewName === "budget") renderBudget();
  if (viewName === "info") renderInfo();
}

/* ===========================================
   首頁
   =========================================== */

function renderDayTabs(containerId, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  tripData.days.forEach((day, idx) => {
    const tab = document.createElement("div");
    tab.className = "day-tab";
    if (idx === currentDayIndex) tab.classList.add("active");
    tab.textContent = day.id;
    tab.addEventListener("click", () => {
      currentDayIndex = idx;
      onSelect();
    });
    container.appendChild(tab);
  });
}

function renderHome() {
  renderDayTabs("home-day-tabs", renderHome);

  const day = tripData.days[currentDayIndex];
  document.getElementById("home-theme").textContent = day.theme;
  document.getElementById("home-departure").textContent = day.departureTime;
  document.getElementById("home-route").textContent = day.route;
  document.getElementById("home-lunch").innerHTML = `<span class="meal-label">午｜</span><span class="meal-content">${day.meals.lunch}</span>`;
  document.getElementById("home-dinner").innerHTML = `<span class="meal-label">晚｜</span><span class="meal-content">${day.meals.dinner}</span>`;
  document.getElementById("home-hotel").textContent = day.hotel;
}

document.querySelectorAll(".quick-btn").forEach(btn => {
  btn.addEventListener("click", () => showView(btn.dataset.goto));
});

/* ===========================================
   行程頁
   =========================================== */

function renderItinerary() {
  const list = document.getElementById("itinerary-list");
  list.innerHTML = "";

  tripData.days.forEach((day, idx) => {
    const details = document.createElement("details");
    details.className = "day-block";
    if (idx === currentDayIndex) details.open = true;

    const summary = document.createElement("summary");
    summary.textContent = `${day.id}　${day.theme}`;
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "day-block-body";

    day.schedule.forEach(item => {
      const row = document.createElement("div");
      row.className = "schedule-item";
      const noteHtml = item.note ? `<div class="note">${item.note}</div>` : "";
      row.innerHTML = `
        <div class="schedule-time">${item.time}</div>
        <div class="schedule-detail">
          <div class="place">${item.place}</div>
          ${noteHtml}
        </div>
      `;
      body.appendChild(row);
    });

    details.addEventListener("toggle", () => {
      if (!details.open) return;
      list.querySelectorAll(".day-block").forEach(other => {
        if (other !== details) other.open = false;
      });
    });

    details.appendChild(body);
    list.appendChild(details);
  });
}

/* ===========================================
   地圖頁
   =========================================== */

function renderMap() {
  renderDayTabs("map-day-tabs", renderMap);

  const day = tripData.days[currentDayIndex];
  const list = document.getElementById("map-list");
  list.innerHTML = "";

  day.mapPoints.forEach(point => {
    const row = document.createElement("div");
    row.className = "map-item";
    row.innerHTML = `
      <div class="map-item-left">
        <div class="map-type-dot map-type-${point.type}"></div>
        <div>
          <div class="map-name">${point.name}</div>
          <div class="map-type-label">${point.type}</div>
        </div>
      </div>
      <a class="map-link" href="${point.link}" target="_blank" rel="noopener">開啟地圖</a>
    `;
    list.appendChild(row);
  });
}

/* ===========================================
   記帳頁
   =========================================== */

function renderBudget() {
  renderDayTabs("budget-day-tabs", renderBudget);
  renderExpenseList();
  renderBudgetTotals();
}

function renderExpenseList() {
  const list = document.getElementById("expense-list");
  list.innerHTML = "";

  const selectedDayId = tripData.days[currentDayIndex].id;
  const categories = ["餐飲", "門票", "購物", "其他"];

  categories.forEach(cat => {
    const items = expenses
      .filter(exp => exp.day === selectedDayId && exp.category === cat)
      .slice()
      .reverse();

    if (items.length === 0) return;

    const group = document.createElement("div");
    group.className = "expense-group";
    group.innerHTML = `<div class="expense-group-title">${cat}</div>`;

    items.forEach(exp => {
      const realIndex = expenses.indexOf(exp);
      const row = document.createElement("div");
      row.className = "expense-row";
      if (realIndex === editingExpenseIndex) row.classList.add("editing");
      row.dataset.index = realIndex;
      row.innerHTML = `
        <div class="expense-info">
          <div class="item">${exp.item}　<span class="meta">${exp.payment || "未填寫"}</span></div>
        </div>
        <div style="display:flex; align-items:center;">
          <div class="expense-amount">${exp.amount.toLocaleString()}</div>
          <button class="delete-btn" data-index="${realIndex}"><i class="ti ti-trash"></i></button>
        </div>
      `;
      group.appendChild(row);
    });

    list.appendChild(group);
  });

  list.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const index = Number(btn.dataset.index);
      expenses.splice(index, 1);
      saveExpenses();
      if (editingExpenseIndex === index) cancelEditExpense();
      renderExpenseList();
      renderBudgetTotals();
    });
  });

  list.querySelectorAll(".expense-row").forEach(row => {
    row.addEventListener("click", () => startEditExpense(Number(row.dataset.index)));
  });
}

function startEditExpense(index) {
  const exp = expenses[index];
  if (!exp) return;

  editingExpenseIndex = index;
  document.getElementById("expense-item").value = exp.item;
  document.getElementById("expense-category").value = exp.category;
  document.getElementById("expense-amount").value = exp.amount;
  document.getElementById("expense-payment").value = exp.payment;

  document.getElementById("expense-submit-btn").textContent = "更新花費";
  document.getElementById("expense-cancel-btn").classList.remove("hidden");

  renderExpenseList();
  document.getElementById("expense-form").scrollIntoView({ behavior: "smooth" });
}

function cancelEditExpense() {
  editingExpenseIndex = null;
  document.getElementById("expense-form").reset();
  document.getElementById("expense-submit-btn").textContent = "新增花費";
  document.getElementById("expense-cancel-btn").classList.add("hidden");
  renderExpenseList();
}

function renderBudgetTotals() {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  document.getElementById("budget-total").textContent = "" + total.toLocaleString();

  const cashSpent = expenses
    .filter(e => e.payment === "現金")
    .reduce((sum, e) => sum + e.amount, 0);
  const remainingCash = Math.round(tripData.budgetJPY) - cashSpent;
  document.getElementById("budget-remaining").textContent = "" + remainingCash.toLocaleString();

  const daySubtotals = document.getElementById("budget-day-subtotals");
  daySubtotals.innerHTML = tripData.days
    .map(d => {
      const sum = expenses
        .filter(e => e.day === d.id && e.category === "餐飲")
        .reduce((s, e) => s + e.amount, 0);
      const overBudget = sum > d.foodBudgetMax;
      const statusColor = overBudget ? "#B3261E" : "var(--accent)";
      const statusText = overBudget
        ? `超支 ${(sum - d.foodBudgetMax).toLocaleString()}`
        : `${(d.foodBudgetMax - sum).toLocaleString()}`;
      return `
        <div class="food-budget-block">
          <div class="subtotal-row">
            <span>${d.id} | ${d.foodBudgetMin.toLocaleString()}～${d.foodBudgetMax.toLocaleString()}</span>
            <span style="color:var(--text-main); font-weight:700;">${sum.toLocaleString()}　<span style="color:${statusColor}; font-weight:700;">${statusText}</span></span>
          </div>
        </div>
      `;
    })
    .join("");

  const paymentMethods = ["信用卡", "現金"];
  const paymentSubtotals = document.getElementById("budget-payment-subtotals");
  paymentSubtotals.innerHTML = paymentMethods
    .map(method => {
      const sum = expenses
        .filter(e => e.payment === method)
        .reduce((s, e) => s + e.amount, 0);
      return `<div class="subtotal-row"><span>${method}</span><span>${sum.toLocaleString()}</span></div>`;
    })
    .join("");
}

document.getElementById("expense-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const day = tripData.days[currentDayIndex].id;
  const item = document.getElementById("expense-item").value.trim();
  const category = document.getElementById("expense-category").value;
  const amount = Number(document.getElementById("expense-amount").value);
  const payment = document.getElementById("expense-payment").value;

  if (!item || !amount) return;

  if (editingExpenseIndex !== null) {
    expenses[editingExpenseIndex] = { day, item, category, amount, payment };
  } else {
    expenses.push({ day, item, category, amount, payment });
  }
  saveExpenses();

  cancelEditExpense();
  renderBudgetTotals();
});

document.getElementById("expense-cancel-btn").addEventListener("click", cancelEditExpense);

/* ===========================================
   重要資訊頁
   =========================================== */

function renderInfo() {
  const t = tripData.transport;
  document.getElementById("info-transport").innerHTML = `
    <div class="info-row"><span class="label">去程航班</span><span class="value">${t.outboundFlight}</span></div>
    <div class="info-row"><span class="label">回程航班</span><span class="value">${t.returnFlight}</span></div>
    <div class="info-row"><span class="label">租車公司</span><span class="value">${t.rentalCompany}</span></div>
    <div class="info-row">
      <span class="label">租車地址</span>
      <span class="value">${t.rentalAddress}</span>
      <a href="${t.rentalMapLink}" target="_blank" rel="noopener">開啟地圖</a>
    </div>
    <div class="info-row"><span class="label">取車地點</span><span class="value">${t.pickupLocation}</span></div>
    <div class="info-row"><span class="label">還車地點</span><span class="value">${t.returnLocation}</span></div>
  `;

  document.getElementById("info-hotels").innerHTML = tripData.hotels
    .map(h => `
      <div class="hotel-block">
        <div class="name">${h.nights}　${h.name}</div>
        <div class="addr">${h.address}</div>
        <div class="addr">入住 ${h.checkIn} ／ 退房 ${h.checkOut}</div>
        <a href="${h.mapLink}" target="_blank" rel="noopener">開啟地圖</a>
      </div>
    `)
    .join("");
}

/* ===========================================
   底部導覽
   =========================================== */

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});

/* ===========================================
   初始化
   =========================================== */

showView("home");
