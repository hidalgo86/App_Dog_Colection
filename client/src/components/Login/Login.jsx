import {
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authorizationUser, getDogAll } from "../../redux/actions";
import Page from "../Page/Page";
import login from "../../img/login.jpg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


const Login = () => {
  const dispatch = useDispatch();

  let history = useHistory()

  let home = () => {
    history.push("/home")
  }


  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(authorizationUser(form, home));
    dispatch(getDogAll());
  };

  return (
    <Page
      contenido={
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${login})`,
          }}
        >
          <Paper
            elevation={9}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              flex: 1,
              height: "300px",
              maxWidth: "500px",
              background: "linear-gradient(#ff9800,white)",
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{ color: "white", textAlign: "center" }}
              variant="h4"
            >
              Inicio
            </Typography>

            <FormControl
              aria_label="Control de seleccion de Nombre"
              sx={{ display: "flex" }}
            >
              <TextField
                color="primary"
                sx={{
                  width: "80%",
                  alignSelf: "center",
                  "& .MuiInputBase-formControl .css-10botns-MuiInputBase-input-MuiFilledInput-input":
                    {
                      backgroundColor: "white",
                    },
                }}
                label="Username"
                variant="filled"
                value={form.username}
                name="username"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl
              aria_label="Control de seleccion de Nombre"
              sx={{ display: "flex" }}
            >
              <TextField
                color="primary"
                sx={{
                  width: "80%",
                  alignSelf: "center",
                  "& .MuiInputBase-formControl .css-10botns-MuiInputBase-input-MuiFilledInput-input":
                    {
                      backgroundColor: "white",
                    },
                }}
                label="Password"
                variant="filled"
                value={form.password}
                name="password"
                onChange={handleChange}
              />
            </FormControl>
            <Box
              sx={{
                width: "78%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              {/* <Link to="/home" style={{ textDecoration: "none" }}> */}
                <Button
                  aria-label="Boton Crear nueva mascota"
                  sx={{
                    color: "primary.main",
                    width: "130px",
                    margin: "0 auto",
                    backgroundColor: "white",
                    "&:hover": { color: "common.white" },
                  }}
                  onClick={handleSubmit}
                  variant="contained"
                  startIcon={<CheckBoxIcon sx={{ mr: 1 }} />}
                >
                  OK
                </Button>
              {/* </Link> */}
              <Link to="/home/user/create" style={{ textDecoration: "none" }}>
                <Button
                  aria-label="Boton Crear nueva mascota"
                  sx={{
                    color: "primary.main",
                    width: "130px",
                    margin: "0 auto",
                    backgroundColor: "white",
                    "&:hover": { color: "common.white" },
                  }}
                  variant="contained"
                >
                  Registrar
                </Button>
              </Link>
            </Box>
          </Paper>
        </Box>
      }
    />
  );
};

export default Login;
