// helpers/html.js
// These are helper functions to generate HTML pages.
// Instead of using a templating engine (like Handlebars or EJS),
// we're building raw HTML strings so we can understand how it works first.
// In later units we might switch to a real templating engine.

// This function wraps any page content with a full HTML document,
// including the <head> with PicoCSS and our custom styles linked in.
function wrapPage(title, bodyContent) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="A curated listicle of the best indie video games you should play right now. Discover hidden gems and beloved classics!" />
  <title>${title} | Indie Game Picks 🎮</title>
  <!-- PicoCSS - classless CSS framework that makes semantic HTML look great -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
  <!-- Our own custom styles on top of PicoCSS -->
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <header class="container">
    <nav>
      <ul>
        <li><strong><a href="/" id="nav-home-link">🎮 Indie Game Picks</a></strong></li>
      </ul>
      <ul>
        <li><a href="/" id="nav-games-link">All Games</a></li>
        <li><a href="/about" id="nav-about-link">About</a></li>
      </ul>
    </nav>
  </header>

  <main class="container">
    ${bodyContent}
  </main>

  <footer class="container">
    <hr />
    <p>Made with ❤️ for WEB103 Project 1 &middot; Member ID: 136354</p>
  </footer>
</body>
</html>`;
}

// Generates the star rating HTML (e.g. 9.4 → shows filled/empty stars)
function renderStars(rating) {
  // rating is out of 10, we'll show it out of 5 stars
  const outOf5 = rating / 2;
  const fullStars = Math.floor(outOf5);
  const halfStar = outOf5 % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let stars = "★".repeat(fullStars);
  if (halfStar) stars += "½";
  stars += "☆".repeat(emptyStars);

  return `<span class="stars" title="${rating}/10">${stars} <small>${rating}/10</small></span>`;
}

// Generates an individual game card for the home page list
function renderGameCard(game) {
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
      ${renderStars(game.rating)}
      <p class="game-description">${game.description.slice(0, 150)}...</p>
      <a href="/games/${game.slug}" role="button" class="outline" id="btn-view-${game.slug}">View Details →</a>
    </div>
  </article>`;
}

// Generates the full detail page for a single game
function renderGameDetail(game) {
  const body = `
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
        <div class="detail-rating">${renderStars(game.rating)}</div>
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

  return wrapPage(game.title, body);
}

module.exports = { wrapPage, renderGameCard, renderGameDetail, renderStars };
