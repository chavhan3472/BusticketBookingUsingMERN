let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
const mini_app = require("./Routes/router");
mongoose
  .connect(
    "mongodb+srv://sahilchavhan250_db_user:PSTWrj2m0dQWQU28@cluster0.y9kpyzn.mongodb.net/BusTicketBooking",
  )
  .then(() => {
    console.log("Coonection Ok ");
  })
  .catch(() => {
    console.log("Failed To Coonect With Database");
  });
let app = express();
app.listen(5000, () => {
  console.log("server is run on port number 5000");
});
app.use(express.json());
app.use(cors());
app.use("/Busimg", express.static("Busimg"));
app.use(express.urlencoded({ extended: true }));
app.use("/", mini_app);
