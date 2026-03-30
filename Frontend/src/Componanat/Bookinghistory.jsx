import React, { useContext, useEffect, useState } from "react";
import Ct from "./Context";
import Cookies from "js-cookie";
import axios from "axios";
import "./Bookinghistory.css";
import { useNavigate } from "react-router-dom";
function Bookinghistory() {
  let obj = useContext(Ct);
  let [api_data, updData] = useState([]);
  let navigate = useNavigate();
  let [msg, updmsg] = useState("");
  useEffect(() => {
    let get_cookies = Cookies.get("login_data");
    if (!get_cookies) {
      navigate("/");
    } else {
      let user = JSON.parse(get_cookies);
      obj.updfun(user);
      axios
        .get(
          `https://busticketbookingusingmern.onrender.com/bookinghistroy/${user.user_email}`,
        )

        .then((res) => {
          console.log(res.data, "This The Booking Data");
          console.log(res.data.boking_data);
          if (res.data.msg === "Booking Found") {
            updmsg("Your Booking History");

            console.log(res.data, "This The Booking Data");
            updData(res.data.booking_data);
          } else {
            updmsg("Booking Not Found");
          }
        })
        .catch((eror) => {
          console.log(eror);
        });
    }
  }, []);
  return (
    <div className="bookingDataContainer p-6 bg-gray-100 min-h-screen">
      {api_data === undefined || api_data.length === 0 ? (
        <h1 className="text-center text-gray-500 text-xl font-medium mt-10">
          {msg}
        </h1>
      ) : (
        api_data.map((booking) => (
          <div
            key={booking._id || booking.bus_id}
            className="booking-card bg-white shadow-lg rounded-lg p-5 mb-4 hover:shadow-xl transition-shadow duration-300"
          >
            <h1 className="text-blue-600 font-semibold text-lg mb-2">{msg}</h1>
            <p>
              <span className="font-medium">Date:</span>{" "}
              {new Date(booking.book_date).toLocaleDateString()}
            </p>
            <p>
              <span className="font-medium">Seats:</span> {booking.booked_seats}
            </p>
            <p>
              <span className="font-medium">Bus ID:</span> {booking.bus_id}
            </p>
            <p>
              <span className="font-medium">User:</span> {booking.user_email}
            </p>
            <p>
              <span className="font-medium">Ticket Price:</span>{" "}
              {booking.ticket_price}
            </p>
            <p>
              <span className="font-medium">From:</span> {booking.start_from}
            </p>
            <p>
              <span className="font-medium">To:</span> {booking.end_point}
            </p>
          </div>
        ))
      )}
      <footer className="bg-slate-900 text-white py-12 mt-16 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Us */}
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

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-lg mb-3 border-b border-slate-700 pb-1 inline-block">
              Contact Us
            </h4>
            <p className="text-gray-300">Email: support@busbooking.com</p>
            <p className="text-gray-300">Phone: +91 9876543210</p>
            <p className="text-gray-300 mt-2">Mon-Fri: 9am - 6pm</p>
          </div>

          {/* Follow Us */}
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

export default Bookinghistory;
