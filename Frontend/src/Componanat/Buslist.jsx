import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Ct from "./Context";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./Buslist.css";

function Buslist() {
  let navigate = useNavigate();
  let obj = useContext(Ct);

  let [search, setSearch] = useState("");
  let [searchDate, setSearchDate] = useState(""); // ✅ ADDED
  let [data, updData] = useState([]);

  useEffect(() => {
    let get_cookies = Cookies.get("login_data");
    if (!get_cookies) {
      navigate("/");
    } else {
      obj.updfun(JSON.parse(get_cookies));
      console.log(obj.updfun, "This The Coookies Data");
    }

    axios
      .get("http://localhost:5000/allbuslist")
      .then((res) => {
        console.log(res.data, "This Is The Data");
        updData(res.data);
      })
      .catch((error) => {
        console.log(error, "This The Data");
      });
  }, []);

  let book_button = () => {
    navigate("/seatselection");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-5">
      {/* Welcome heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-amber-400">
        Welcome 🙋‍♀️ <span className="text-sky-400">{obj.data.user_name}</span>
      </h1>

      {/* Search Box + Date Filter */}
      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by bus, from, to..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 rounded-xl border border-slate-700 bg-slate-800 text-white shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
        />

        <input
          type="date"
          onChange={(e) => setSearchDate(e.target.value)}
          className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700"
        />
      </div>

      {/* Bus Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data
          .filter((bus) => {
            let busDate = new Date(bus.travel_date).toLocaleDateString(
              "en-CA",
              {
                timeZone: "Asia/Kolkata",
              },
            );

            return (
              (bus.bus_name?.toLowerCase().includes(search.toLowerCase()) ||
                bus.start_from?.toLowerCase().includes(search.toLowerCase()) ||
                bus.end_point?.toLowerCase().includes(search.toLowerCase())) &&
              (searchDate === "" || busDate === searchDate)
            );
          })
          .map((bus, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={`http://localhost:5000/Busimg/${bus.bus_img}`}
                alt="bus"
                className="w-full h-48 object-cover"
              />

              <div className="p-5 flex flex-col gap-2 text-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-amber-400 text-slate-900 px-2 py-1 rounded font-semibold text-sm">
                    {bus.bus_type || "AC / Sleeper"}
                  </span>
                  <span className="text-sm text-slate-300">
                    ⭐ {bus.rating || "4.5"}
                  </span>
                </div>

                <h2 className="text-xl font-semibold">{bus.bus_name}</h2>

                <p className="text-gray-300">
                  <span className="font-semibold">BusID:</span> {bus.bus_id}
                </p>

                <p className="text-green-400 font-medium">
                  🟢 From: {bus.start_from}
                </p>

                <p className="text-red-400 font-medium">
                  🔴 To: {bus.end_point}
                </p>

                <p className="text-gray-300">
                  🕒 Departure: {bus.depature_time}
                </p>

                <p className="text-gray-300">🕒 Arrival: {bus.arrival_time}</p>

                <p className="text-gray-300">💺 Seats: {bus.totalseat}</p>

                <p className="text-orange-400 font-semibold">
                  Ticket Price: ₹{bus.ticket_price}
                </p>

                <p className="text-orange-400 font-semibold">
                  Travel Date:{" "}
                  {new Date(bus.travel_date).toLocaleDateString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>

                <button
                  onClick={book_button}
                  className="mt-3 bg-amber-400 text-slate-900 py-2 rounded-xl font-semibold shadow-md hover:bg-amber-300 hover:scale-105 transition-transform"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Buslist;
