import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const AdminRoute = ({ children }) => {
  const { userData, userLogged } = useContext(authContext);
  if (userLogged === false || userData.rol === "USER") {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
