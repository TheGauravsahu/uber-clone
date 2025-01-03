import React, { useContext } from "react";
import axios from "../config/axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState();
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      name: {
        firstName,
        lastName,
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    };

    const res = await axios.post("/api/captains/register", captainData);
    if (res.status === 201) {
      const data = res.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setShowPassword(false);
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
        <div className="flex gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              className="w-full mt-1 p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              className="w-full mt-1 py-2 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

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

        <div className="flex gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vehicle Color
            </label>
            <input
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              type="text"
              className="w-full mt-1 p-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Capacity
            </label>
            <input
              value={capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
              type="number"
              className="w-full mt-1 py-2 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className=" w-full">
          <label className="block text-sm font-medium text-gray-700">
            Plate
          </label>
          <input
            value={plate}
            onChange={(e) => {
              setPlate(e.target.value);
            }}
            type="text"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className=" w-full">
          <label className="block text-sm font-medium text-gray-700">
            Vehicle Type
          </label>
          <select
            value={vehicleType}
            onChange={(e) => {
              setVehicleType(e.target.value);
            }}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/captain-login" className="text-blue-500 hover:text-blue-600">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default CaptainRegister;
