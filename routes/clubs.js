const router = require("express").Router();
const db = require("../config/db");
const auth = require("../middleware/authMiddleware");

router.get("/", async (req,res)=>{
  const [clubs] = await db.query(
    "SELECT * FROM clubs WHERE manager_id IS NULL"
  );
  res.json(clubs);
});

router.post("/choose/:clubId", auth, async (req,res)=>{
  const userId = req.user.id;
  const clubId = req.params.clubId;

  await db.query(
    "UPDATE clubs SET manager_id=? WHERE id=?",
    [userId,clubId]
  );

  await db.query(
    "UPDATE users SET club_id=? WHERE id=?",
    [clubId,userId]
  );

  res.json({msg:"club selected"});
});

module.exports = router;
