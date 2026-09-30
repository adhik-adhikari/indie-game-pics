// server/server.js
// Main Express server for Project 2.
// Serves the client-side HTML/CSS/JS files as static assets
// and exposes a JSON REST API for the PostgreSQL games data.

require("dotenv").config({ path: require("path").join(__dirname, "../.env") });

const express = require("express");
const path = require("path");

const gamesRouter = require("./routes/games");

const app = express();
const PORT = process.env.PORT || 3000;

// ----------------------------------------------------------------
// Middleware
// ----------------------------------------------------------------
app.use(express.json());

// Serve everything in /client as static files
// (index.html, game.html, CSS, JS, images)
app.use(express.static(path.join(__dirname, "../client")));

// ----------------------------------------------------------------
// API Routes
// ----------------------------------------------------------------
app.use("/api/games", gamesRouter);

// ----------------------------------------------------------------
// Client-side routing fallback
// Any route that isn't /api/* serves index.html so the browser
// can handle navigation (home page = /, game detail = /games/:slug)
// ----------------------------------------------------------------
app.get("/games/:slug", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/game.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/about.html"));
});

// ----------------------------------------------------------------
// Start server
// ----------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🎮 Indie Games server running at http://localhost:${PORT}`);
  console.log(`   API: http://localhost:${PORT}/api/games`);
});
