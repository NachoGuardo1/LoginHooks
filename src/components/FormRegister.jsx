import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import SendIcon from "@mui/icons-material/Send";
import KeyIcon from "@mui/icons-material/Key";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import { useReducer } from "react";

const initialState = { loading: false, errorMsg: "", error: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return {
        loading: true,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: null,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        errorMsg: "Something went wrong",
      };

    default:
      return state;
  }
};

export const FormRegister = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const [valueEmail, BindEmail, resetEmail] = useForm("");
  const [valueName, BindName, resetName] = useForm("");
  const [valueLastname, BindLastname, resetLastname] = useForm("");
  const [valuePassword, BindPasworrd, resetPassword] = useForm("");
  const [valuePassword2, BindPasworrd2, resetPassword2] = useForm("");
  const [valueGender, BindGender, resetGender] = useForm("");

  const resetForm = () => {
    resetEmail(),
      resetName(),
      resetLastname(),
      resetPassword(),
      resetPassword2(),
      resetGender();
  };

  const v_rol = "USER";

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_REQUEST" });
    const datos = {
      nombre: valueName,
      apellido: valueLastname,
      correo: valueEmail,
      password: valuePassword,
      rol: v_rol,
    };

    await axios
      .post("https://testback4.onrender.com/api/usuarios", datos)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS" });
        console.log("success");
        navigate("/");
        resetForm();
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERR" });
        console.log(err);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                autoFocus
                label="First Name"
                type="text"
                variant="outlined"
                fullWidth
                {...BindName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Last Name"
                type="text"
                variant="outlined"
                fullWidth
                {...BindLastname}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                fullWidth
                name="radio-buttons-group"
                sx={{ flexDirection: "row", justifyContent: "center" }}
                {...BindGender}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                {...BindEmail}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AlternateEmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                {...BindPasworrd}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                helperText="1-10 caracteres, una letra mayuscula al menos"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="password"
                label="Repeat password"
                variant="outlined"
                {...BindPasworrd2}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Acept terms and conditions"
              />
            </Grid>
            {state.loading ? (
              <Grid
                container
                display="flex"
                justifyContent="center"
                sx={{ marginY: 2 }}
              >
                <CircularProgress />
              </Grid>
            ) : (
              <Button
                variant="contained"
                startIcon={<SendIcon />}
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                Sing up
              </Button>
            )}
            <Grid container justifyContent="center">
              <Grid item>
                <Link
                  component="button"
                  onClick={() => {
                    navigate("/");
                  }}
                  variant="body2"
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
