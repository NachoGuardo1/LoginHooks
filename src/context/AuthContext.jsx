import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthReducer } from "../reducers/AuthReducer";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = AuthReducer();
  const navigate = useNavigate();

  const onLogin = (user, token) => {
    dispatch({ type: "LOGIN", payload: { user, token } });
    navigate("/");
  };

  const onLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <authContext.Provider
      value={{
        onLogin,
        onLogout,
        ...state,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
