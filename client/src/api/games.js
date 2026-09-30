// client/src/api/games.js
// Reusable fetch functions for talking to the backend JSON API.
// These are plain async functions — no framework, no dependencies.
// Loaded before app.js and game.js so they can call these functions.

/**
 * Fetch all games from the API.
 * @returns {Promise<Array>} Array of game objects
 */
async function fetchAllGames() {
  const response = await fetch("/api/games");
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch a single game by its slug.
 * @param {string} slug - URL slug, e.g. "hollow-knight"
 * @returns {Promise<Object>} Single game object
 */
async function fetchGameBySlug(slug) {
  const response = await fetch(`/api/games/${slug}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`NOT_FOUND:${slug}`);
    }
    throw new Error(`API error ${response.status}: ${response.statusText}`);
  }
  return response.json();
}
