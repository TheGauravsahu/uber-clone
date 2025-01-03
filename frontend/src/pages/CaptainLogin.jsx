import React, { useContext } from "react";
import axios from "../config/axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      email,
      password,
    };

    const res = await axios.post("/api/captains/login", captainData);
    if (res.status === 200) {
      const data = res.data;

      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full">
      <div className="px-4 mb-8">
        <img
          className="w-28"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt="Uber logo"
        />
      </div>

      <form
        className="space-y-4 px-4"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className=" w-full">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="flex items-center justify-center border border-gray-300 rounded-md px-3">
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={showPassword ? "text" : "password"}
              className="mt-1 w-full  py-2  rounded-md focus:outline-none "
              required
            />
            <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <i
                  className="ri-eye-close-line"
                  style={{ fontSize: "20px" }}
                ></i>
              ) : (
                <i className="ri-eye-line"></i>
              )}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/captain-register"
          className="text-blue-500 hover:text-blue-600"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default CaptainLogin;
