import React, { useContext, useEffect, useState } from "react";
import Ct from "./Context";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Showbooking() {
  let [isedit, updIsedit] = useState(false);
  let navigate = useNavigate();
  let [bus_data, updBus_data] = useState([]);
  let [flag, updFlag] = useState(false);
  let obj = useContext(Ct);
  let [msg, updMsg] = useState("Buses");
  let [updated_data, setUpdatedData] = useState({
    bus_id: "",
    start_from: "",
    end_point: "",
    depature_time: "",
    arrival_time: "",
    ticket_price: "",
  });
  let submitbusdata = (e) => {
    setUpdatedData({
      ...updated_data,
      [e.target.name]: e.target.value,
    });
  };
  const openEdit = (bus) => {
    setUpdatedData(bus);
    updIsedit(true);
  };
  const updateFinal = async () => {
    try {
      await axios
        .put(
          `http://localhost:5000/updatebus/${updated_data.bus_id}`,
          updated_data,
        )
        .then((res) => {
          console.log(res.data.msg);
        })
        .catch((error) => {
          console.log(error, "this the error");
        });

      updIsedit(false);

      const res = await axios.get("http://localhost:5000/allbuslist");
      updBus_data(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  let dealte_bus = (bus_id) => {
    axios
      .delete(`http://localhost:5000/dealtebus/${bus_id}`)
      .then((res) => {
        if (res.data.msg === "Bus Deleted Successfully") {
          updFlag(!flag);
        }
      })
      .catch((error) => {
        console.log(error, "This The Error");
      });
  };
  useEffect(() => {
    let get_cookies = Cookies.get("login_data");
    if (!get_cookies) {
      navigate("/");
    } else {
      let user = JSON.parse(get_cookies);
      obj.updfun(user);
      navigate("/showbooking");

      axios.get("http://localhost:5000/allbuslist").then((res) => {
        updBus_data(res.data);
        updMsg(res.data[0]?.bus_name);
      });
    }
  }, [flag]);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 min-h-screen p-8">
      <h1 className="text-4xl md:text-5xl text-white font-bold mb-12 text-center drop-shadow-lg">
        {msg}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bus_data.length === 0 ? (
          <p className="text-center text-white col-span-full">No buses found</p>
        ) : (
          bus_data.map((bus, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl hover:scale-105 transform transition duration-300 overflow-hidden"
            >
              <img
                src={
                  bus.bus_img
                    ? `http://localhost:5000/Busimg/${bus.bus_img}`
                    : "https://via.placeholder.com/400x200?text=No+Image"
                }
                alt={bus.bus_name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-white">
                <h2 className="text-2xl font-semibold mb-2 drop-shadow-md">
                  {bus.bus_name}
                </h2>

                <p className="text-sm mb-1">
                  Bus_id: <span className="font-medium">{bus.bus_id}</span>
                </p>

                <p className="text-sm mb-1">
                  From: <span className="font-medium">{bus.start_from}</span>
                </p>

                <p className="text-sm mb-1">
                  To: <span className="font-medium">{bus.end_point}</span>
                </p>

                <p className="text-sm mb-1">
                  Departure:{" "}
                  <span className="font-medium">{bus.depature_time}</span>
                </p>

                <p className="text-sm mb-1">
                  Arrival:{" "}
                  <span className="font-medium">{bus.arrival_time}</span>
                </p>

                <p className="text-sm mb-1">
                  Total Seats:{" "}
                  <span className="font-medium">{bus.totalseat}</span>
                </p>

                <p className="text-lg mb-2 font-bold text-green-400">
                  ₹{bus.ticket_price}
                </p>

                <span className="inline-block bg-blue-600/40 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Bus Type:
                  {bus.bus_type.toUpperCase()}
                </span>
                <span className="inline-block bg-blue-600/40 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Date Of Journey:{" "}
                  {new Date(bus.travel_date).toLocaleDateString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <div className="mt-4 flex justify-between gap-4">
                  <button
                    onClick={() => openEdit(bus)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl font-medium shadow-md transition"
                  >
                    Update Bus
                  </button>

                  <button
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl font-medium shadow-md transition"
                    onClick={() => dealte_bus(bus.bus_id)}
                  >
                    Delete Bus
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Edit Form Placeholder */}
      {isedit && (
        <div className="bg-white/95 rounded-2xl shadow-2xl p-8 md:p-10 max-w-md mx-auto mt-10">
          <h1 className="text-2xl font-bold mb-6 text-center">Update Bus</h1>

          <div className="flex flex-col gap-4">
            <input
              name="bus_id"
              value={updated_data.bus_id}
              onChange={submitbusdata}
              className="p-3 border"
            />

            <input
              name="start_from"
              value={updated_data.start_from}
              onChange={submitbusdata}
              className="p-3 border"
            />

            <input
              name="end_point"
              value={updated_data.end_point}
              onChange={submitbusdata}
              className="p-3 border"
            />

            <input
              name="depature_time"
              value={updated_data.depature_time}
              onChange={submitbusdata}
              className="p-3 border"
            />

            <input
              name="arrival_time"
              value={updated_data.arrival_time}
              onChange={submitbusdata}
              className="p-3 border"
            />

            <input
              name="ticket_price"
              value={updated_data.ticket_price}
              onChange={submitbusdata}
              className="p-3 border"
            />

            <div className="flex gap-4">
              <button
                onClick={() => updIsedit(false)}
                className="flex-1 bg-gray-500 text-white py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={updateFinal}
                className="flex-1 bg-orange-500 text-white py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Showbooking;
