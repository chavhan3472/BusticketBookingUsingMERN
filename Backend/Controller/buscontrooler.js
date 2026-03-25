const bus_data = require("../model/busmodel");
let multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Busimg");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1],
    );
  },
});

const upload = multer({ storage: storage });

let bus_add = async (req, res) => {
  console.log(req.body);
  console.log(req.body.bus_name, "This The Req body Data");
  try {
    let data = new bus_data({ ...req.body, bus_img: req.file.filename });
    await data.save();
    res.json({ msg: "Bus Added Suceesfully" });
  } catch (error) {
    console.log(error, "This The Error");
    res.json({ msg: "Failed To Add Bus Data " });
  }
};

let bus_update = async (req, res) => {
  console.log(req.body);
  try {
    await bus_data.findOneAndUpdate({ bus_id: req.body.bus_id }, req.body);
    res.json({ msg: "Bus Updated Sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Failed To Update Bus Data" });
  }
};

module.exports = { bus_add, upload, bus_update };
