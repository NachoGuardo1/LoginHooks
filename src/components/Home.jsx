import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export const Home = () => {
  const navigate = useNavigate();
  const { userData, userLogged, onLogout } = useContext(authContext);
  return (
    <>
      {!userLogged ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="xs"
        >
          <Button
            variant="contained"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </Button>
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          maxWidth="xs"
        >
          <Typography variant="h2" textAlign="center">
            Welcome
          </Typography>
          <Typography variant="h4" textAlign="center" marginBottom={3}>
            {userData.nombre}
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              onLogout();
            }}
          >
            Log out
          </Button>
        </Box>
      )}
    </>
  );
};
