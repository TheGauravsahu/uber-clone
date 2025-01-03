import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import UserProtectedWrapper from "./components/UserProtectedWrapper";
import UserLogin from "./pages/UserLogin";

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
      <Route path="/login" element={<UserLogin />} />
    </Routes>
  );
};

export default App;
