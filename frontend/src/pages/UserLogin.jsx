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
      navigate("/");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full">
      <div>
        <img
          className="w-28"
          src="data:image/png;base64,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"
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
                <i className="ri-eye-close-line" style={{ fontSize: "20px" }}></i>
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
  );
};

export default UserLogin;
