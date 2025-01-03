import React, { useContext } from "react";
import axios from "../config/axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const UserRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: {
        firstName,
        lastName,
      },
      email,
      password,
    };

    const res = await axios.post("/api/users/register", userData);
    if (res.status === 201) {
      const data = res.data;
      setUser(data.user);
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
    <div className="w-full px-4 flex flex-col justify-between py-8 h-screen">
      <div>
        <div className="mt-4 mb-12">
          <img
            className="w-24"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter your first name
              </label>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="first name"
                className="mt-1 w-full px-3 py-2 bg-gray-50 placeholder:text-base rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter your last Name
              </label>
              <input
                value={lastName}
                placeholder="last name"
                className="mt-1 w-full px-3 py-2 bg-gray-50 placeholder:text-base rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
              />
            </div>
          </div>

          <div className=" w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What's your Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="email"
              className="mt-1 w-full px-3 py-2 bg-gray-50 placeholder:text-base rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Password
            </label>
            <div className="flex items-center justify-center bg-gray-50 rounded-md px-3">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={showPassword ? "text" : "password"}
                className="mt-1 w-full px-3 py-2 bg-gray-50 placeholder:text-base rounded-md outline-none"
                placeholder="password"
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
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-600">
            Log in
          </Link>
        </p>
      </div>

      <Link className="bg-green-600 text-white py-2 px-4 w-full my-3 text-center" to="/captain-register">
        Register as Captain
      </Link>
    </div>
  );
};

export default UserRegister;
