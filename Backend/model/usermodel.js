let mongoose = require("mongoose");

let user_schema = mongoose.Schema({
  user_name: String,
  user_email: String,
  user_phno: String,
  user_password: String,
  role: {
    type: String,
    default: "user",
  },
});

user_data = new mongoose.model("user_data", user_schema);
module.exports = user_data;
