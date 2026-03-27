import axios from "axios";
import "./Login.css";
import { useContext, useState } from "react";
import Cookies from "js-cookie";
import Ct from "./Context";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  let obj = useContext(Ct);
  let [data, updData] = useState({
    user_email: "",
    user_password: "",
  });

  let [msg, updMsg] = useState("Welcome to Booking My Bus Ticket");
  let loginbutton = () => {
    axios.post("http://localhost:5000/userlogin", data).then((res) => {
      if (res.data.token === undefined) {
        updMsg("Invalid Email or Password");
      } else {
        Cookies.set("login_data", JSON.stringify(res.data), { expires: 7 });
        obj.updfun(res.data);

        console.log(res.data.role, "This Is the Data");
        window.alert("Login Success");
        console.log("sdggg", obj.data);

        res.data.role === "admin" ? navigate("/addbus") : navigate("/buslist");
      }
    });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-sky-400 to-blue-700 p-5">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-10 text-center drop-shadow-lg">
        {msg}
      </h1>

      <div className="bg-white/95 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col gap-6 w-full max-w-sm transition-transform hover:scale-105 hover:shadow-2xl">
        <input
          type="email"
          placeholder="Email"
          value={data.user_email}
          onChange={(e) => updData({ ...data, user_email: e.target.value })}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={data.user_password}
          onChange={(e) => updData({ ...data, user_password: e.target.value })}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <button
          onClick={loginbutton}
          className="bg-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-orange-400 hover:scale-105 transition-transform"
        >
          Login
        </button>
      </div>
      <footer className="bg-slate-900 text-white py-12 mt-16 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg mb-3 border-b border-slate-700 pb-1 inline-block">
              About Us
            </h4>
            <p className="text-gray-300">
              Book My Bus Ticket is your trusted platform for fast, easy, and
              secure bus bookings. Plan your journey with confidence and
              comfort.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3 border-b border-slate-700 pb-1 inline-block">
              Contact Us
            </h4>
            <p className="text-gray-300">Email: support@busbooking.com</p>
            <p className="text-gray-300">Phone: +91 9921910984</p>
            <p className="text-gray-300 mt-2">Mon-Fri: 9am - 6pm</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3 border-b border-slate-700 pb-1 inline-block">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Bus Booking App. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default Login;
