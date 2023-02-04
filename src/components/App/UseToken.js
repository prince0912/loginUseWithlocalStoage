import { useState } from "react";

const UseToken = () => {
  const getToken = () => {
    // const tokenString = sessionStorage.getItem("token");
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.stringify(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.getItem("token", JSON.stringify(userToken));
    // in place of session storge we use local storage
    localStorage.getItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  };
};

export default UseToken;
