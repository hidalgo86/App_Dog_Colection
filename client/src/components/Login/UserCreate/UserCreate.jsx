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
import { Link } from "react-router-dom";
import { createrUser } from "../../../redux/actions";
import Page from "../../Page/Page";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import fondo from "../../../img/register.jpg";

const UserCreate = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(createrUser(form));
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
            backgroundImage: `url(${fondo})`,
          }}
        >
          <Paper
            elevation={9}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "400px",
              flex: 1,
              gap: "10px",
              background: "linear-gradient(#ff9800 70%,white)",
              maxWidth: "400px",
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{ color: "white", textAlign: "center" }}
              variant="h4"
            >
              Registro
            </Typography>
            <FormControl
              aria_label="Control de seleccion de Nombre"
              sx={{ display: "flex", gap: "10px" }}
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
                value={form.name}
                name="name"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl
              aria_label="Control de seleccion de Nombre"
              sx={{ display: "flex", gap: "10px" }}
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

            <FormControl
              aria_label="Control de seleccion de Nombre"
              sx={{ display: "flex", gap: "10px" }}
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
                label="Email"
                variant="filled"
                value={form.email}
                name="email"
                onChange={handleChange}
              />
            </FormControl>

            <Box
              sx={{
                width: "78%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link to="/home" style={{ textDecoration: "none" }}>
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
                  startIcon={<BorderColorIcon sx={{ mr: 1 }} />}
                >
                  OK
                </Button>
              </Link>
            </Box>
          </Paper>
        </Box>
      }
    />
  );
};

export default UserCreate;
