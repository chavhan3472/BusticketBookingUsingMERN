import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Ct from "./Context";
import "../App.css";
function Nav() {
  let obj = useContext(Ct);
  return (
    <nav className="bg-slate-900 text-white px-4 py-3 md:px-6 md:py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-lg md:text-xl font-bold mb-2 md:mb-0">BusWay</div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center text-sm md:text-base">
        {obj.data.token === "" ? (
          <>
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link
              to="/login"
              className="hover:text-amber-400 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:text-amber-400 transition-colors"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            {obj.data.role === "admin" && (
              <>
                <Link
                  to="/addbus"
                  className="hover:text-amber-400 transition-colors"
                >
                  Add Bus
                </Link>

                <Link
                  to="/allbooking"
                  className="hover:text-amber-400 transition-colors"
                >
                  All Booking
                </Link>
                <Link
                  to="/showbooking"
                  className="hover:text-amber-400 transition-colors"
                >
                  Yourbuses
                </Link>
              </>
            )}
            {obj.data.role === "user" && (
              <>
                <Link
                  to="/buslist"
                  className="hover:text-amber-400 transition-colors"
                >
                  Bus List
                </Link>
                <Link
                  to="/seatselection"
                  className="hover:text-amber-400 transition-colors"
                >
                  Booking Section
                </Link>
                <Link
                  to="/booking"
                  className="hover:text-amber-400 transition-colors"
                >
                  Booking History
                </Link>
              </>
            )}
            <Link
              to="/logout"
              className="bg-amber-400 text-slate-900 px-3 py-1 rounded hover:bg-amber-300 transition-colors"
            >
              Logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
