// server.js
// This is the main entry point of our web app.
// We use Express to create a web server that handles routes (URLs) and
// sends back HTML pages. This is called "server-side rendering" (SSR).
//
// Steps I followed:
// 1. Import Express and our data/helpers
// 2. Set up middleware (static files)
// 3. Define routes (GET /, GET /games/:slug, GET /about)
// 4. Handle 404 errors for unknown routes
// 5. Start the server on port 3000

const express = require("express");
const path = require("path");

// Import our fake "database" - just a JS array for now
const games = require("./data/games");

// Import our HTML builder helpers
const { wrapPage, renderGameCard, renderGameDetail } = require("./helpers/html");

// Create the Express app
const app = express();
const PORT = 3000;

// Middleware: serve static files (CSS, images, etc.) from the "public" folder
// When the browser asks for /styles.css, Express will look in ./public/styles.css
app.use(express.static(path.join(__dirname, "public")));

// ============================================================
// ROUTE 1: Home Page - GET /
// Shows the list of all games
// ============================================================
app.get("/", (req, res) => {
  // Build all the game cards by mapping over our games array
  const gameCards = games.map((game) => renderGameCard(game)).join("\n");

  // Wrap the cards in a hero section + the list
  const bodyContent = `
  <section class="hero" id="hero-section">
    <hgroup>
      <h1>🎮 Indie Game Picks</h1>
      <p>A student's guide to the best indie games you should play right now.</p>
    </hgroup>
    <p class="hero-sub">
      Indie games are made by small teams (or even one person!) without big publisher budgets.
      Despite that, they often have the best stories, most creative gameplay, and most heart.
      Here are my top picks — click on any game to learn more!
    </p>
  </section>

  <section id="games-list" class="games-list">
    <h2 class="section-title">📋 The List (${games.length} Games)</h2>
    ${gameCards}
  </section>`;

  // Send the full HTML page back to the browser
  res.send(wrapPage("Home", bodyContent));
});

// ============================================================
// ROUTE 2: Individual Game Detail - GET /games/:slug
// The :slug is a URL parameter — e.g., /games/hollow-knight
// Express captures "hollow-knight" as req.params.slug
// ============================================================
app.get("/games/:slug", (req, res) => {
  const { slug } = req.params;

  // Look up the game by its slug in our data array
  // Array.find() returns the first match, or undefined if not found
  const game = games.find((g) => g.slug === slug);

  // If no game was found with that slug, send a 404
  if (!game) {
    return res.status(404).send(
      wrapPage(
        "Game Not Found",
        `<section class="error-page" id="not-found-game">
          <h1>🔍 Game Not Found</h1>
          <p>We couldn't find a game called "<strong>${slug}</strong>" in our list.</p>
          <a href="/" role="button" id="btn-back-home">← Back to Home</a>
        </section>`
      )
    );
  }

  // If we found the game, render and send the detail page
  res.send(renderGameDetail(game));
});

// ============================================================
// ROUTE 3: About Page - GET /about
// A simple static page explaining the project
// ============================================================
app.get("/about", (req, res) => {
  const bodyContent = `
  <article id="about-page">
    <hgroup>
      <h1>About This Project</h1>
      <p>WEB103 Project 1 — Listicle Part 1</p>
    </hgroup>

    <p>
      This web app is my submission for <strong>WEB103: Advanced Web Development</strong>
      at CodePath (Fall 2026). The project goal was to build a <em>listicle</em> —
      a list-based web app with a backend that serves HTML pages.
    </p>

    <h2>What I Learned Building This</h2>
    <ul>
      <li>How to set up an <strong>Express.js</strong> server from scratch</li>
      <li>How <strong>routes</strong> work — mapping URLs to functions that return HTML</li>
      <li>How to use <strong>URL parameters</strong> (like <code>/games/:slug</code>) to create dynamic pages</li>
      <li>How to serve <strong>static files</strong> (CSS) using Express middleware</li>
      <li>How to handle <strong>404 errors</strong> for unknown routes</li>
      <li>How to style a site with <strong>PicoCSS</strong> — a classless CSS framework</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
      <li><strong>Backend:</strong> Node.js + Express</li>
      <li><strong>Frontend:</strong> Vanilla HTML + CSS (no framework)</li>
      <li><strong>Styling:</strong> PicoCSS v2</li>
      <li><strong>Data:</strong> Static JS array (Unit 2 will add a real database)</li>
    </ul>

    <h2>The Data</h2>
    <p>
      Each game in the list has these shared attributes:
    </p>
    <ul>
      <li><code>slug</code> — unique URL-friendly identifier</li>
      <li><code>title</code> — game name</li>
      <li><code>genre</code> — type of game</li>
      <li><code>developer</code> — who made it</li>
      <li><code>year</code> — release year</li>
      <li><code>platform</code> — where you can play it</li>
      <li><code>rating</code> — score out of 10</li>
      <li><code>description</code> — full description</li>
      <li><code>why_play</code> — my personal recommendation</li>
      <li><code>image</code> — cover art URL</li>
    </ul>

    <a href="/" role="button" id="btn-about-home">← Back to Games List</a>
  </article>`;

  res.send(wrapPage("About", bodyContent));
});

// ============================================================
// CATCH-ALL: 404 Page
// This route matches ANYTHING that didn't match above.
// The order matters! This must come LAST.
// ============================================================
app.use((req, res) => {
  res.status(404).send(
    wrapPage(
      "404 - Page Not Found",
      `<section class="error-page" id="page-not-found">
        <div class="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>
          The page <code>${req.path}</code> doesn't exist.
          Maybe check the URL, or head back to the home page?
        </p>
        <a href="/" role="button" id="btn-404-home">🏠 Go Home</a>
      </section>`
    )
  );
});

// Start listening for requests!
app.listen(PORT, () => {
  console.log(`🎮 Indie Games server running at http://localhost:${PORT}`);
  console.log(`   Home:    http://localhost:${PORT}/`);
  console.log(`   Example: http://localhost:${PORT}/games/hollow-knight`);
  console.log(`   About:   http://localhost:${PORT}/about`);
  console.log(`   404 test: http://localhost:${PORT}/games/unknown-game`);
});
