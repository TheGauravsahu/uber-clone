import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import UserProtectedWrapper from "./components/UserProtectedWrapper";
import UserLogin from "./pages/UserLogin";
import UserLogout from "./pages/UserLogout";
import CaptainRegister from "./pages/CaptainRegister";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./components/CaptainProtectedWrapper";

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
      <Route path="/logout" element={<UserLogout />} />

      {/* captain-routes */}
      <Route
        path="/home"
        element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        }
      />
      <Route path="/captain-register" element={<CaptainRegister />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
    </Routes>
  );
};

export default App;
