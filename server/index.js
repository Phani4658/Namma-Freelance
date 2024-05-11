const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./config/db");
const { authRouter } = require("./routes/auth.routes");

const app = express();
const port = 3008;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Connected to Namma Freelancer server");
});
app.use(express.json());
app.use(bodyParser.json());

app.use("/", authRouter);

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
