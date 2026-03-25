let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let user_data = require("../model/usermodel");
let user_registartion = async (req, res) => {
  try {
    let obj = await user_data.findOne({ user_email: req.body.user_email });
    if (obj) {
      res.json({ msg: "User Alredy Exist Please Login" });
    } else {
      let securepassword = await bcrypt.hash(req.body.user_password, 10);
      let data = new user_data({
        ...req.body,
        user_password: securepassword,
      });
      await data.save();
      res.json({ msg: "Account Created Sucessfully" });
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: "Failed To Create Account" });
  }
};

let user_login = async (req, res) => {
  try {
    let obj = await user_data.findOne({ user_email: req.body.user_email });
    console.log(obj);
    if (obj) {
      let verfy_password = await bcrypt.compare(
        req.body.user_password,
        obj.user_password,
      );
      if (verfy_password) {
        res.json({
          token: jwt.sign({ user_email: obj.user_email }, "1234"),
          role: obj.role,
          user_name: obj.user_name,
          user_email: obj.user_email,
        });
      } else {
        res.json({ msg: "Please Enter Login Password" });
      }
    } else {
      res.json({ msg: "Please Enter Valid Email" });
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: "Failed To Login" });
  }
};
module.exports = { user_registartion, user_login };
