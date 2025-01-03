import React, { useContext } from "react";
import axios from "../config/axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    const res = await axios.post("/api/users/login", userData);
    if (res.status === 200) {
      const data = res.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
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
          <div className=" w-full">
            <label className="block  font-medium text-gray-700">
              What's your Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email"
              type="email"
              className="mt-1 w-full px-3 py-2 bg-gray-50 placeholder:text-base rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Enter Password
            </label>
            <div className="flex items-center justify-center bg-gray-50 rounded-md px-3">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="password"
                type={showPassword ? "text" : "password"}
                className="mt-1 w-full  py-2  rounded-md focus:outline-none bg-gray-50"
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
          <Link to="/register" className="text-blue-500 hover:text-blue-600">
            Register
          </Link>
        </p>
      </div>

      <Link className="bg-green-600 text-white py-2 px-4 w-full my-3 text-center" to="/captain-login">
        Login as Captain
      </Link>
    </div>
  );
};

export default UserLogin;
