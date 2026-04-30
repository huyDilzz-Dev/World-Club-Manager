const router = require("express").Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req,res)=>{
  const {username,password} = req.body;

  const hash = await bcrypt.hash(password,10);
  await db.query(
    "INSERT INTO users (username,password,money) VALUES (?,?,10000000)",
    [username,hash]
  );

  res.json({msg:"register success"});
});

router.post("/login", async (req,res)=>{
  const {username,password} = req.body;

  const [rows] = await db.query(
    "SELECT * FROM users WHERE username=?",
    [username]
  );

  if(rows.length==0) return res.status(400).json({msg:"user not found"});

  const user = rows[0];
  const match = await bcrypt.compare(password,user.password);
  if(!match) return res.status(400).json({msg:"wrong password"});

  const token = jwt.sign({id:user.id},"SECRETKEY");

  res.json({token});
});

module.exports = router;
