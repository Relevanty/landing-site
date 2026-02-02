// Static site interactions
const CLUB_LINKS = ["https://t.me/leramire", "https://t.me/koooriks"];

function pickRandomLink() {
  const i = Math.floor(Math.random() * CLUB_LINKS.length);
  return CLUB_LINKS[i];
}

function buildRandomTarget() {
  const base = pickRandomLink();
  const url = new URL(base);
  const search = window.location.search;
  const hash = window.location.hash;
  if (search) url.search = search;
  if (hash) url.hash = hash;
  return url.toString();
}

function metrikaHit(path) {
  const ymFn = window.ym;
  if (typeof ymFn !== "function") return;
  const url = path || window.location.pathname + window.location.search;
  try {
    ymFn(105202450, "hit", url);
  } catch (e) {
    // ignore
  }
}

function setupRedirectPages() {
  const page = document.body.dataset.page;
  if (page === "apply" || page === "contact") {
    metrikaHit();
    const target = buildRandomTarget();
    setTimeout(() => {
      window.location.replace(target);
    }, 150);
  }
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle-button");
  const fullMenu = document.querySelector(".full-screen-menu");
  const lines = toggle ? Array.from(toggle.querySelectorAll(".line")) : [];
  let open = false;
  if (!toggle || !fullMenu) return;

  const setState = (next) => {
    open = next;
    fullMenu.classList.toggle("open", open);
    lines.forEach((l) => l.classList.toggle("open", open));
    document.body.classList.toggle("menu-open", open);
    updateScrollState();
  };

  toggle.addEventListener("click", () => setState(!open));
  fullMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => setState(false))
  );

  return () => setState(false);
}

function updateScrollState() {
  const wide = document.querySelector(".wide-menu-header");
  const thin = document.querySelector(".thin-menu-header");
  const firstHeight = window.innerHeight || 600;
  const scrolled = window.scrollY > firstHeight * 0.3;
  if (wide) wide.classList.toggle("scrolled", scrolled);
  if (thin) thin.classList.toggle("scrolled", scrolled || document.body.classList.contains("menu-open"));
}

function setupScrollWatcher() {
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });
}

function markActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("a[data-nav]").forEach((a) => {
    const href = a.getAttribute("href") || "";
    const normalized = href.replace(/^\.\//, "");
    const isActive = (path === "" && normalized === "index.html") || normalized === path || (path === "" && normalized === "");
    if (isActive) a.classList.add("active");
  });
}

function renderEvents() {
  const box = document.querySelector(".events .box");
  if (!box || box.children.length > 0) return; // already static markup present
  const statusClassMap = {
    "Этой зимой": "planned",
    "Действует": "active",
    "Идет набор": "recruiting",
  };
  const events = [
    { status: "Действует", title: "Мастермайнд-группа", description: "Строго модерируемые встречи, направленные на преодоление текущих затруднений.", regularity: "Ежедневные короткие звонки \n(до 15 мин)" },
    { status: "Идет набор", title: "Книжный клуб", description: "Вспоминаем мудрость детских книг, находим мечту в научной фантастике. \nСинхронизируем моральные ценности.", regularity: "Беседы 1 раз в неделю" },
    { status: "Действует", title: "Клуб английского языка", description: "Акцент на разговорную и письменную практику. Уровень от B1 до C2. Поддержание и развитие уровня.", regularity: "Беседы 1 раз в неделю" },
    { status: "Идет набор", title: "Прикладное программирование", description: "Основы fullstack разработки. Начало с теории и frontend. JavaScript, React, NodeJS. \nОриентир на трудоустройство.", regularity: "Ежедневное взаимообучение" },
    { status: "Действует", title: "Развитие речи ", description: "Самопрезентация, навыки продаж, публичные выступления, сторителлинг, письменная речь. Практические занятия, сессии.", regularity: "1 раз в неделю" },
    { status: "Действует", title: "Формирование сообщества", description: "Поиск и рекомендация кандидатов. Продвижение сообщества. Подготовка материалов. \nЭто наша основная задача на данный момент. ", regularity: "Ежедневная работа" },
    { status: "Идет набор", title: "Тренировки прохождения собеседований", description: "Алгоритмы и структуры данных, архитектурные и поведенческие секции. Уровень от Intern до Staff. Взаимные тестовые собеседования.", regularity: "Онлайн встречи 1 раз в неделю" },
    { status: "Этой зимой", title: "Сборы", description: "Собираемся вместе для реализации краткосрочного проекта. Например, поучаствовать в хакатоне или сходить в поход. ", regularity: "2-4 дня без работы, или до 2 недель, совмещая с работой. \nОколо 2 раз в год" },
  ];

  box.innerHTML = "";
  events.forEach((event) => {
    const div = document.createElement("div");
    div.className = "event-item";
    const statusClass = statusClassMap[event.status] || "";
    const descHtml = event.description.split("\n").map((line) => `${line}<br>`).join("");
    div.innerHTML = `
      <div class="status-${statusClass}">${event.status}</div>
      <div class="title">${event.title}</div>
      <br />
      <div class="description">${descHtml}</div>
      <br />
      <div class="regularity">${event.regularity}</div>
    `;
    box.appendChild(div);
  });
}

