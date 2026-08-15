document.addEventListener('DOMContentLoaded', function () {
  var formerSection = document.querySelector('.cppl-alumni');
  if (!formerSection) return;

  var placeholder = formerSection.querySelector('p');
  if (placeholder) placeholder.remove();

  if (formerSection.querySelector('[data-member="lee-junseop"]')) return;

  var grid = document.createElement('div');
  grid.className = 'cppl-member-grid';
  grid.innerHTML = `
    <article class="cppl-member-card cppl-member-profile-card cppl-member-muted" data-member="lee-junseop">
      <div class="cppl-member-character" style="--avatar-bg:#eef5fb;--avatar-hair:#343235;--avatar-shirt:#547c9b;">
        <svg class="cppl-avatar-ill" viewBox="0 0 120 140" aria-hidden="true">
          <circle cx="60" cy="70" r="54" fill="var(--avatar-bg)"/>
          <path d="M26 118c7-23 61-23 68 0v16H26z" fill="var(--avatar-shirt)"/>
          <circle cx="60" cy="65" r="29" fill="#f2d2bd"/>
          <path d="M30 62c1-27 18-42 32-42 18 0 29 15 28 41-8-12-18-18-30-18-12 0-22 6-30 19z" fill="var(--avatar-hair)"/>
          <path d="M36 49c9-14 38-19 51 1-11-7-22-9-32-6-8 2-13 4-19 5z" fill="var(--avatar-hair)"/>
          <circle cx="49" cy="66" r="3" fill="#26333d"/>
          <circle cx="72" cy="66" r="3" fill="#26333d"/>
          <path d="M54 79c4 4 9 4 13 0" fill="none" stroke="#b66f69" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="42" cy="76" r="4" fill="#efb7ad" opacity=".55"/>
          <circle cx="78" cy="76" r="4" fill="#efb7ad" opacity=".55"/>
        </svg>
        <span class="cppl-avatar-badge">🌾</span>
      </div>
      <div class="cppl-member-info">
        <h3>이준섭</h3>
        <p>Former Undergraduate Researcher</p>
      </div>
    </article>`;

  formerSection.appendChild(grid);
});
