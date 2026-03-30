let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let user_data = require("../model/usermodel");
let { sendOtpMail } = require("../utils/sendMail");
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

let send_otp = async (req, res) => {
  try {
    let email = req.params.user_email;

    let obj = await user_data.findOne({ user_email: email });

    if (obj) {
      let otp = Math.floor(1000 + Math.random() * 9000).toString();

      console.log(otp);

      await user_data.updateOne({ user_email: email }, { $set: { otp: otp } });

      await sendOtpMail(email, otp);

      res.json({ msg: "otp sent" });
    } else {
      res.json({ msg: "invalid email" });
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: "failed to send otp" });
  }
};

let reset_password = async (req, res) => {
  try {
    let obj = await user_data.findOne({
      user_email: req.body.user_email,
    });

    if (obj) {
      if (obj.otp !== req.body.otp) {
        return res.json({ msg: "Invalid OTP" });
      }

      let securepassword = await bcrypt.hash(req.body.user_password, 10);

      await user_data.updateOne(
        { user_email: req.body.user_email },
        {
          $set: {
            user_password: securepassword,
            otp: "",
          },
        },
      );

      res.json({ msg: "Password Reset Successfully" });
    } else {
      res.json({ msg: "Please Enter Valid Email" });
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: "Failed To Reset Password" });
  }
};

module.exports = { user_registartion, user_login, send_otp, reset_password };
