// client/src/app.js
// Home page logic.
// 1. Fetches all games from /api/games
// 2. Renders game cards into #games-container
// 3. Wires up the live search input (stretch feature)

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

/**
 * Converts a numeric rating out of 10 into star HTML.
 * @param {number} rating
 * @returns {string} HTML string
 */
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
 * Builds the HTML for one game card.
 * @param {Object} game
 * @returns {string} HTML string
 */
function renderGameCard(game) {
  const preview = game.description.slice(0, 150) + "...";
  return `
  <article class="game-card" id="game-card-${game.slug}">
    <div class="game-card-image">
      <img src="${game.image}" alt="Cover art for ${game.title}" loading="lazy" />
    </div>
    <div class="game-card-info">
      <hgroup>
        <h2>${game.title}</h2>
        <p>${game.genre} &bull; ${game.year} &bull; ${game.developer}</p>
      </hgroup>
      ${renderStars(Number(game.rating))}
      <p class="game-description">${preview}</p>
      <a href="/games/${game.slug}" role="button" class="outline" id="btn-view-${game.slug}">View Details →</a>
    </div>
  </article>`;
}

// ----------------------------------------------------------------
// Main
// ----------------------------------------------------------------

let allGames = []; // kept in memory so search can filter without re-fetching

/**
 * Renders a filtered subset of games into the DOM.
 * @param {Array} games
 */
function displayGames(games) {
  const container = document.getElementById("games-container");
  const heading = document.getElementById("list-heading");

  if (games.length === 0) {
    container.innerHTML = `
      <div class="no-results" id="no-results">
        <p>😕 No games match your search.</p>
        <p><small>Try a different title, genre, or developer.</small></p>
      </div>`;
    heading.textContent = `📋 The List (0 results)`;
    return;
  }

  heading.textContent = `📋 The List (${games.length} Game${games.length !== 1 ? "s" : ""})`;
  container.innerHTML = games.map(renderGameCard).join("\n");
}

async function init() {
  const container = document.getElementById("games-container");

  try {
    allGames = await fetchAllGames();
    displayGames(allGames);
  } catch (err) {
    console.error("Failed to load games:", err);
    container.innerHTML = `
      <section class="error-page" id="load-error">
        <div class="error-code">⚠️</div>
        <h1>Could not load games</h1>
        <p>There was a problem connecting to the database. Please try refreshing.</p>
        <p><small>${err.message}</small></p>
      </section>`;
  }

  // ── Stretch: Live search ──────────────────────────────────────
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) {
        displayGames(allGames);
        return;
      }
      const filtered = allGames.filter(
        (g) =>
          g.title.toLowerCase().includes(query) ||
          g.genre.toLowerCase().includes(query) ||
          g.developer.toLowerCase().includes(query)
      );
      displayGames(filtered);
    });
  }
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", init);
