/* ============================================================
   Click sparkle effect — self-contained drop-in script
   Usage: <script src="js/sparkle.js"></script> just before </body>

   - Spawns star elements at the click/tap point (e.clientX/Y)
   - Flight direction is passed via CSS custom props --tx / --ty
   - Decoration only: pointer-events none, no preventDefault /
     stopPropagation, so buttons and links keep working
   - Each star removes itself after 1.5s so the DOM stays clean
   - Unique class names (sparkle-click-star) avoid collisions
     with the home page .sparkle implementation in js/main.js
   ============================================================ */

(function () {
  'use strict';

  var STYLE_ID    = 'sparkle-click-star-style';
  var CLASS_NAME  = 'sparkle-click-star';
  var LIFETIME_MS = 1500;
  var STAR_COUNT  = 6;
  var EMOJIS      = ['✨', '⭐', '🌟', '💫', '✦'];

  /* -- inject the stylesheet once -- */
  function injectStyleOnce() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent =
      '@keyframes sparkle-click-star-float {' +
      '  0%   { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }' +
      '  100% { transform: translate(var(--tx, 30px), var(--ty, -80px)) rotate(360deg) scale(0); opacity: 0; }' +
      '}' +
      '.' + CLASS_NAME + ' {' +
      '  position: fixed;' +
      '  z-index: 9999;' +
      '  pointer-events: none;' +
      '  animation: sparkle-click-star-float ' + (LIFETIME_MS / 1000) + 's ease-out forwards;' +
      '}';
    document.head.appendChild(style);
  }

  /* -- spawn stars at the click/tap point -- */
  function spawnSparkles(e) {
    for (var i = 0; i < STAR_COUNT; i++) {
      var s = document.createElement('div');
      s.className = CLASS_NAME;
      s.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

      var angle = (Math.PI * 2 * i) / STAR_COUNT + Math.random() * 0.5;
      var dist  = 50 + Math.random() * 60;

      s.style.left = e.clientX + 'px';
      s.style.top  = e.clientY + 'px';
      s.style.fontSize = (12 + Math.random() * 12) + 'px';
      s.style.setProperty('--tx', (Math.cos(angle) * dist) + 'px');
      s.style.setProperty('--ty', (Math.sin(angle) * dist - 80) + 'px');

      document.body.appendChild(s);

      (function (el) {
        setTimeout(function () { el.remove(); }, LIFETIME_MS);
      })(s);
    }
  }

  injectStyleOnce();
  document.addEventListener('click', spawnSparkles);
})();
