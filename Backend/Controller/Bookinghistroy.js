let booking_data = require("../model/bookingmodel");

// let booking_history = async (req, res) => {
//   try {
//     let obj = await booking_data.findOne({ user_email: req.params.user_email });
//     if (obj) {
//       res.json({ msg: "Booking Found", booking_data: obj });
//     } else {
//       res.json({ msg: "No Booking Found" });
//     }
//   } catch {
//     res.json({ msg: "Failed To getting Booking Deatils" });
//   }
// };
// module.exports = booking_history;

let booking_history = async (req, res) => {
  try {
    let obj = await booking_data.find({ user_email: req.params.user_email });
    if (obj && obj.length > 0) {
      res.json({ msg: "Booking Found", booking_data: obj });
    } else {
      res.json({ msg: "No Booking Found", booking_data: [] });
    }
  } catch (err) {
    res.json({ msg: "Failed To get Booking Details", booking_data: [] });
  }
};
let all_booking = async (req, res) => {
  try {
    let data = await booking_data.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.json({ msg: "Failed To Get Booking Data" });
  }
};
module.exports = { booking_history, all_booking };
