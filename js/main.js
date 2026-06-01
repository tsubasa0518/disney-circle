// Disney Event Site - Main JS

// ===== ACTIVITY ITEMS =====
// 活動写真を追加する場合は activityItems 配列にオブジェクトを追加してください
const activityItems = [
  { image: 'images/Activity_pic1.png', title: '新歓インパ',           english: 'Welcome Disney Trip', desc: '新入生を迎えてのディズニーへのインパ企画です。' },
  { image: 'images/Activity_pic2.png', title: 'ディズニー映画鑑賞会', english: 'watching movies',     desc: 'ディズニー・ピクサー名作映画を一緒に鑑賞する企画です。' },
  { image: 'images/Activity_pic3.png', title: '一橋祭出店',           english: 'Festival',            desc: '一橋大学の学園祭に出店します。' },
  { image: 'images/Activity_pic4.png', title: '食事会',               english: 'Lunch / Dinner',      desc: '' },
  { image: 'images/Activity_pic6.png', title: '浴衣インパ',           english: 'Yukata Disney',       desc: '' },
  { image: 'images/Activity_pic5.png', title: 'Dハロ',                english: 'Disney Halloween',    desc: '' },
  { image: 'images/Activity_pic7.png', title: 'クリスマス',           english: 'Christmas Party',     desc: 'クリスマスシーズンのディズニーをみんなで楽しむ企画です。' },
];

const EVENTS = [
  {
    id: 'spring-carnival',
    season: 'スプリング',
    title: 'ディズニー・スプリング・カーニバル',
    shortDesc: '春の訪れを祝う、花と魔法のカーニバル。パレードや特別グリーティングが満載！',
    fullDesc: '春の暖かな陽光の中、東京ディズニーリゾートが花と魔法のカーニバルに変身します。ミッキーとミニーが春の衣装をまとい、華やかなパレードでゲストをお出迎え。園内各所に咲き誇る季節の花々とともに、忘れられない春の思い出をつくりましょう。',
    emoji: '🌸',
    gradient: 'linear-gradient(135deg, #2d0a3d, #8b1a6b)',
    startDate: new Date('2026-04-01'),
    endDate: new Date('2026-06-10'),
    location: '東京ディズニーランド',
    status: 'upcoming',
    highlights: [
      'ミッキー＆フレンズ スプリングパレード（1日2回）',
      '限定グリーティング「春のガーデンパーティー」',
      'スプリング限定スイーツ＆グルメ20種以上',
      'ナイトタイムスペクタキュラー「StarBlossom」',
    ],
  },
  {
    id: 'summer-splash',
    season: 'サマー',
    title: 'ディズニー・サマー・スプラッシュ',
    shortDesc: '夏の熱気と水しぶきが弾ける、爽快感いっぱいのサマーフェスティバル！',
    fullDesc: '真夏のディズニーリゾートが水と音楽のフェスタに！涼しげなウォーターショーや浴衣でのグリーティング、夏限定の花火ショーなど、熱い夏をさらに輝かせるコンテンツが盛りだくさん。夕暮れ時のスペシャルショーは必見です。',
    emoji: '🎆',
    gradient: 'linear-gradient(135deg, #001a4d, #0057b8)',
    startDate: new Date('2026-07-01'),
    endDate: new Date('2026-08-31'),
    location: '東京ディズニーシー',
    status: 'upcoming',
    highlights: [
      '毎夜開催「サマーナイトファンタジア」花火ショー',
      '夏限定ウォータースペクタキュラー',
      '浴衣グリーティング（週末限定）',
      'オリジナル夏グルメ＆スイーツ特集',
    ],
  },
  {
    id: 'halloween',
    season: 'ハロウィーン',
    title: 'ディズニー・ハロウィーン 2026',
    shortDesc: 'ヴィランズが夜のパークを支配する、スリリングで魔法的なハロウィーン！',
    fullDesc: '秋の到来とともに、ディズニーパークはヴィランズに占領されます。仮装したゲストが主役となるパレードや、薄暗い照明に彩られたナイトタイムショー。ジャック・オ・ランタンが灯るパーク内を探検しながら、特別なハロウィーン体験をお楽しみください。',
    emoji: '🎃',
    gradient: 'linear-gradient(135deg, #1a0d00, #6b2d00)',
    startDate: new Date('2026-09-08'),
    endDate: new Date('2026-11-01'),
    location: '東京ディズニーランド',
    status: 'upcoming',
    highlights: [
      'ヴィランズ・グリーティング（夜限定）',
      'コスチュームでの入園OK（対象日あり）',
      'ハロウィーンナイトパレード',
      'お菓子のトリック・オア・トリート体験',
    ],
  },
  {
    id: 'christmas',
    season: 'クリスマス',
    title: 'ディズニー・クリスマス 2026',
    shortDesc: '雪と光輝く冬のワンダーランド。感動のクリスマスファンタジーが始まる。',
    fullDesc: '年間で最も美しいシーズン、クリスマス。シンデレラ城やアメリカンウォーターフロントが無数のイルミネーションで彩られ、雪のような演出が幻想的な世界へと誘います。サンタクロースに扮したミッキーと過ごす特別なクリスマスを体験してください。',
    emoji: '🎄',
    gradient: 'linear-gradient(135deg, #001a0d, #0d4d1a)',
    startDate: new Date('2026-11-10'),
    endDate: new Date('2026-12-25'),
    location: '東京ディズニーリゾート',
    status: 'upcoming',
    highlights: [
      'クリスマスファンタジーパレード（毎日開催）',
      'サンタミッキー＆ミニーグリーティング',
      '城＆海エリア全体イルミネーション',
      'クリスマス限定スペシャルディナーショー',
    ],
  },
  {
    id: 'easter-2026',
    season: 'イースター',
    title: 'ディズニー・イースター 2026',
    shortDesc: 'カラフルな卵と可愛いうさぎが溢れる、春の喜びを祝うイースター！',
    fullDesc: '春の訪れを告げるイースターがディズニーパークに！カラフルなイースターエッグのデコレーションとともに、うさぎ衣装のキャラクターたちが大集合。パステルカラーに彩られたパーク内で、特別なイースターの思い出を作りましょう。',
    emoji: '🐣',
    gradient: 'linear-gradient(135deg, #1a1a00, #4d4d00)',
    startDate: new Date('2026-03-20'),
    endDate: new Date('2026-05-20'),
    location: '東京ディズニーシー',
    status: 'ongoing',
    highlights: [
      'イースターエッグハント（パーク内各所）',
      'うさぎ衣装グリーティング',
      'イースター限定パステルスイーツ',
      'スプリングボイジャーパレード',
    ],
  },
];

