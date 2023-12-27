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
import React, { useEffect, useReducer, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "../hooks/useForm";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";

const initialState = { loading: false, user: null, errorMsg: "", error: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        loading: true,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        user: action.payload,
        error: null,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        user: {},
        error: true,
        errorMsg: "Datos incorrectos",
      };

    default:
      return state;
  }
};

export const FormLogin = () => {
  const [valueEmail, BindEmail, resetEmail] = useForm("");
  const [valuePassword, BindPasworrd, resetPassword] = useForm("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_REQUEST" });
    const datos = { correo: valueEmail, password: valuePassword };
    await axios
      .post("https://testback4.onrender.com/api/auth/login", datos)
      .then((res) => {
        const { token } = res.data;
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        localStorage.setItem("token", JSON.stringify(token));
        console.log("Ok");
        resetEmail();
        resetPassword();
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
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
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
          <TextField
            error={state.error ? state.error : null}
            required
            margin="normal"
            autoFocus
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            {...BindEmail}
          />
          <TextField
            error={state.error ? state.error : null}
            required
            margin="normal"
            fullWidth
            type={showPassword ? "text" : "password"}
            label="Password"
            variant="outlined"
            {...BindPasworrd}
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
          {state.errorMsg ? (
            <Typography color="error" variant="body2" textAlign="center">
              {state.errorMsg}
            </Typography>
          ) : null}
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
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
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
