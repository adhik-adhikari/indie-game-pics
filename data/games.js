// data/games.js
// This is our "database" for now - in Unit 2 we'll connect this to a real database!
// Each game has a unique slug that we'll use in the URL, like /games/hollow-knight

const games = [
  {
    slug: "hollow-knight",
    title: "Hollow Knight",
    genre: "Metroidvania",
    developer: "Team Cherry",
    year: 2017,
    platform: "PC, Switch, PS4, Xbox",
    rating: 9.4,
    description:
      "Hollow Knight is a challenging and atmospheric action-adventure game set in the vast underground kingdom of Hallownest. You play as a silent bug warrior exploring ancient ruins, battling deadly creatures, and uncovering a dark story buried beneath the earth. The hand-drawn art style and haunting soundtrack make it one of the most visually stunning indie games ever made.",
    why_play:
      "If you love Dark Souls-style difficulty combined with beautiful exploration, this is the perfect game. It has dozens of hours of content for just $15!",
    image: "https://upload.wikimedia.org/wikipedia/en/6/60/Hollow_Knight_cover_art.png",
  },
  {
    slug: "stardew-valley",
    title: "Stardew Valley",
    genre: "Farming / RPG",
    developer: "ConcernedApe (1 person!)",
    year: 2016,
    platform: "PC, Switch, PS4, Xbox, Mobile",
    rating: 9.6,
    description:
      "Stardew Valley was created entirely by a single developer over 4 years. You inherit your grandfather's old farm and must restore it from an overgrown mess into a thriving homestead. Plant crops, raise animals, mine for resources, befriend the townspeople, and maybe even find love. It's endlessly relaxing and surprisingly deep.",
    why_play:
      "The fact that ONE person built this entire game is mind-blowing. It's the ultimate comfort game with hundreds of hours of things to do.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
  },
  {
    slug: "celeste",
    title: "Celeste",
    genre: "Platformer",
    developer: "Maddy Makes Games",
    year: 2018,
    platform: "PC, Switch, PS4, Xbox",
    rating: 9.2,
    description:
      "Celeste is a precision platformer about a young woman named Madeline who decides to climb the mythical Celeste Mountain. Beyond the incredibly tight gameplay, Celeste tells a deeply personal story about mental health, anxiety, and self-acceptance. The game is brutally difficult but always feels fair, and its accessibility options make it enjoyable for all skill levels.",
    why_play:
      "Celeste proves video games can be meaningful art. It handles mental health topics with surprising maturity, and the platforming is some of the best ever made.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Celeste_box_art_full.png",
  },
  {
    slug: "undertale",
    title: "Undertale",
    genre: "RPG",
    developer: "Toby Fox (1 person!)",
    year: 2015,
    platform: "PC, Switch, PS4",
    rating: 9.5,
    description:
      "Undertale is a revolutionary RPG where you don't have to defeat any enemies. You can talk, reason, and even befriend every monster you encounter. The game constantly subverts expectations and is completely aware it's a video game, leading to some of the most creative and emotional moments in gaming history. It's also secretly hilarious.",
    why_play:
      "Undertale changed what people thought RPGs could be. Its story has multiple endings that depend entirely on your choices — you'll want to play it multiple times.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Undertale_cover_art.png",
  },
  {
    slug: "hades",
    title: "Hades",
    genre: "Roguelite",
    developer: "Supergiant Games",
    year: 2020,
    platform: "PC, Switch, PS4, PS5, Xbox",
    rating: 9.7,
    description:
      "Hades is a roguelite dungeon crawler where you play as Zagreus, the son of Hades, trying to escape the Underworld. What makes it genius is that dying isn't just expected — it's part of the story. Every time you die, you return to the House of Hades and have more conversations with characters, unlocking new story. The combat is fast, fluid, and deeply satisfying.",
    why_play:
      "Hades won the Hugo Award for Best Video Game and is widely considered one of the greatest games ever made. The fact that it makes dying feel rewarding is a design miracle.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg",
  },
  {
    slug: "dead-cells",
    title: "Dead Cells",
    genre: "Roguelite / Metroidvania",
    developer: "Motion Twin",
    year: 2018,
    platform: "PC, Switch, PS4, Xbox, Mobile",
    rating: 8.9,
    description:
      "Dead Cells is a fast-paced roguelite set in a crumbling, ever-changing castle. You play as a failed experiment, reanimating a corpse to fight through procedurally generated dungeons. With over 100 weapons, dozens of builds, and silky-smooth combat, every run feels different. The game has received constant free updates since launch.",
    why_play:
      "Dead Cells is perfect for short gaming sessions — each run takes 30-60 minutes. Its combat has a 'just one more run' quality that makes it incredibly addictive.",
    image: "https://upload.wikimedia.org/wikipedia/en/4/40/Dead_Cells_cover_art.jpg",
  },
  {
    slug: "shovel-knight",
    title: "Shovel Knight",
    genre: "Platformer / Action",
    developer: "Yacht Club Games",
    year: 2014,
    platform: "PC, Switch, 3DS, PS4, Xbox, Wii U",
    rating: 8.8,
    description:
      "Shovel Knight is a love letter to classic NES games like Mega Man and DuckTales, but with modern level design sensibilities. You play as Shovel Knight on a quest to rescue Shield Knight from the evil Enchantress. The game features eight challenging stages, each with a unique boss (the Order of No Quarter), and a surprisingly touching story.",
    why_play:
      "Shovel Knight proves retro-style games can still be fresh and exciting. The Treasure Trove edition includes 4 complete games in one package — incredible value.",
    image: "https://upload.wikimedia.org/wikipedia/en/6/68/Shovel_Knight_cover_art.jpg",
  },
];

module.exports = games;
