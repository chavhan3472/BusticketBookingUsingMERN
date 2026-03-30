let express = require("express");
const {
  user_registartion,
  user_login,
  send_otp,
  reset_password,
} = require("../Controller/usercontroller");
const {
  bus_add,
  upload,
  bus_update,
  deleteBus,
} = require("../Controller/buscontrooler");
const bus_booking = require("../Controller/booking");
const bus_list = require("../Controller/Allbus");
const {
  booking_history,
  all_booking,
} = require("../Controller/Bookinghistroy");
let mini_app = express.Router();
mini_app.post("/userregistration", user_registartion);
mini_app.post("/userlogin", user_login);
// mini_app.post("/addbus", upload.single("bus_img"), bus_add);
mini_app.put("/updatebus/:bus_id", bus_update);
mini_app.post("/addbus", upload.single("bus_img"), bus_add);
mini_app.post("/booking", bus_booking);
mini_app.get("/allbuslist", bus_list);
mini_app.get("/bookinghistroy/:user_email", booking_history);
mini_app.get("/allbooking", all_booking);
mini_app.delete("/deletebus/:bus_id", deleteBus);
mini_app.post("/sendotp/:user_email", send_otp);
mini_app.post("/resetpassword", reset_password);
module.exports = mini_app;
