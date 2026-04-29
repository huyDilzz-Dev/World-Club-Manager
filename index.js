require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
  res.send("WORLD CLUB MANAGER API ONLINE");
});

app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/users"));
app.use("/game", require("./routes/clubs"));

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);
