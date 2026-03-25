let booking_data = require("../model/bookingmodel");
let bus_booking = async (req, res) => {
  try {
    let data = new booking_data(req.body);
    await data.save();
    res.json({ msg: "Booking Sucessful" });
  } catch {
    res.json({ msg: "Failed To Book Bus" });
  }
};
module.exports = bus_booking;
