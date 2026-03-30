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

      axios
        .get("https://busticketbookingusingmern.onrender.com/allbooking")
        .then((res) => {
          console.log(res.data, "This The Backend Data ");
          updBooking_data(res.data);
        })
        .catch(() => {
          updBooking_data([]);
        });
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 min-h-screen p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl text-white font-bold mb-8 text-center">
        {msg}
      </h1>
      <div className="md:hidden space-y-4">
        {booking_data.length === 0 ? (
          <div className="text-white text-center">No Booking Found</div>
        ) : (
          booking_data.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-lg">
              <h2 className="text-lg font-bold text-indigo-700 mb-2">
                {book.bus_name}
              </h2>

              <p>
                <b>Bus ID:</b> {book.bus_id}
              </p>
              <p>
                <b>Route:</b> {book.start_from} → {book.end_point}
              </p>
              <p>
                <b>Departure:</b> {book.depature_time}
              </p>
              <p>
                <b>Arrival:</b> {book.arrival_time}
              </p>
              <p>
                <b>Seats:</b> {book.totalseat}
              </p>
              <p className="text-green-600 font-semibold">
                ₹{book.ticket_price}
              </p>
              <p>
                <b>Type:</b> {book.bus_type}
              </p>
            </div>
          ))
        )}
      </div>
      <div className="hidden md:flex justify-center">
        {booking_data.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-2xl p-10 text-center text-gray-600">
            No Booking Found
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow-2xl inline-block">
            <table className="min-w-[900px] w-full text-sm text-left">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-3">Bus ID</th>
                  <th className="px-6 py-3">UserEmail</th>
                  <th className="px-6 py-3">From</th>
                  <th className="px-6 py-3">To</th>
                  <th className="px-6 py-3">Departure</th>
                  <th className="px-6 py-3">Arrival</th>
                  <th className="px-6 py-3">Seats</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">BookingDate</th>
                </tr>
              </thead>

              <tbody>
                {booking_data.map((book, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-slate-100 transition"
                  >
                    <td className="px-6 py-3">{book.bus_id}</td>
                    <td className="px-6 py-3">{book.user_email}</td>
                    <td className="px-6 py-3">{book.start_from}</td>
                    <td className="px-6 py-3">{book.end_point}</td>
                    <td className="px-6 py-3">{book.depature_time}</td>
                    <td className="px-6 py-3">{book.arrival_time}</td>
                    <td className="px-6 py-3">{book.booked_seats}</td>
                    <td className="px-6 py-3 text-green-600 font-semibold">
                      ₹{book.ticket_price}
                    </td>
                    <td className="px-6 py-3">
                      {new Date(book.book_date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllBooking;
