require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/clubs", require("./routes/clubs"));
app.use("/api/squad", require("./routes/squad"));

app.get("/", (req,res)=>{
  res.send("OSM Clone API Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on " + PORT));
