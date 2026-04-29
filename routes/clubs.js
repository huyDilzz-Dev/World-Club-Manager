const router = require("express").Router();
const db = require("../db");
const auth = require("../middleware/auth");

router.get("/clubs", auth, async (req, res) => {
  const [rows] = await db.query("SELECT * FROM clubs");
  res.json(rows);
});

module.exports = router;
