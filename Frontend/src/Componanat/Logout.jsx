import React, { useContext, useEffect } from "react";
import Ct from "./Context";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function Logout() {
  let obj = useContext(Ct);
  let navigate = useNavigate();
  useEffect(() => {
    obj.updfun({
      token: "",
      role: "",
      user_name: "",
    });
    navigate("/");
    Cookies.remove("login_data");
  }, []);
  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
}

export default Logout;
