// server/routes/games.js
// All /api/games routes — returns JSON from the PostgreSQL database.
// The frontend (client-side JS) fetches these endpoints to render pages.

const express = require("express");
const router = express.Router();
const pool = require("../config/database");

// ----------------------------------------------------------------
// GET /api/games
// Returns all games ordered by rating descending
// ----------------------------------------------------------------
router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM games ORDER BY rating DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error("Error fetching games:", err.message);
    res.status(500).json({ error: "Failed to fetch games from database." });
  }
});

// ----------------------------------------------------------------
// GET /api/games/:slug
// Returns a single game by its slug
// ----------------------------------------------------------------
router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const { rows } = await pool.query(
      "SELECT * FROM games WHERE slug = $1",
      [slug]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: `No game found with slug "${slug}"` });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(`Error fetching game "${slug}":`, err.message);
    res.status(500).json({ error: "Failed to fetch game from database." });
  }
});

module.exports = router;
