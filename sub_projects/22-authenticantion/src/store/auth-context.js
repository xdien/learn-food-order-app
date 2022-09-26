import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  
  const [token, setToken] = useState(null);
  const userIsLogIn = !!token; /// if === empty => true ,
  const loginHanlder = (token) => {
    setToken(token);
    localStorage.setItem("token",token);
  };
  const logoutHanlder = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLogIn,
    login: loginHanlder,
    logout: logoutHanlder,
  };
  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
