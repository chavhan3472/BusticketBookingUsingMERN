let booking_data = require("../model/bookingmodel");
let sendBookingMail = require("../utils/sendMail");

let bus_booking = async (req, res) => {
  try {
    let data = new booking_data(req.body);
    await data.save();
    await sendBookingMail(req.body.user_email, req.body);
    res.json({ msg: "Booking Sucessful" });
  } catch {
    res.json({ msg: "Failed To Book Bus" });
  }
};
module.exports = bus_booking;
