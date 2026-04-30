const db = require("../config/db");

async function seedAllClubs() {
  console.log("Seeding ALL WORLD CLUBS...");

  const clubs = [

  // =========================
  // 🇪🇸 LA LIGA
  // =========================
  ["Real Madrid","La Liga","Spain"],
  ["Barcelona","La Liga","Spain"],
  ["Atletico Madrid","La Liga","Spain"],
  ["Sevilla","La Liga","Spain"],
  ["Valencia","La Liga","Spain"],
  ["Villarreal","La Liga","Spain"],
  ["Real Sociedad","La Liga","Spain"],
  ["Real Betis","La Liga","Spain"],
  ["Athletic Bilbao","La Liga","Spain"],
  ["Getafe","La Liga","Spain"],

  // LA LIGA 2
  ["Espanyol","La Liga 2","Spain"],
  ["Real Zaragoza","La Liga 2","Spain"],
  ["Sporting Gijon","La Liga 2","Spain"],
  ["Leganes","La Liga 2","Spain"],
  ["Eibar","La Liga 2","Spain"],
  ["Malaga","La Liga 2","Spain"],

  // =========================
  // 🇬🇧 PREMIER LEAGUE
  // =========================
  ["Manchester City","Premier League","England"],
  ["Manchester United","Premier League","England"],
  ["Liverpool","Premier League","England"],
  ["Chelsea","Premier League","England"],
  ["Arsenal","Premier League","England"],
  ["Tottenham","Premier League","England"],
  ["Newcastle United","Premier League","England"],
  ["Aston Villa","Premier League","England"],
  ["West Ham","Premier League","England"],
  ["Brighton","Premier League","England"],

  // CHAMPIONSHIP
  ["Leeds United","Championship","England"],
  ["Leicester City","Championship","England"],
  ["Southampton","Championship","England"],
  ["Norwich City","Championship","England"],
  ["Watford","Championship","England"],
  ["Sunderland","Championship","England"],

  // =========================
  // 🇮🇹 SERIE A
  // =========================
  ["Inter Milan","Serie A","Italy"],
  ["AC Milan","Serie A","Italy"],
  ["Juventus","Serie A","Italy"],
  ["Napoli","Serie A","Italy"],
  ["Roma","Serie A","Italy"],
  ["Lazio","Serie A","Italy"],
  ["Atalanta","Serie A","Italy"],
  ["Fiorentina","Serie A","Italy"],
  ["Torino","Serie A","Italy"],
  ["Bologna","Serie A","Italy"],

  // SERIE B
  ["Parma","Serie B","Italy"],
  ["Sampdoria","Serie B","Italy"],
  ["Palermo","Serie B","Italy"],
  ["Bari","Serie B","Italy"],
  ["Pisa","Serie B","Italy"],
  ["Como","Serie B","Italy"],

  // =========================
  // 🇩🇪 BUNDESLIGA
  // =========================
  ["Bayern Munich","Bundesliga","Germany"],
  ["Borussia Dortmund","Bundesliga","Germany"],
  ["RB Leipzig","Bundesliga","Germany"],
  ["Bayer Leverkusen","Bundesliga","Germany"],
  ["Wolfsburg","Bundesliga","Germany"],
  ["Eintracht Frankfurt","Bundesliga","Germany"],
  ["Borussia Monchengladbach","Bundesliga","Germany"],
  ["Stuttgart","Bundesliga","Germany"],
  ["Freiburg","Bundesliga","Germany"],
  ["Hoffenheim","Bundesliga","Germany"],

  // BUNDESLIGA 2
  ["Hamburg","Bundesliga 2","Germany"],
  ["Schalke 04","Bundesliga 2","Germany"],
  ["Hertha Berlin","Bundesliga 2","Germany"],
  ["Hannover","Bundesliga 2","Germany"],
  ["Nurnberg","Bundesliga 2","Germany"],
  ["Fortuna Dusseldorf","Bundesliga 2","Germany"],

  // =========================
  // 🇫🇷 LIGUE 1
  // =========================
  ["PSG","Ligue 1","France"],
  ["Marseille","Ligue 1","France"],
  ["Lyon","Ligue 1","France"],
  ["Monaco","Ligue 1","France"],
  ["Lille","Ligue 1","France"],
  ["Nice","Ligue 1","France"],
  ["Rennes","Ligue 1","France"],
  ["Lens","Ligue 1","France"],
  ["Nantes","Ligue 1","France"],
  ["Strasbourg","Ligue 1","France"],

  // LIGUE 2
  ["Saint Etienne","Ligue 2","France"],
  ["Bordeaux","Ligue 2","France"],
  ["Toulouse","Ligue 2","France"],
  ["Caen","Ligue 2","France"],
  ["Guingamp","Ligue 2","France"],
  ["Auxerre","Ligue 2","France"],

  // =========================
  // 🇮🇩 LIGA 1 INDONESIA (FULL 18)
  // =========================
  ["Persib Bandung","Liga 1 Indonesia","Indonesia"],
  ["Persija Jakarta","Liga 1 Indonesia","Indonesia"],
  ["Persebaya Surabaya","Liga 1 Indonesia","Indonesia"],
  ["Arema FC","Liga 1 Indonesia","Indonesia"],
  ["Bali United","Liga 1 Indonesia","Indonesia"],
  ["Borneo FC Samarinda","Liga 1 Indonesia","Indonesia"],
  ["PSM Makassar","Liga 1 Indonesia","Indonesia"],
  ["Persik Kediri","Liga 1 Indonesia","Indonesia"],
  ["Persita Tangerang","Liga 1 Indonesia","Indonesia"],
  ["Madura United","Liga 1 Indonesia","Indonesia"],
  ["Barito Putera","Liga 1 Indonesia","Indonesia"],
  ["Persis Solo","Liga 1 Indonesia","Indonesia"],
  ["Dewa United","Liga 1 Indonesia","Indonesia"],
  ["RANS Nusantara FC","Liga 1 Indonesia","Indonesia"],
  ["Bhayangkara FC","Liga 1 Indonesia","Indonesia"],
  ["PSIS Semarang","Liga 1 Indonesia","Indonesia"],
  ["PSS Sleman","Liga 1 Indonesia","Indonesia"],
  ["Persikabo 1973","Liga 1 Indonesia","Indonesia"],
  ];

  for (let club of clubs) {
    await db.query(
      "INSERT INTO clubs (name, league, country) VALUES (?,?,?)",
      club
    );
  }

  console.log("ALL CLUBS SEEDED SUCCESS!");
  process.exit();
}

seedAllClubs();
