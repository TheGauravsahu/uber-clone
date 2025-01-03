import React from "react";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {

  const navigate = useNavigate();


  axios.post("/api/users/logout").then((response) => {
    if (response.status === 200) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  });

  return <div>Logging out.</div>;
};

export default UserLogout;
