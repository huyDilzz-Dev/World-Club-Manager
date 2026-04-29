const router = require("express").Router();
const db = require("../db");
const auth = require("../middleware/auth");

router.get("/me", auth, async (req, res) => {
  const [rows] = await db.query(
    "SELECT id,username,money FROM users WHERE id=?",
    [req.user.id]
  );
  res.json(rows[0]);
});

module.exports = router;
