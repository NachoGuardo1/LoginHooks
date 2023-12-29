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
import SendIcon from "@mui/icons-material/Send";
import KeyIcon from "@mui/icons-material/Key";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import { useReducer } from "react";
import { blue } from "@mui/material/colors";

const nombreRegex = /^[a-zA-Z' ]{2,14}$/;
const apellidoRegex = /^[a-zA-Z' ]{2,14}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,10}$/;

const initialState = {
  user: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
    gender: "",
  },
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERRORS":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const FormRegister = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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

  const onSubmit = async (e) => {
    e.preventDefault();
    //validaciones inputs
    if (!nombreRegex.test(state.user.firstname)) {
      dispatch({ type: "SET_ERRORS", payload: "NAME" });
      return;
    }
    if (!apellidoRegex.test(state.user.lastname)) {
      dispatch({ type: "SET_ERRORS", payload: "LASTNAME" });
      return;
    }
    if (!passwordRegex.test(state.user.password)) {
      dispatch({ type: "SET_ERRORS", payload: "PASSWORD" });
      return;
    }
    if (state.user.password !== state.user.password2) {
      dispatch({ type: "SET_ERRORS", payload: "!PASSWORD2" });
      return;
    }
    dispatch({ type: "SET_ERRORS", payload: "" });
    dispatch({ type: "SET_LOADING", payload: true });

    const datos = {
      nombre: state.user.firstname,
      apellido: state.user.lastname,
      correo: state.user.email,
      password: state.user.password,
      rol: "USER",
    };

    await axios
      .post("https://testback4.onrender.com/api/usuarios", datos)
      .then((res) => {
        console.log("success");
        navigate("/");
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "SET_LOADING", payload: false });
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
        <Avatar sx={{ m: 1, bgcolor: blue[700] }}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                disabled={state.loading && true}
                error={state.error === "NAME" && true}
                helperText={
                  state.error === "NAME" &&
                  "Firstname must contain 2 to 15 characters"
                }
                name="firstname"
                value={state.user.firstname}
                onChange={handleChange}
                type="text"
                required
                autoFocus
                label="First Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                disabled={state.loading && true}
                error={state.error === "LASTNAME" && true}
                helperText={
                  state.error === "NAME" &&
                  "Lastname must contain 2 to 15 characters"
                }
                name="lastname"
                value={state.user.lastname}
                onChange={handleChange}
                required
                label="Last Name"
                type="text"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                disabled={state.loading && true}
                required
                aria-labelledby="demo-radio-buttons-group-label"
                fullWidth
                name="gender"
                onChange={handleChange}
                sx={{ flexDirection: "row", justifyContent: "center" }}
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
                disabled={state.loading && true}
                name="email"
                value={state.user.email}
                onChange={handleChange}
                required
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
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
                disabled={state.loading && true}
                name="password"
                value={state.user.password}
                onChange={handleChange}
                error={state.error === "PASSWORD" && true}
                helperText="Must contain 8 to 10 characters, at least one uppercase amd one number"
                required
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                disabled={state.loading && true}
                name="password2"
                value={state.user.password2}
                onChange={handleChange}
                required
                error={state.error === "!PASSWORD2" && true}
                helperText={
                  state.error === "!PASSWORD2" && "Passwords do not match"
                }
                fullWidth
                type="password"
                label="Repeat password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                disabled={state.loading && true}
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
                  disabled={state.loading && true}
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
