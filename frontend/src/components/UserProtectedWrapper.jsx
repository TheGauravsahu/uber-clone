import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    axios
      .get("/api/users/profile")
      .then((response) => {
        if (response.status === 200) {
          const userData = response.data;
          if (userData.role !== "user") {
            navigate("/login");
            return;
          }
          setUser(userData);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