function renderFaq() {
  const container = document.querySelector(".question-list");
  if (!container || container.children.length > 0) return; // уже отрисовано статикой
  const data = [
    { title: "Это бизнес сообщество?", body: "Нет, это не бизнес сообщество, это сообщество по созданию капитала. Бизнес недостаточно надежен для заработка начального капитала, но может быть применен для его увеличения в будущем." },
    { title: "Это сообщество программистов?", body: "Нет, это не сообщество программистов. Мы используем карьеру в программировании, как инструмент создания начального капитала, потому что он хорошо работает. При появлении лучших условий мы сменим инструмент." },
    { title: "Это сообщество ЗОЖников?", body: "Мы ценим здоровый образ жизни и разумный подход к долголетию." },
    { title: "Какой возраст участников?", body: "Ценза нет, на данный момент участникам от 18 до 27 лет." },
    { title: "Можно ли к вам присоединиться с плохим знанием английского?", body: "Можно попробовать. Но надо будет посещать дополнительные занятия английского (проводятся в сообществе), и учиться самостоятельно, чтобы подтянуть его до C1 за полгода-год." },
    { title: "Как вы из студентов сделаете миллионеров?", body: "Старательное развитие → стабильный заработок → сложный процент + время" },
    { title: "Как вступить?", body: "Кнопку 'Познакомиться' нажми." },
    { title: "Почему это бесплатно?", body: "Потому что главное для нас — собрать сильное сообщество единомышленников. Деньги мы зарабатываем более эффективными способами." },
    { title: "Что, если я никак не могу посещать какие-то мероприятия?", body: "Обо всем можно договориться." },
    { title: "Сколько людей в сообществе?", body: "До 15 человек. При превышении мы увеличиваем темп развития, чтобы остались те, кому это действительно важно. В случае ажиотажа — запустим параллельные группы." },
    { title: "Как и за что исключают?", body: "Исключают (a.k.a кикают из чата) только за регулярные или грубые нарушения дисциплины. Но слабая заинтересованность в сообществе и безучастность к общим проектам приводит к постепенной изоляции." },
    { title: "Как отбираете надежных людей?", body: "Испытательный срок 2 года с постепенным ростом влияния и доверия." },
    { title: "Почему такой долгий испытательный срок?", body: "Это просто название, по-факту участие в сообществе начинается с первого дня." },
    { title: "А что после достижения результата?", body: "Финансовая свобода → свободная жизнь → новый трек. Можно остаться, запустить новые проекты, или уйти в одиночное плавание. Главное — дойти до финиша вместе." },
  ];
  container.innerHTML = "";
  data.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question-item";
    wrapper.innerHTML = `
      <button class="question-button" data-index="${index}">
        <span class="question-text">${item.title}</span>
        <span class="toggle-icon">+</span>
      </button>
      <div class="answer-container">
        <div class="answer-content">
          <div class="answer-divider">
            <p class="answer-text">${item.body}</p>
          </div>
        </div>
      </div>`;
    container.appendChild(wrapper);
  });

  container.querySelectorAll(".question-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".question-item");
      const open = item.classList.contains("open");
      container.querySelectorAll(".question-item").forEach((el) => el.classList.remove("open"));
      container.querySelectorAll(".answer-container").forEach((el) => el.classList.remove("answer-container-active"));
      container.querySelectorAll(".toggle-icon").forEach((el) => el.classList.remove("toggle-icon-active"));
      if (!open) {
        item.classList.add("open");
        item.querySelector(".answer-container")?.classList.add("answer-container-active");
        item.querySelector(".toggle-icon")?.classList.add("toggle-icon-active");
      }
    });
  });
}

function attachFaqAccordion() {
  const items = document.querySelectorAll(".question-item");
  if (!items.length) return;

  const closeAll = () => {
    document
      .querySelectorAll(".answer-container")
      .forEach((el) => {
        el.classList.remove("answer-container-active");
        el.style.maxHeight = "0px";
      });
    document.querySelectorAll(".toggle-icon").forEach((el) => el.classList.remove("toggle-icon-active"));
    document.querySelectorAll(".question-item").forEach((el) => el.classList.remove("open"));
  };

  items.forEach((item) => {
    const btn = item.querySelector(".question-button");
    const answer = item.querySelector(".answer-container");
    const icon = item.querySelector(".toggle-icon");
    if (!btn || !answer) return;

    btn.addEventListener("click", () => {
      const isOpen = answer.classList.contains("answer-container-active");
      closeAll();
      if (!isOpen) {
        answer.classList.add("answer-container-active");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        icon?.classList.add("toggle-icon-active");
        item.classList.add("open");
      }
    });
  });

  // стартовое состояние — всё закрыто
  closeAll();
}

function setupRandomJoins() {
  const links = document.querySelectorAll(".join-random");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = buildRandomTarget();
      window.location.replace(target);
    });
  });
}

function init() {
  setupMenu();
  setupScrollWatcher();
  markActiveNav();
  renderEvents();
  renderFaq();
  attachFaqAccordion();
  setupRandomJoins();
  setupRedirectPages();
}

document.addEventListener("DOMContentLoaded", init);
