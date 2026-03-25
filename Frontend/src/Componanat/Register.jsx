import React from "react";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
function Register() {
  let [msg, updMsg] = useState("Welcome to Booking My Bus Ticket");
  let [data, updData] = useState({
    user_name: "",
    user_email: "",
    user_phno: "",
    user_password: "",
  });

  let handleRegister = () => {
    if (
      !data.user_name ||
      !data.user_email ||
      !data.user_phno ||
      !data.user_password
    ) {
      updMsg("Please Fill All The Fields");
      return;
    }
    axios
      .post("http://localhost:5000/userregistration", data)
      .then((res) => {
        if (res.data.msg === "Account Created Sucessfully") {
          updData({
            user_name: "",
            user_email: "",
            user_phno: "",
            user_password: "",
          });
          updMsg("🚌Account Created Successfully");
          setTimeout(() => {
            updMsg("🚌Redirecting to Login Page...");
          }, 2000);
          // updMsg("Redirecting to Login Page...");
          setTimeout(() => {
            window.location.href = "/login";
          }, 4000);
        } else {
          updMsg(res.data.msg); // Display the error message from the servers
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Registration failed. Please try again.");
      });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-sky-400 to-blue-700 p-5">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-10 text-center drop-shadow-lg">
        {msg}
      </h1>

      <div className="bg-white/95 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col gap-5 w-full max-w-sm transition-transform hover:scale-105 hover:shadow-2xl">
        <input
          type="text"
          placeholder="Name"
          value={data.user_name}
          onChange={(e) => updData({ ...data, user_name: e.target.value })}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="email"
          placeholder="Email"
          value={data.user_email}
          onChange={(e) => updData({ ...data, user_email: e.target.value })}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={data.user_phno}
          onChange={(e) => updData({ ...data, user_phno: e.target.value })}
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
          onClick={handleRegister}
          className="bg-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-orange-400 hover:scale-105 transition-transform mt-2"
        >
          Register
        </button>
      </div>
      <section className="py-16 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <img
              src="/images/photo-1544620347-c4fd4a3d5957.avif"
              alt="Fast Booking"
              className="rounded-lg mb-3"
            />
            <h3 className="text-amber-400 font-bold text-lg">Fast Booking</h3>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <img
              src="/images/photo-1603521801204-8d9c70dd08c8.avif"
              alt="Comfort Travel"
              className="rounded-lg mb-3"
            />
            <h3 className="text-amber-400 font-bold text-lg">Comfort Travel</h3>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <img
              src="/images/premium_photo-1661540889781-03422cc0fa99.avif"
              alt="Affordable"
              className="rounded-lg mb-3"
            />
            <h3 className="text-amber-400 font-bold text-lg">
              Affordable Price
            </h3>
          </div>
        </div>
      </section>
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
            <p className="text-gray-300">Phone: +91 9876543210</p>
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
    // <div className="registermain">
    //   <div className="registersub">
    //     <h1>{msg}</h1>
    //     <input
    //       type="text"
    //       placeholder="Name"
    //       value={data.user_name}
    //       onChange={(e) => updData({ ...data, user_name: e.target.value })}
    //     />
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={data.user_email}
    //       onChange={(e) => updData({ ...data, user_email: e.target.value })}
    //     />
    //     <input
    //       type="tel"
    //       placeholder="Phone Number"
    //       value={data.user_phno}
    //       onChange={(e) => updData({ ...data, user_phno: e.target.value })}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={data.user_password}
    //       onChange={(e) => updData({ ...data, user_password: e.target.value })}
    //     />
    //   </div>
    //   <button onClick={handleRegister}>Register</button>
    // </div>
  );
}

export default Register;
