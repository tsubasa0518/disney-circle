/* ============================================================
   Afternoon Tea Club — page-scoped script
   Handles: simple password gate (afternoon-tea-login.html)
            photo grid + detail modal (afternoon-tea.html)

   NOTE: This is a lightweight, client-side-only access gate
   for a static GitHub Pages site. The password and target URL
   are visible in the page source — do not use this mechanism
   to protect genuinely sensitive information.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- password gate ---------- */
  const PASSWORD = '1226';
  const LOCK_MS = 10 * 1000;
  const LOCK_KEY = 'at-lock-until';

  const loginForm = document.getElementById('at-login-form');
  if (loginForm) {
    const input = document.getElementById('at-password');
    const submit = document.getElementById('at-submit');
    const message = document.getElementById('at-login-message');
    let lockTimer = null;

    function lockedUntil() {
      const v = Number(localStorage.getItem(LOCK_KEY) || 0);
      return v > Date.now() ? v : 0;
    }

    function setLocked(until) {
      const remain = Math.ceil((until - Date.now()) / 1000);
      input.disabled = true;
      submit.disabled = true;
      message.textContent = `パスワードが違います。${remain}秒後に再入力できます`;
      clearInterval(lockTimer);
      lockTimer = setInterval(function () {
        const left = Math.ceil((until - Date.now()) / 1000);
        if (left <= 0) {
          clearInterval(lockTimer);
          localStorage.removeItem(LOCK_KEY);
          input.disabled = false;
          submit.disabled = false;
          message.textContent = '';
          input.focus();
        } else {
          message.textContent = `パスワードが違います。${left}秒後に再入力できます`;
        }
      }, 250);
    }

    const existing = lockedUntil();
    if (existing) setLocked(existing);

    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (lockedUntil()) return;
      if (input.value === PASSWORD) {
        localStorage.removeItem(LOCK_KEY);
        window.location.href = 'afternoon-tea.html';
      } else {
        const until = Date.now() + LOCK_MS;
        localStorage.setItem(LOCK_KEY, String(until));
        input.value = '';
        setLocked(until);
      }
    });
  }

  /* ---------- photo grid + modal ---------- */
  const grid = document.getElementById('at-grid');
  if (grid) {
    // Placeholder entries — replace photo frames with real images later.
    const AT_POSTS = [
      { shop: 'ホテルラウンジ（仮）', place: '東京・日比谷', date: '2026年 訪問予定', tags: ['#ホテル', '#いちご', '#ヌン活'] },
      { shop: 'ティーサロン（仮）', place: '東京・銀座', date: '2026年 訪問予定', tags: ['#紅茶', '#スコーン', '#ヌン活'] },
      { shop: 'カフェ（仮）', place: '吉祥寺', date: '2026年 訪問予定', tags: ['#カフェ', '#ケーキ', '#ヌン活'] },
      { shop: 'ホテルラウンジ（仮）', place: '東京・新宿', date: '2026年 訪問予定', tags: ['#ホテル', '#季節限定', '#ヌン活'] },
      { shop: 'ティーサロン（仮）', place: '東京・丸の内', date: '2026年 訪問予定', tags: ['#アフタヌーンティー', '#ヌン活'] },
      { shop: 'カフェ（仮）', place: '国立', date: '2026年 訪問予定', tags: ['#カフェ', '#焼き菓子', '#ヌン活'] },
    ];

    const modal = document.getElementById('at-modal');
    const modalShop = document.getElementById('at-modal-shop');
    const modalMeta = document.getElementById('at-modal-meta');
    const modalTags = document.getElementById('at-modal-tags');
    const modalClose = document.getElementById('at-modal-close');

    function photoFrame() {
      const frame = document.createElement('div');
      frame.className = 'at-photo';
      frame.innerHTML =
        '<span class="at-photo-icon" aria-hidden="true">✦</span>' +
        '<span class="at-photo-label">Photo coming soon</span>';
      return frame;
    }

    AT_POSTS.forEach(function (post, i) {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'at-card';
      card.setAttribute('aria-label', post.shop + ' の詳細を見る');
      card.appendChild(photoFrame());
      card.addEventListener('click', function () { openModal(post); });
      grid.appendChild(card);
    });

    function openModal(post) {
      modalShop.textContent = post.shop;
      modalMeta.innerHTML = '';
      const place = document.createElement('div');
      place.textContent = '場所：' + post.place;
      const date = document.createElement('div');
      date.textContent = '訪問日：' + post.date;
      modalMeta.appendChild(place);
      modalMeta.appendChild(date);

      const photos = document.getElementById('at-modal-photos');
      photos.innerHTML = '';
      for (let i = 0; i < 3; i++) photos.appendChild(photoFrame());

      modalTags.innerHTML = '';
      post.tags.forEach(function (t) {
        const tag = document.createElement('span');
        tag.className = 'at-tag';
        tag.textContent = t;
        modalTags.appendChild(tag);
      });

      modal.classList.add('at-modal-open');
      document.body.style.overflow = 'hidden';
      modalClose.focus();
    }

    function closeModal() {
      modal.classList.remove('at-modal-open');
      document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('at-modal-open')) closeModal();
    });
  }
})();
