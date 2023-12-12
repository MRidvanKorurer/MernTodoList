const express = require("express");
const dotenv = require("dotenv");
const conn = require("./db");
const cors = require("cors");
const noteRoute = require("./routes/note");

dotenv.config();

const app = express();

const port = process.env.PORT;

//* middlewares
app.use(express.json());
app.use(cors());

//* routing
app.use("/api/note", noteRoute);

app.listen(port, () => {
  conn();
  console.log(`Application running on port:${port}`);
});
