import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Ct from "./Context";
import axios from "axios";
function Addbus() {
  let obj = useContext(Ct);
  let navigate = useNavigate();
  let [msg, updMsg] = useState("Add Bus Here");
  let [data, updData] = useState({
    bus_id: "",
    bus_name: "",
    start_from: "",
    end_point: "",
    depature_time: "",
    arrival_time: "",
    totalseat: "",
    ticket_price: "",
    bus_img: "",
    bus_type: "",
    travel_date: "",
  });
  let submitbusdata = (e) => {
    updData({ ...data, [e.target.name]: e.target.value });
  };
  let busimg = (e) => {
    updData({ ...data, bus_img: e.target.files[0] });
  };
  let submitbus = () => {
    let form_data = new FormData();
    for (let key in data) {
      form_data.append(key, data[key]);
    }

    axios
      .post("https://busticketbookingusingmern.onrender.com/addbus", form_data)
      .then((res) => {
        if (res.data.msg) {
          updMsg(res.data.msg);
        }
        updData({
          bus_id: "",
          bus_name: "",
          start_from: "",
          end_point: "",
          depature_time: "",
          arrival_time: "",
          totalseat: "",
          ticket_price: "",
          bus_img: "",
          bus_type: "",
          travel_date: "",
        });
      });
  };
  useEffect(() => {
    let get_cookies = Cookies.get("login_data");
    console.log(get_cookies, "Get Cookies");
    if (!get_cookies) {
      navigate("/");
    } else {
      let user = JSON.parse(get_cookies);
      console.log(user, "This The User");
      obj.updfun(user);
      navigate("/addbus");
    }
  }, []);
  return (
    <div className="bg-white/95 rounded-2xl shadow-2xl p-8 md:p-10 max-w-md mx-auto mt-10 transition-transform hover:scale-105 hover:shadow-2xl">
      <h1 className="text-3xl md:text-4xl text-slate-900 font-bold mb-6 text-center drop-shadow-md">
        {msg}
      </h1>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Bus_ID"
          name="bus_id"
          value={data.bus_id}
          onChange={submitbusdata}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="text"
          placeholder="Enter Your Bus Name"
          name="bus_name"
          value={data.bus_name}
          onChange={submitbusdata}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="text"
          placeholder="Enter Your Bus Starting Point"
          name="start_from"
          value={data.start_from}
          onChange={submitbusdata}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="text"
          placeholder="Enter Your Bus Ending Point"
          name="end_point"
          value={data.end_point}
          onChange={submitbusdata}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="text"
          placeholder="Enter Your Bus Departure Time"
          name="depature_time"
          value={data.depature_time}
          onChange={submitbusdata}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="text"
          placeholder="Enter Your Bus Arrival Time"
          name="arrival_time"
          value={data.arrival_time}
          onChange={submitbusdata}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="text"
          placeholder="Enter How Many Seats In Your Bus"
          name="totalseat"
          value={data.totalseat}
          onChange={submitbusdata}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="text"
          placeholder="Enter Ticket Price Of Your Bus"
          name="ticket_price"
          value={data.ticket_price}
          onChange={submitbusdata}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="file"
          name="bus_img"
          onChange={busimg}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="text"
          placeholder="Enter Your Bus Type (AC/Non-AC, Sleeper/Non-Sleeper)"
          name="bus_type"
          value={data.bus_type}
          onChange={submitbusdata}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <label className="text-gray-700 font-medium">Travel Date</label>
        <input
          type="Date"
          placeholder="Enter Travel Data"
          name="travel_date"
          value={data.travel_date}
          onChange={submitbusdata}
          className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
        <button
          onClick={submitbus}
          className="bg-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-orange-400 hover:scale-105 transition-transform mt-2"
        >
          Upload Bus
        </button>
      </div>
    </div>
  );
}

export default Addbus;