const SWEETS = [
  { emoji: '🧇', name: 'ミッキーワッフル', price: '¥550', event: 'スプリングイベント限定', color: '#c8a951' },
  { emoji: '🎃', name: 'ヴィランズパンプキンタルト', price: '¥680', event: 'ハロウィーン限定', color: '#d4500a' },
  { emoji: '🍮', name: 'クリスマスプリン', price: '¥620', event: 'クリスマス限定', color: '#2e8b22' },
  { emoji: '🐣', name: 'イースターエッグチョコ', price: '¥750', event: 'イースター限定', color: '#e9c4a0' },
  { emoji: '🍦', name: 'サマーラムネソフト', price: '¥480', event: 'サマー限定', color: '#0057b8' },
  { emoji: '🥟', name: 'ミッキーまん', price: '¥500', event: '秋冬シーズン', color: '#8b1a6b' },
  { emoji: '🍰', name: 'お城のモンブラン', price: '¥820', event: '通年販売', color: '#c8a951' },
  { emoji: '🍭', name: 'マジックキャンディ', price: '¥350', event: '通年販売', color: '#e91e8c' },
];

// ===== STARS =====
function createStars() {
  const bg = document.querySelector('.stars-bg');
  if (!bg) return;
  const count = 120;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --duration: ${Math.random() * 4 + 2}s;
      --delay: ${Math.random() * 6}s;
    `;
    bg.appendChild(star);
  }
}


// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// ===== SCROLL TO TOP =====
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== JOIN CTA: scroll to SNS + highlight =====
function initJoinCta() {
  const joinCtaButton = document.querySelector('.join-cta-btn');
  const joinSns = document.querySelector('.join-sns');
  const joinSnsLinks = document.querySelectorAll('.join-sns-link');
  if (!joinCtaButton || !joinSns || joinSnsLinks.length === 0) return;

  let highlightTimer = null;

  joinCtaButton.addEventListener('click', (e) => {
    e.preventDefault();
    joinSns.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (highlightTimer) {
      clearTimeout(highlightTimer);
      joinSnsLinks.forEach(link => link.classList.remove('sns-highlight'));
    }
    joinSnsLinks.forEach(link => link.classList.add('sns-highlight'));
    highlightTimer = setTimeout(() => {
      joinSnsLinks.forEach(link => link.classList.remove('sns-highlight'));
      highlightTimer = null;
    }, 1600);
  });
}

// ===== NAV =====
function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
  // Close on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
  // Active state
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ===== SPARKLE ON CLICK =====
function initSparkles() {
  document.addEventListener('click', (e) => {
    const emojis = ['✨', '⭐', '🌟', '💫', '✦'];
    for (let i = 0; i < 6; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle';
      s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      const angle = (Math.PI * 2 * i) / 6 + Math.random() * 0.5;
      const dist = 50 + Math.random() * 60;
      s.style.cssText = `
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        position: fixed;
        --tx: ${Math.cos(angle) * dist}px;
        --ty: ${Math.sin(angle) * dist - 80}px;
        z-index: 9999;
        pointer-events: none;
        font-size: ${12 + Math.random() * 12}px;
      `;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1500);
    }
  });
}

// ===== COUNTDOWN =====
function initCountdown() {
  const container = document.getElementById('countdown-container');
  if (!container) return;

  const now = new Date();
  const upcomingEvents = EVENTS.filter(e => e.startDate > now).sort((a, b) => a.startDate - b.startDate);
  const ongoingEvents = EVENTS.filter(e => e.startDate <= now && e.endDate >= now);

  let targetEvent = ongoingEvents[0] || upcomingEvents[0];
  if (!targetEvent) return;

  let targetDate = targetEvent.status === 'ongoing' ? targetEvent.endDate : targetEvent.startDate;
  let label = targetEvent.status === 'ongoing' ? '終了まで' : '開幕まで';

  const nameEl = document.getElementById('countdown-event-name');
  const labelEl = document.getElementById('countdown-label');
  if (nameEl) nameEl.textContent = targetEvent.title;
  if (labelEl) labelEl.textContent = label;

  function update() {
    const diff = targetDate - new Date();
    if (diff <= 0) {
      container.innerHTML = '<p style="color:var(--disney-gold);font-size:24px;">✨ イベント開催中！ ✨</p>';
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ===== RENDER EVENTS =====
function renderEvents(filter = 'all') {
  const grid = document.getElementById('events-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? EVENTS : EVENTS.filter(e => e.status === filter);

  grid.innerHTML = filtered.map(ev => `
    <a class="event-card fade-up" href="#" onclick="openEventModal('${ev.id}'); return false;">
      <div class="event-card-image-placeholder" style="background: ${ev.gradient}">
        ${ev.emoji}
      </div>
      <div class="event-card-body">
        <div class="event-card-season">${ev.season}</div>
        <h3 class="event-card-title">${ev.title}</h3>
        <p class="event-card-desc">${ev.shortDesc}</p>
        <div class="event-card-footer">
          <span class="event-card-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${formatDateRange(ev.startDate, ev.endDate)}
          </span>
          <span class="event-card-tag ${ev.status === 'ongoing' ? 'tag-ongoing' : ev.status === 'upcoming' ? 'tag-upcoming' : 'tag-ended'}">
            ${ev.status === 'ongoing' ? '開催中' : ev.status === 'upcoming' ? '近日開幕' : '終了'}
          </span>
        </div>
      </div>
    </a>
  `).join('');

  initScrollAnimations();
}

function formatDateRange(start, end) {
  const fmt = d => `${d.getMonth()+1}/${d.getDate()}`;
  return `${start.getFullYear()}年 ${fmt(start)} 〜 ${fmt(end)}`;
}

// ===== EVENT MODAL =====
function openEventModal(id) {
  const ev = EVENTS.find(e => e.id === id);
  if (!ev) return;

  const overlay = document.getElementById('event-modal-overlay');
  if (!overlay) return;

  overlay.querySelector('.modal-hero').style.background = ev.gradient;
  overlay.querySelector('.modal-hero-emoji').textContent = ev.emoji;
  overlay.querySelector('.modal-season').textContent = ev.season;
  overlay.querySelector('.modal-title').textContent = ev.title;
  overlay.querySelector('.modal-desc').textContent = ev.fullDesc;
  overlay.querySelector('.modal-start').textContent = formatDate(ev.startDate);
  overlay.querySelector('.modal-end').textContent = formatDate(ev.endDate);
  overlay.querySelector('.modal-location').textContent = ev.location;
  overlay.querySelector('.modal-status').textContent = ev.status === 'ongoing' ? '🟢 開催中' : ev.status === 'upcoming' ? '🌟 近日開幕' : '終了';
  overlay.querySelector('.modal-highlights-list').innerHTML = ev.highlights.map(h => `<li>${h}</li>`).join('');

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeEventModal() {
  const overlay = document.getElementById('event-modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function formatDate(d) {
  return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`;
}

