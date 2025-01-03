import React from "react";
import UserContext from "../context/UserContext";
import { BrowserRouter } from "react-router-dom";
import CaptainContext from "../context/CaptainContext";

const Providers = ({ children }) => {
  return (
    <>
      <CaptainContext>
        <UserContext>
          <BrowserRouter>{children}</BrowserRouter>
        </UserContext>
      </CaptainContext>
    </>
  );
};

export default Providers;
