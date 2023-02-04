import React, { useState } from "react";
import PropTypes from "prop-types";
import "./login.scss";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.prevent.default();
    const token = await loginUser({
      userName,
      password
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit}>
        <label>User name</label>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login;
