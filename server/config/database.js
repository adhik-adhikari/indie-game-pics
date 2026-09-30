// server/config/database.js
// Sets up the PostgreSQL connection pool using the `pg` library.
// The pool is shared across all route files so we don't open
// a new connection on every request.

require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Required for Render-hosted PostgreSQL (uses self-signed TLS cert)
  ssl: {
    rejectUnauthorized: false,
  },
});

// Quick connectivity check on startup
pool.connect((err, client, release) => {
  if (err) {
    console.error("❌ Failed to connect to PostgreSQL:", err.message);
  } else {
    console.log("✅ Connected to PostgreSQL database");
    release();
  }
});

module.exports = pool;
