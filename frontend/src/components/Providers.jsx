import React from "react";
import UserContext from "../context/UserContext";
import { BrowserRouter } from "react-router-dom";

const Providers = ({ children }) => {
  return (
    <>
      <UserContext>
        <BrowserRouter>{children}</BrowserRouter>
      </UserContext>
    </>
  );
};

export default Providers;
