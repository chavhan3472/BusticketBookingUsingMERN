import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componanat/Home.jsx";
import Register from "./Componanat/Register.jsx";
import Login from "./Componanat/Login.jsx";
import Nav from "./Componanat/Nav";
import Ct from "./Componanat/Context";
import Logout from "./Componanat/Logout.jsx";
import Buslist from "./Componanat/Buslist.jsx";
import Seatselection from "./Componanat/Seatselection.jsx";
import Bookinghistory from "./Componanat/Bookinghistory.jsx";
import Addbus from "./Componanat/Addbus.jsx";
import Allbooking from "./Componanat/Allbooking.jsx";
import "./App.css";
import Showbooking from "./Componanat/Showbooking.jsx";
// import { route } from "../../Backend/Routes/router.js";
function App() {
  let [data, setData] = React.useState({
    token: "",
    role: "",
    user_name: "",
    user_email: "",
  });
  let updfun = (data) => {
    setData(data);
  };
  let obj = { data: data, updfun: updfun };
  return (
    <BrowserRouter>
      <Ct.Provider value={obj}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buslist" element={<Buslist />} />
          <Route path="/seatselection" element={<Seatselection />} />
          <Route path="/booking" element={<Bookinghistory />} />
          <Route path="/addbus" element={<Addbus />} />
          <Route path="/allbooking" element={<Allbooking />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/showbooking" element={<Showbooking />} />
        </Routes>
      </Ct.Provider>
    </BrowserRouter>
  );
}

export default App;
