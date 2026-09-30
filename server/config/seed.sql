-- server/config/seed.sql
-- Creates the games table and seeds it with the 7 indie games from Project 1.
-- Run this once against your Render PostgreSQL database to initialize data.
-- Usage: psql $DATABASE_URL -f server/config/seed.sql

-- Drop and recreate for a clean slate on re-seeding
DROP TABLE IF EXISTS games;

CREATE TABLE games (
  id          SERIAL PRIMARY KEY,
  slug        VARCHAR(100) UNIQUE NOT NULL,
  title       VARCHAR(200) NOT NULL,
  genre       VARCHAR(100),
  developer   VARCHAR(200),
  year        INTEGER,
  platform    VARCHAR(300),
  rating      NUMERIC(3, 1),
  description TEXT,
  why_play    TEXT,
  image       VARCHAR(500)
);

INSERT INTO games (slug, title, genre, developer, year, platform, rating, description, why_play, image) VALUES
(
  'hollow-knight',
  'Hollow Knight',
  'Metroidvania',
  'Team Cherry',
  2017,
  'PC, Switch, PS4, Xbox',
  9.4,
  'Hollow Knight is a challenging and atmospheric action-adventure game set in the vast underground kingdom of Hallownest. You play as a silent bug warrior exploring ancient ruins, battling deadly creatures, and uncovering a dark story buried beneath the earth. The hand-drawn art style and haunting soundtrack make it one of the most visually stunning indie games ever made.',
  'If you love Dark Souls-style difficulty combined with beautiful exploration, this is the perfect game. It has dozens of hours of content for just $15!',
  'https://upload.wikimedia.org/wikipedia/en/6/60/Hollow_Knight_cover_art.png'
),
(
  'stardew-valley',
  'Stardew Valley',
  'Farming / RPG',
  'ConcernedApe (1 person!)',
  2016,
  'PC, Switch, PS4, Xbox, Mobile',
  9.6,
  'Stardew Valley was created entirely by a single developer over 4 years. You inherit your grandfather''s old farm and must restore it from an overgrown mess into a thriving homestead. Plant crops, raise animals, mine for resources, befriend the townspeople, and maybe even find love. It''s endlessly relaxing and surprisingly deep.',
  'The fact that ONE person built this entire game is mind-blowing. It''s the ultimate comfort game with hundreds of hours of things to do.',
  'https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png'
),
(
  'celeste',
  'Celeste',
  'Platformer',
  'Maddy Makes Games',
  2018,
  'PC, Switch, PS4, Xbox',
  9.2,
  'Celeste is a precision platformer about a young woman named Madeline who decides to climb the mythical Celeste Mountain. Beyond the incredibly tight gameplay, Celeste tells a deeply personal story about mental health, anxiety, and self-acceptance. The game is brutally difficult but always feels fair, and its accessibility options make it enjoyable for all skill levels.',
  'Celeste proves video games can be meaningful art. It handles mental health topics with surprising maturity, and the platforming is some of the best ever made.',
  'https://upload.wikimedia.org/wikipedia/commons/0/0f/Celeste_box_art_full.png'
),
(
  'undertale',
  'Undertale',
  'RPG',
  'Toby Fox (1 person!)',
  2015,
  'PC, Switch, PS4',
  9.5,
  'Undertale is a revolutionary RPG where you don''t have to defeat any enemies. You can talk, reason, and even befriend every monster you encounter. The game constantly subverts expectations and is completely aware it''s a video game, leading to some of the most creative and emotional moments in gaming history. It''s also secretly hilarious.',
  'Undertale changed what people thought RPGs could be. Its story has multiple endings that depend entirely on your choices — you''ll want to play it multiple times.',
  'https://upload.wikimedia.org/wikipedia/commons/3/3b/Undertale_cover_art.png'
),
(
  'hades',
  'Hades',
  'Roguelite',
  'Supergiant Games',
  2020,
  'PC, Switch, PS4, PS5, Xbox',
  9.7,
  'Hades is a roguelite dungeon crawler where you play as Zagreus, the son of Hades, trying to escape the Underworld. What makes it genius is that dying isn''t just expected — it''s part of the story. Every time you die, you return to the House of Hades and have more conversations with characters, unlocking new story. The combat is fast, fluid, and deeply satisfying.',
  'Hades won the Hugo Award for Best Video Game and is widely considered one of the greatest games ever made. The fact that it makes dying feel rewarding is a design miracle.',
  'https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg'
),
(
  'dead-cells',
  'Dead Cells',
  'Roguelite / Metroidvania',
  'Motion Twin',
  2018,
  'PC, Switch, PS4, Xbox, Mobile',
  8.9,
  'Dead Cells is a fast-paced roguelite set in a crumbling, ever-changing castle. You play as a failed experiment, reanimating a corpse to fight through procedurally generated dungeons. With over 100 weapons, dozens of builds, and silky-smooth combat, every run feels different. The game has received constant free updates since launch.',
  'Dead Cells is perfect for short gaming sessions — each run takes 30-60 minutes. Its combat has a just one more run quality that makes it incredibly addictive.',
  'https://upload.wikimedia.org/wikipedia/en/4/40/Dead_Cells_cover_art.jpg'
),
(
  'shovel-knight',
  'Shovel Knight',
  'Platformer / Action',
  'Yacht Club Games',
  2014,
  'PC, Switch, 3DS, PS4, Xbox, Wii U',
  8.8,
  'Shovel Knight is a love letter to classic NES games like Mega Man and DuckTales, but with modern level design sensibilities. You play as Shovel Knight on a quest to rescue Shield Knight from the evil Enchantress. The game features eight challenging stages, each with a unique boss (the Order of No Quarter), and a surprisingly touching story.',
  'Shovel Knight proves retro-style games can still be fresh and exciting. The Treasure Trove edition includes 4 complete games in one package — incredible value.',
  'https://upload.wikimedia.org/wikipedia/en/6/68/Shovel_Knight_cover_art.jpg'
);
