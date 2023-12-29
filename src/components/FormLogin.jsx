import React, { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";
import { FormReducer } from "../reducers/FormReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import SendIcon from "@mui/icons-material/Send";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { blue } from "@mui/material/colors";

export const FormLogin = () => {
  const { onLogin } = useContext(authContext);
  const [state, dispatch] = FormReducer();
  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "SET_USER",
      payload: {
        ...state.user,
        [name]: value,
      },
    });
  };

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "SET_LOADING", payload: true });
    await axios
      .post("https://testback4.onrender.com/api/auth/login", {
        correo: state.user.email,
        password: state.user.password,
      })
      .then((res) => {
        const { token, usuario } = res.data;
        dispatch({ type: "SET_USER", payload: { email: "", password: "" } });
        dispatch({ type: "SET_LOADING", payload: false });
        onLogin(usuario, token);
      })
      .catch((err) => {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_ERROR", payload: true });
        console.log(err);
      });
  };

  return (
    <Container maxWidth="xs" component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: blue[700] }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
          <TextField
            required
            name="email"
            value={state.user.email}
            onChange={handleChange}
            disabled={state.loading && true}
            error={state.error && true}
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            autoFocus
            fullWidth
          />
          <TextField
            required
            name="password"
            value={state.user.password}
            onChange={handleChange}
            disabled={state.loading && true}
            error={state.error && true}
            type={showPassword ? "text" : "password"}
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {state.error && (
            <Typography color="error" variant="body2" textAlign="center">
              Invalid email and/or password
            </Typography>
          )}
          {state.loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", marginY: 2 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Button
              sx={{ mt: 3, mb: 2 }}
              variant="contained"
              startIcon={<SendIcon />}
              type="submit"
              onClick={onSubmit}
              fullWidth
            >
              Sing In
            </Button>
          )}
          <Grid container justifyContent="center">
            {/* <Grid item xs>
              <Link href="#" variant="body2" disabled={state.loading && true}>
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link
                disabled={state.loading && true}
                component="button"
                variant="body2"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
