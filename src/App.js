import React, { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Preference from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import "./styles.css";
import UseToken from "./components/App/UseToken";

function setToken(userTokne) {
  sessionStorage.setItem("token", JSON.stringify(userTokne));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userTokne = JSON.parse(tokenString);
  return userTokne?.token;
}

export default function App() {
  // const token = getToken();
  // const [token, setToken] = useState();

  const { token, setToken } = UseToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Preference" element={<Preference />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
