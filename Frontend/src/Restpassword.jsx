import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [msg, setMsg] = useState("");
  let [f, setF] = useState(false);
  let [otp, setOtp] = useState("");
  let [npwd, setNpwd] = useState("");
  let [c, setC] = useState(300);
  let [iid, setIid] = useState(null);
  let sendotp = () => {
    if (!email) {
      setMsg("Enter Email First");
      return;
    }

    axios
      .post(`http://localhost:5000/sendotp/${email}`)
      .then((res) => {
        setMsg(res.data.msg);

        if (res.data.msg === "otp sent") {
          setF(true);

          let intervalId = setInterval(() => {
            setC((prev) => prev - 1);
          }, 1000);

          setIid(intervalId);

          setTimeout(() => {
            setF(false);
            clearInterval(intervalId);
            setC(300);
          }, 300000);
        }
      })
      .catch((err) => {
        console.log(err);
        setMsg("Error sending OTP");
      });
  };

  let resetPassword = () => {
    if (!otp || !npwd) {
      setMsg("Fill all fields");
      return;
    }

    axios
      .post("http://localhost:5000/resetpassword", {
        user_email: email,
        otp: otp,
        user_password: npwd,
      })
      .then((res) => {
        if (res.data.msg === "password reset successful") {
          setMsg(res.data.msg);
          clearInterval(iid);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          setMsg(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        setMsg("Error resetting password");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center text-amber-400">
          Reset Password 🔐
        </h1>

        <h2 className="text-center text-red-400">{msg}</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly={f}
          className="p-3 rounded-lg bg-slate-700 outline-none"
        />
        {!f && (
          <button
            onClick={sendotp}
            className="bg-amber-400 text-black py-2 rounded-lg font-semibold hover:bg-amber-300"
          >
            Send OTP
          </button>
        )}

        {f && (
          <h2 className="text-center text-green-400">
            ⏳ {parseInt(c / 60)}:{c % 60 < 10 ? "0" + (c % 60) : c % 60}
          </h2>
        )}
        {f && (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="p-3 rounded-lg bg-slate-700 outline-none"
          />
        )}

        {f && (
          <input
            type="password"
            placeholder="Enter New Password"
            value={npwd}
            onChange={(e) => setNpwd(e.target.value)}
            className="p-3 rounded-lg bg-slate-700 outline-none"
          />
        )}
        {f && (
          <button
            onClick={resetPassword}
            className="bg-green-500 py-2 rounded-lg font-semibold hover:bg-green-400"
          >
            Reset Password
          </button>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
