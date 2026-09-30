// client/src/game.js
// Game detail page logic.
// 1. Reads the slug from the current URL path (/games/:slug)
// 2. Fetches that game from /api/games/:slug
// 3. Renders the full detail view into #game-detail-container

// ----------------------------------------------------------------
// Helpers (duplicated from app.js — no bundler, so we keep it simple)
// ----------------------------------------------------------------

function renderStars(rating) {
  const outOf5 = rating / 2;
  const fullStars = Math.floor(outOf5);
  const halfStar = outOf5 % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let stars = "★".repeat(fullStars);
  if (halfStar) stars += "½";
  stars += "☆".repeat(emptyStars);

  return `<span class="stars" title="${rating}/10">${stars} <small>${rating}/10</small></span>`;
}

/**
 * Builds the full detail view HTML for a single game.
 * @param {Object} game
 * @returns {string} HTML string
 */
function renderGameDetail(game) {
  return `
  <div class="back-link">
    <a href="/" id="back-to-list">← Back to All Games</a>
  </div>

  <article class="game-detail" id="game-detail-${game.slug}">
    <div class="game-detail-header">
      <div class="game-detail-image">
        <img src="${game.image}" alt="Cover art for ${game.title}" />
      </div>
      <div class="game-detail-meta">
        <hgroup>
          <h1>${game.title}</h1>
          <p class="subtitle">by ${game.developer}</p>
        </hgroup>
        <div class="detail-rating">${renderStars(Number(game.rating))}</div>
        <table class="detail-table">
          <tbody>
            <tr>
              <td><strong>Genre</strong></td>
              <td><span class="badge">${game.genre}</span></td>
            </tr>
            <tr>
              <td><strong>Developer</strong></td>
              <td>${game.developer}</td>
            </tr>
            <tr>
              <td><strong>Released</strong></td>
              <td>${game.year}</td>
            </tr>
            <tr>
              <td><strong>Platforms</strong></td>
              <td>${game.platform}</td>
            </tr>
            <tr>
              <td><strong>Rating</strong></td>
              <td>${game.rating} / 10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section class="game-detail-body">
      <h2>About the Game</h2>
      <p>${game.description}</p>

      <h2>Why You Should Play It 💡</h2>
      <blockquote>
        <p>${game.why_play}</p>
      </blockquote>
    </section>
  </article>`;
}

// ----------------------------------------------------------------
// Main
// ----------------------------------------------------------------

async function init() {
  const container = document.getElementById("game-detail-container");

  // Extract slug from URL: /games/hollow-knight → "hollow-knight"
  const pathParts = window.location.pathname.split("/");
  const slug = pathParts[pathParts.length - 1];

  if (!slug) {
    window.location.href = "/";
    return;
  }

  try {
    const game = await fetchGameBySlug(slug);

    // Update the page title with the actual game name
    document.title = `${game.title} | Indie Game Picks 🎮`;

    container.innerHTML = renderGameDetail(game);
  } catch (err) {
    if (err.message.startsWith("NOT_FOUND")) {
      container.innerHTML = `
        <section class="error-page" id="not-found-game">
          <div class="error-code">404</div>
          <h1>🔍 Game Not Found</h1>
          <p>We couldn't find a game called "<strong>${slug}</strong>" in our list.</p>
          <a href="/" role="button" id="btn-back-home">← Back to Home</a>
        </section>`;
    } else {
      console.error("Failed to load game:", err);
      container.innerHTML = `
        <section class="error-page" id="load-error">
          <div class="error-code">⚠️</div>
          <h1>Could not load game</h1>
          <p>There was a problem connecting to the database.</p>
          <p><small>${err.message}</small></p>
          <a href="/" role="button" id="btn-back-home">← Back to Home</a>
        </section>`;
    }
  }
}

document.addEventListener("DOMContentLoaded", init);
