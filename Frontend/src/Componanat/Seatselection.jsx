import { useContext, useState } from "react";
import Ct from "./Context";
import "./Seatselection.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Seatselection() {
  let navigate = useNavigate();
  let obj = useContext(Ct);
  let [msg, updmsg] = useState("“बस कुछ clicks दूर है आपकी अगली यात्रा!”");
  let [data, updData] = useState({
    user_email: "",
    bus_id: "",
    book_date: "",
    booked_seats: "",
    trave_date: "",
    ticket_price: "",
    start_from: "",
    end_point: "",
  });
  let login_data = (e) => {
    updData({ ...data, [e.target.name]: e.target.value });
  };
  // let bookticket = () => {
  //   axios
  //     .post("http://localhost:5000/booking", data)
  //     .then((res) => {
  //       if (res.data.msg === "Booking Sucessful") {
  //         updmsg(
  //           `🎉 Booking Confirmed!${obj.data.user_name} आपकी यात्रा अब ready है 🚍`,
  //         );
  //         setTimeout(() => {
  //           navigate("/buslist");
  //         }, 5000);
  //         // navigate("/buslist");
  //       }
  //     })
  //     .catch((error) => {
  //       updmsg(res.data.msg);
  //     });
  // };
  let [loading, setLoading] = useState(false); // loading state
  let bookticket = () => {
    setLoading(true);
    updmsg("Booking Processing... ⏳");

    axios
      .post("http://localhost:5000/booking", data)
      .then((res) => {
        setLoading(false);
        if (res.data.msg === "Booking Sucessful") {
          updmsg(
            `🎉 Booking Confirmed! ${obj.data.user_name} आपकी यात्रा अब ready है 🚍`,
          );
          setTimeout(() => {
            navigate("/buslist");
          }, 5000);
        } else {
          updmsg("Booking Failed ❌ Try again");
        }
      })
      .catch((err) => {
        setLoading(false);
        updmsg("Error! कृपया बाद में कोशिश करें ⚠️");
        console.error(err);
      });
  };
  useEffect(() => {
    let get_cookies = Cookies.get("login_data");
    if (!get_cookies) {
      navigate("/");
    } else {
      let user = JSON.parse(get_cookies);
      obj.updfun(user);
    }
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-100 p-5">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-slate-900">
        {msg}
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter Your Email"
          name="user_email"
          value={data.user_email}
          onChange={login_data}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <label className="text-gray-700 font-medium">Booking Date</label>
        <input
          type="date"
          name="book_date"
          value={data.book_date}
          onChange={login_data}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Enter Bus ID"
          name="bus_id"
          value={data.bus_id}
          onChange={login_data}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Enter Seat No"
          name="booked_seats"
          value={data.booked_seats}
          onChange={login_data}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <label className="text-gray-700 font-medium">Travel Date</label>
        <input
          type="date"
          name="trave_date"
          value={data.trave_date}
          onChange={login_data}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Enter Ticket Price"
          name="ticket_price"
          value={data.ticket_price}
          onChange={login_data}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Start from "
          name="start_from"
          value={data.start_from}
          onChange={login_data}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder=" Your Destination "
          name="end_point"
          value={data.end_point}
          onChange={login_data}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={bookticket}
          disabled={loading}
          className={`mt-4 w-full py-3 rounded-xl font-semibold text-white transition-transform ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500 hover:scale-105"
          }`}
        >
          {loading ? "Booking Processing..." : "Book Now"}
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
    // <div className="booking-seat">
    //   <h1>{msg}</h1>
    //   <div className="seatbookingform">
    //     <input
    //       type="text"
    //       placeholder="Enter Your Email"
    //       name="user_email"
    //       value={data.user_email}
    //       onChange={login_data}
    //     />
    //     <label>Booking Date</label>
    //     <input
    //       type="Date"
    //       placeholder="Enter Booking Date"
    //       name="book_date"
    //       onChange={login_data}
    //       value={data.book_date}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Enter Bus_Id"
    //       name="bus_id"
    //       onChange={login_data}
    //       value={data.bus_id}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Enter Seat No"
    //       name="booked_seats"
    //       onChange={login_data}
    //       value={data.booked_seats}
    //     />
    //     <label>Travel Date</label>
    //     <input
    //       type="Date"
    //       placeholder="Enter Seat No"
    //       name="trave_date"
    //       onChange={login_data}
    //       value={data.trave_date}
    //     />
    //     <button onClick={bookticket}>BookNow</button>
    //   </div>
    //   {/* <button onClick={bookticket}>BookNow</button> */}
    // </div>
  );
}

export default Seatselection;