// ===== RENDER SWEETS =====
function renderSweets() {
  const grid = document.getElementById('sweets-grid');
  if (!grid) return;

  grid.innerHTML = SWEETS.map(s => `
    <div class="sweet-card fade-up">
      <span class="sweet-card-emoji">${s.emoji}</span>
      <div class="sweet-card-body">
        <div class="sweet-card-name">${s.name}</div>
        <div class="sweet-card-price">${s.price}</div>
        <div class="sweet-card-event">${s.event}</div>
      </div>
    </div>
  `).join('');

  initScrollAnimations();
}

// ===== CALENDAR =====
const calendarState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};

function renderCalendar() {
  const { year, month } = calendarState;
  const monthNames = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

  const titleEl = document.getElementById('calendar-month-title');
  if (titleEl) titleEl.textContent = `${year}年 ${monthNames[month]}`;

  const daysEl = document.getElementById('calendar-days');
  if (!daysEl) return;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const eventDays = new Set();
  EVENTS.forEach(ev => {
    let d = new Date(ev.startDate);
    while (d <= ev.endDate) {
      if (d.getFullYear() === year && d.getMonth() === month) {
        eventDays.add(d.getDate());
      }
      d.setDate(d.getDate() + 1);
    }
  });

  let html = '';
  for (let i = 0; i < firstDay; i++) {
    html += '<div class="calendar-day empty"></div>';
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
    const hasEvent = eventDays.has(day);
    html += `
      <div class="calendar-day ${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}">
        <span class="calendar-day-num">${day}</span>
        ${hasEvent ? '<span class="calendar-day-dot"></span>' : ''}
      </div>
    `;
  }
  daysEl.innerHTML = html;
}

