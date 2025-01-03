import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import UserProtectedWrapper from "./components/UserProtectedWrapper";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        }
      />
      <Route path="/register" element={<UserRegister />} />
    </Routes>
  );
};

export default App;
