let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
const mini_app = require("./Routes/router");
require("dotenv").config();
mongoose
  .connect(process.env.myDatabase)
  .then(() => {
    console.log("Coonection Ok ");
  })
  .catch(() => {
    console.log("Failed To Coonect With Database");
  });
let app = express();
app.listen(5000, () => {
  console.log("server is run");
});
app.use(express.json());
app.use(cors());
app.use("/Busimg", express.static("Busimg"));
app.use(express.urlencoded({ extended: true }));
app.use("/", mini_app);
