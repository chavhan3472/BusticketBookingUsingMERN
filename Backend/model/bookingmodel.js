let mongoose = require("mongoose");

let booking_schema = mongoose.Schema({
  user_email: String,
  bus_id: String,
  book_date: {
    type: Date,
    default: Date.now(),
  },
  booked_seats: String,
  trave_data: String,
  ticket_price: String,
  start_from: String,
  end_point: String,
});
booking_data = mongoose.model("booking_data", booking_schema);
module.exports = booking_data;
