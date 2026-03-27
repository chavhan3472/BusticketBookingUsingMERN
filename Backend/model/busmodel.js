let mongoose = require("mongoose");

let bus_schema = mongoose.Schema({
  bus_id: String,
  bus_name: String,
  start_from: String,
  end_point: String,
  depature_time: String,
  arrival_time: String,
  totalseat: Number,
  ticket_price: String,
  bus_img: String,
  bus_type: {
    type: String,
    default: "non-ac/slepper",
  },
  travel_date: {
    type: Date,
    required: true,
  },
});
let bus_data = mongoose.model("bus_data", bus_schema);
module.exports = bus_data;
