const router = require("express").Router();
const db = require("../config/db");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, async (req,res)=>{
  const userId = req.user.id;

  const [user] = await db.query(
    "SELECT club_id FROM users WHERE id=?",
    [userId]
  );

  const clubId = user[0].club_id;

  const [players] = await db.query(
    "SELECT * FROM players WHERE club_id=?",
    [clubId]
  );

  res.json(players);
});

module.exports = router;
