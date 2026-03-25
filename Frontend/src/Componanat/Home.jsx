import React, { use } from "react";
import "../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Home() {
  let navigate = useNavigate();
  let images = [
    "/images/Golden tour bus at sunset.png",
    "/images/photo-1544620347-c4fd4a3d5957.avif",
    "/images/photo-1603521801204-8d9c70dd08c8.avif",
    "/images/premium_photo-1661540889781-03422cc0fa99.avif",
    "/images/premium_photo-1682096348418-dbef9b1d0add.avif",
    "/images/premium_photo-1716999413626-19db20a0d2f0.avif",
  ];
  let [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    let get_cookies = Cookies.get("login_data");
    if (get_cookies) {
      let cookies_data = JSON.parse(get_cookies);
      if (cookies_data.role === "admin") {
        navigate("/addbus");
      }
      if (cookies_data.role === "user") {
        navigate("/buslist");
      }
    }
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(randomIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  let click_function = () => {
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-16 text-center overflow-hidden">
        <img
          src={images[currentImage]}
          alt="Bus Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Travel Smarter, <span className="text-amber-400">Book Faster</span>
          </h1>
          <p className="text-slate-300 text-lg mb-6">
            Find and book bus tickets to thousands of destinations. Compare
            prices, check schedules, and travel with confidence.
          </p>

          {/* Search Form */}
          <div className="bg-slate-800/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-slate-700 shadow-2xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="From"
                className="rounded-xl px-4 py-3 w-full bg-slate-700 border border-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="text"
                placeholder="To"
                className="rounded-xl px-4 py-3 w-full bg-slate-700 border border-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="date"
                className="rounded-xl px-4 py-3 w-full bg-slate-700 border border-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <button
              onClick={click_function}
              className="mt-4 w-full md:w-auto px-8 py-3 bg-amber-400 text-slate-900 font-bold rounded-xl hover:bg-amber-300 transition"
            >
              Search Buses
            </button>
          </div>
        </div>
      </section>

      {/* Services Cards */}
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

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose BusWay?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Experience the most convenient way to book bus travel with
              unmatched benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Secure Booking */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-amber-400 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-amber-400 group-hover:text-slate-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">
                Secure Booking
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your payment and personal data are protected with bank-level
                encryption
              </p>
            </div>

            {/* Instant Confirmation */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-teal-400/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-teal-400 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-teal-400 group-hover:text-slate-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">
                Instant Confirmation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Get your e-ticket immediately after booking via email and SMS
              </p>
            </div>

            {/* Best Prices */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-rose-400/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-rose-400 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-rose-400 group-hover:text-slate-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">
                Best Prices
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Compare fares from multiple operators and find the best deals
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-violet-400/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-violet-400 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-violet-400 group-hover:text-slate-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">
                24/7 Support
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our customer service team is always ready to help you anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Popular Routes
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Explore our most traveled destinations with comfortable buses and
              affordable prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* New York → Boston */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=400&fit=crop"
                  alt="New York"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="font-heading font-bold text-lg">
                      Mumbai
                    </span>
                    <svg
                      className="w-6 h-6 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                    <span className="font-heading font-bold text-lg">Pune</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-500 text-sm">
                    4h 30min • Daily
                  </span>
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-sm">From</span>
                    <span className="text-2xl font-heading font-bold text-slate-900 ml-2">
                      ₹750
                    </span>
                  </div>
                  <button
                    onClick={click_function}
                    className="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-amber-400 hover:text-slate-900 transition-colors font-medium"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Los Angeles → San Francisco */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618805714320-f8825019c1be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Los Angeles"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="font-heading font-bold text-lg">
                      Pusad
                    </span>
                    <svg
                      className="w-6 h-6 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                    <span className="font-heading font-bold text-lg">Pune</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-500 text-sm">
                    6h 15min • Daily
                  </span>
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-sm">From</span>
                    <span className="text-2xl font-heading font-bold text-slate-900 ml-2">
                      ₹1150
                    </span>
                  </div>
                  <button
                    onClick={click_function}
                    className="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-amber-400 hover:text-slate-900 transition-colors font-medium"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Yavatmal → Pune */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598434192043-71111c1b3f41?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Yavatmal"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="font-heading font-bold text-lg">
                      Yavatmal
                    </span>
                    <svg
                      className="w-6 h-6 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                    <span className="font-heading font-bold text-lg">Pune</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-500 text-sm">
                    5h 30min • Daily
                  </span>
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-sm">From</span>
                    <span className="text-2xl font-heading font-bold text-slate-900 ml-2">
                      ₹1650
                    </span>
                  </div>
                  <button
                    onClick={click_function}
                    className="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-amber-400 hover:text-slate-900 transition-colors font-medium"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
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

          {/* Contact Us */}
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
    // <div className="homemaindiv">
    //   <div className="homeimagecointainer">
    //     <h1 className="text-red-500 text-3xl">Test</h1>
    //     <img
    //       src={images[currentImage]}
    //       alt={`Image ${currentImage}`}
    //       className="homeimage"
    //     />
    //     <h1 className="homeheadinh1">Book my Bus Ticket</h1>
    //     <span className="homespantag">Your Journey Begins Here 🚍</span>
    //   </div>
    //   <div className="homemaincontent">
    //     <input type="text" placeholder="From..." className="inputfiledhome" />
    //     <input type="text" placeholder="To..." className="inputfiledhome" />
    //     <input type="date" placeholder="Date..." className="inputfiledhome" />
    //     <button className="searchbutton" onClick={click_function}>
    //       Search
    //     </button>
    //   </div>
    //   <span className="homspanmiddle">Our Services</span>
    //   <div className="headersection">
    //     <div className="inerimage">
    //       <img
    //         src="/images/Golden tour bus at sunset.png"
    //         alt="Bus Image"
    //         className="headerimage"
    //       />
    //       <h1 className="headersectionimgeheading">
    //         Travel Smart. Book Your Bus Instantly.
    //       </h1>
    //     </div>
    //     <div className="inerimage">
    //       <img
    //         src="/images/photo-1544620347-c4fd4a3d5957.avif"
    //         alt="Bus Image"
    //         className="headerimage"
    //       />
    //       <h1 className="headersectionimgeheading">
    //         Fast, Easy & Affordable Bus Booking
    //       </h1>
    //     </div>
    //     <div className="inerimage">
    //       <img
    //         src="/images/photo-1603521801204-8d9c70dd08c8.avif"
    //         alt="Bus Image"
    //         className="headerimage"
    //       />
    //       <h1 className="headersectionimgeheading">
    //         Experience Comfort on Every Journey
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="footersection">
    //     <div className="footercontent">
    //       <h2>About Us</h2>
    //       <p>
    //         Book My Bus Ticket is your trusted platform for fast and easy bus
    //         booking.
    //       </p>
    //     </div>

    //     <div className="footercontent">
    //       <h2>Contact Us</h2>
    //       <p>Email: support@busbooking.com</p>
    //       <p>Phone: +91 9876543210</p>
    //     </div>

    //     <div className="footercontent">
    //       <h2>Follow Us</h2>
    //       <p>Facebook</p>
    //       <p>Instagram</p>
    //       <p>Twitter</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Home;
