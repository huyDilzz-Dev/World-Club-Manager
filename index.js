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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("Server running on port " + PORT)
);
