const router = require("express").Router();
const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (username,password,money) VALUES (?,?,?)",
      [username, hash, 1000000]
    );

    res.json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const [rows] = await db.query("SELECT * FROM users WHERE username=?", [username]);
    if (!rows.length) return res.status(400).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, rows[0].password);
    if (!valid) return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign(
      { id: rows[0].id, username: rows[0].username },
      process.env.JWT_SECRET
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
