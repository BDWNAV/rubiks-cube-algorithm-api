const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({
  origin: "*"
}));

app.use('/', require("./routes/index"));

app.listen(3000, () => {
  console.log("On http://localhost:3000");
});