function prevMonth() {
  calendarState.month--;
  if (calendarState.month < 0) { calendarState.month = 11; calendarState.year--; }
  renderCalendar();
}

function nextMonth() {
  calendarState.month++;
  if (calendarState.month > 11) { calendarState.month = 0; calendarState.year++; }
  renderCalendar();
}

// ===== FILTER TABS =====
function initFilterTabs() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderEvents(tab.dataset.filter);
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  initNav();
  initScrollAnimations();
  initScrollTop();
  initSparkles();
  initActivityCarousel();
  initJoinCta();

  // Subpage-specific inits (safely no-op when elements are absent)
  initCountdown();
  renderEvents();
  renderSweets();
  renderCalendar();
  initFilterTabs();

  const overlay = document.getElementById('event-modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeEventModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeEventModal();
    });
  }

  const prevBtn = document.getElementById('cal-prev');
  const nextBtn = document.getElementById('cal-next');
  if (prevBtn) prevBtn.addEventListener('click', prevMonth);
  if (nextBtn) nextBtn.addEventListener('click', nextMonth);

  initSlideshow();
});

// ===== ACTIVITY CAROUSEL =====
function initActivityCarousel() {
  const track = document.getElementById('activity-track');
  if (!track) return;
  const wrap = document.querySelector('.activity-carousel-wrap');
  const dialog = document.getElementById('activity-dialog');

  function cardHTML(item, index, hidden) {
    const ah = hidden ? 'aria-hidden="true"' : '';
    const ti = hidden ? '-1' : '0';
    return `<div class="activity-card" data-index="${index}" role="listitem" tabindex="${ti}" ${ah}>`
      + `<img src="${item.image}" alt="${hidden ? '' : item.title}" class="activity-card-img" draggable="false">`
      + `<div class="activity-card-overlay"></div>`
      + `<div class="activity-card-caption">`
      + `<span class="activity-card-en">${item.english}</span>`
      + `<span class="activity-card-title">${item.title}</span>`
      + `</div></div>`;
  }

  track.innerHTML =
    activityItems.map((item, i) => cardHTML(item, i, false)).join('') +
    activityItems.map((item, i) => cardHTML(item, i, true)).join('');

  // --- scroll state ---
  let scrollPos = 0;
  let isDragging = false;
  let didDrag = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let pendingCard = null;
  const DRAG_THRESHOLD = 5;
  const SPEED = 0.4; // px per RAF frame (~24 px/s at 60 fps)

  function getSetWidth() {
    const cs = getComputedStyle(document.documentElement);
    const cardW = parseFloat(cs.getPropertyValue('--activity-card-width')) || 300;
    const gap   = parseFloat(cs.getPropertyValue('--activity-carousel-gap')) || 20;
    return activityItems.length * (cardW + gap);
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function tick() {
    if (!isDragging) {
      scrollPos += SPEED;
      const setW = getSetWidth();
      if (scrollPos >= setW) scrollPos -= setW;
      track.style.transform = `translateX(${-scrollPos}px)`;
    }
    requestAnimationFrame(tick);
  }

  if (!prefersReduced) requestAnimationFrame(tick);

  // --- pointer drag / swipe ---
  if (wrap) {
    wrap.addEventListener('pointerdown', (e) => {
      isDragging    = true;
      didDrag       = false;
      dragStartX    = e.clientX;
      dragStartScroll = scrollPos;
      pendingCard   = e.target.closest('.activity-card[data-index]');
      try { wrap.setPointerCapture(e.pointerId); } catch (_) {}
      wrap.style.cursor = 'grabbing';
    });

    wrap.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = dragStartX - e.clientX;
      if (Math.abs(dx) > DRAG_THRESHOLD) {
        didDrag = true;
        const setW = getSetWidth();
        scrollPos = ((dragStartScroll + dx) % setW + setW) % setW;
        track.style.transform = `translateX(${-scrollPos}px)`;
      }
    });

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      wrap.style.cursor = '';
      // reset after click fires so click handler can inspect didDrag
      setTimeout(() => { didDrag = false; }, 10);
    };

    ['pointerup', 'pointercancel', 'mouseleave'].forEach(ev =>
      wrap.addEventListener(ev, endDrag));

    // card click — on PC, setPointerCapture redirects pointerup to wrap so the browser fires
    // click on wrap (not the card), bypassing track's listener; pendingCard restores the target
    wrap.addEventListener('click', (e) => {
      if (didDrag) return;
      const card = e.target.closest('.activity-card[data-index]') ?? pendingCard;
      pendingCard = null;
      if (!card) return;
      const idx = parseInt(card.dataset.index, 10);
      if (Number.isFinite(idx) && activityItems[idx]) openActivityModal(activityItems[idx]);
    });
  }

  // --- keyboard ---
  track.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.activity-card[data-index]');
    if (!card || card.getAttribute('aria-hidden') === 'true') return;
    e.preventDefault();
    const idx = parseInt(card.dataset.index, 10);
    if (Number.isFinite(idx) && activityItems[idx]) openActivityModal(activityItems[idx]);
  });

  // --- dialog ---
  function openActivityModal(item) {
    if (!dialog) return;
    dialog.querySelector('.activity-dialog-img').src   = item.image;
    dialog.querySelector('.activity-dialog-img').alt   = item.title;
    dialog.querySelector('.activity-dialog-en').textContent    = item.english;
    dialog.querySelector('.activity-dialog-title').textContent = item.title;
    dialog.querySelector('.activity-dialog-desc').textContent  = item.desc || '';
    const savedY = window.scrollY;
    dialog.showModal();
    window.scrollTo(0, savedY);
    document.body.style.overflow = 'hidden';
  }

  if (dialog) {
    const closeBtn = dialog.querySelector('.activity-dialog-close');
    if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
  }
}

// ===== SLIDESHOW =====
function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;

  let current = 0;
  let timer   = null;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() {
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  // Dot click — jump to slide, restart timer
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAuto();
      goTo(Number(dot.dataset.index));
      startAuto();
    });
  });

  startAuto();
}
