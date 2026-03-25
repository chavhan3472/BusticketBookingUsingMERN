import React, { useContext, useEffect, useState } from "react";
import Ct from "./Context";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AllBooking() {
  let [booking_data, updBooking_data] = useState([]);
  let navigate = useNavigate();
  let obj = useContext(Ct);
  let [msg, updMsg] = useState("All Bookings");

  useEffect(() => {
    let get_cookies = Cookies.get("login_data");
    if (!get_cookies) {
      navigate("/");
    } else {
      let user = JSON.parse(get_cookies);
      obj.updfun(user);
      navigate("/allbooking");

      axios.get("http://localhost:5000/allbooking").then((res) => {
        updBooking_data(res.data);
      });
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 min-h-screen p-8">
      <h1 className="text-4xl md:text-5xl text-white font-bold mb-10 text-center">
        {msg}
      </h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-2xl">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="px-6 py-3">Bus ID</th>
              <th className="px-6 py-3">Bus Name</th>
              <th className="px-6 py-3">From</th>
              <th className="px-6 py-3">To</th>
              <th className="px-6 py-3">Departure</th>
              <th className="px-6 py-3">Arrival</th>
              <th className="px-6 py-3">Seats</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Type</th>
            </tr>
          </thead>

          <tbody>
            {booking_data.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center py-6">
                  No Booking Found
                </td>
              </tr>
            ) : (
              booking_data.map((book, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-slate-100 transition"
                >
                  <td className="px-6 py-3">{book.bus_id}</td>
                  <td className="px-6 py-3">{book.bus_name}</td>
                  <td className="px-6 py-3">{book.start_from}</td>
                  <td className="px-6 py-3">{book.end_point}</td>
                  <td className="px-6 py-3">{book.depature_time}</td>
                  <td className="px-6 py-3">{book.arrival_time}</td>
                  <td className="px-6 py-3">{book.totalseat}</td>
                  <td className="px-6 py-3 text-green-600 font-semibold">
                    ₹{book.ticket_price}
                  </td>
                  <td className="px-6 py-3">{book.bus_type}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllBooking;
