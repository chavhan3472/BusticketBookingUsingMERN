const bus_data = require("../model/busmodel");

let bus_list = async (req, res) => {
  try {
    let data = await bus_data.find();
    res.json(data);
  } catch {
    res.json({ msg: "Failed To  Getting The Bus Data" });
  }
};
module.exports = bus_list;
