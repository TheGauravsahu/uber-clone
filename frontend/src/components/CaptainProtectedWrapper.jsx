import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }

    axios
      .get("/api/captains/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const captainData = response.data.captain;

          if (captainData.role !== "captain") {
            navigate("/captain-login");
            return;
          }
          setCaptain(captainData);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/captain-login");
      });
  }, [navigate, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
