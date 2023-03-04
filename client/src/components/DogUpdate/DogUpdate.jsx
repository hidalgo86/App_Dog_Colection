import {
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Page from "../Page/Page";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch } from "react-redux";
import { updateDog } from "../../redux/actions";
import fondo from "../../img/crear.jpg";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";

const DogUpdate = () => {
  let history = useHistory();

  let login = () => {
    swal({
      title: "Disculpa!",
      text: "Debe iniciar sesion!",
      icon: "warning",
      buttons: ["iniciar sesion", "cancelar"],
    }).then((result) => {
      if (!result) {
        return history.push("/home/user/login");
      }
    });
  };

  const token = localStorage.getItem("token");

  const id = useParams().id;

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    temperament: "",
    name: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    lifeSpanMin: "",
    lifeSpanMax: "",
    temperamentIndex: [],
  });

  const temperaments = JSON.parse(localStorage.getItem("temperamento"));
  let ArrayNumber = Array.from(Array(101), (_, index) => index);
  let ArrayWeightMax = ArrayNumber.slice(form.weightMin, -1);
  let ArrayHeightMax = ArrayNumber.slice(form.heightMin, -1);
  let ArrayLifeSpanMax = ArrayNumber.slice(form.lifeSpanMin, -1);

  if (form.weightMin > form.weightMax && form.weightMax !== "")
    setForm({ ...form, weightMax: "" });
  if (form.heightMin > form.heightMax && form.heightMax !== "")
    setForm({ ...form, heightMax: "" });
  if (form.lifeSpanMin > form.lifeSpanMax && form.lifeSpanMax !== "")
    setForm({ ...form, lifeSpanMax: "" });

  const handleChange = (event, value) => {
    event.preventDefault();
    if (event.target.name) {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    } else {
      setForm({
        ...form,
        order: value,
      });
    }
  };

  const handleChangeTemperament = (event) => {
    event.preventDefault();

    if (!form.temperamentIndex.includes(event.target.value))
      setForm({
        ...form,
        temperamentIndex: [...form.temperamentIndex, event.target.value],
      });
  };

  const handleDeleteTemperament = (value) => {
    setForm({
      ...form,
      temperamentIndex: form.temperamentIndex.filter((item) => item !== value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name: form.name,
      height: `${form.heightMin} - ${form.heightMax}`,
      weight: `${form.weightMin} - ${form.weightMax}`,
      lifeSpan: `${form.lifeSpanMin} - ${form.lifeSpanMax} years`,
      temperament: form.temperamentIndex.map((value) => value.split(":")[0]),
    };

    dispatch(updateDog(id, data, token, login));

    setForm({
      temperament: "",
      name: "",
      weightMin: "",
      weightMax: "",
      heightMin: "",
      heightMax: "",
      lifeSpanMin: "",
      lifeSpanMax: "",
      temperamentIndex: [],
    });
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
              margin:"10px 0",
              padding:"10px 0",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              maxWidth: "400px",
              background: "linear-gradient(#ff9800 80%, white)",
              borderRadius: "20px",
              gap:"10px"
            }}
          >
            <Typography
              sx={{ textAlign: "center", color: "white" }}
              variant="h4"
            >
              Actualizar Mascota
            </Typography>
            {/*********************** Nombre ******************************/}
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
                label="Nombre"
                variant="filled"
                value={form.name}
                name="name"
                onChange={handleChange}
              />
            </FormControl>

            {/********************** Peso **********************************/}
            <Box
              sx={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                margin: "0 auto",
                gap: "10px",
              }}
            >
              <Typography sx={{ width: "95px", color: "white" }} variant="h6">
                Peso:
              </Typography>
              <FormControl
                variant="filled"
                sx={{
                  minWidth: "70px",
                  flex: 1,
                  marginLeft: "auto",
                  backgroundColor: "white",
                }}
              >
                <InputLabel id="weightMin">Min</InputLabel>
                <Select
                  labelId="weightMin"
                  value={form.weightMin}
                  label="Min"
                  name="weightMin"
                  onChange={handleChange}
                  sx={{ backgroundColor: "common.white" }}
                >
                  {ArrayNumber.map((value, index) => (
                    <MenuItem value={value} key={index}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                variant="filled"
                sx={{ minWidth: "70px", flex: 1, backgroundColor: "white" }}
              >
                <InputLabel id="weightMax">Max</InputLabel>
                <Select
                  labelId="weightMax"
                  value={form.weightMax}
                  label="Max"
                  name="weightMax"
                  onChange={handleChange}
                  sx={{ backgroundColor: "common.white" }}
                >
                  {ArrayWeightMax.map((value, index) => (
                    <MenuItem value={value} key={index}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {/********************** Altura ******************************/}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "80%",
                margin: "0 auto",
                gap: "10px",
              }}
            >
              <Typography sx={{ width: "95px", color: "white" }} variant="h6">
                Altura:
              </Typography>
              <FormControl
                variant="filled"
                sx={{
                  minWidth: "70px",
                  flex: 1,
                  marginLeft: "auto",
                  backgroundColor: "white",
                }}
              >
                <InputLabel id="heightMin">Min</InputLabel>
                <Select
                  labelId="heightMin"
                  name="heightMin"
                  value={form.heightMin}
                  label="Min"
                  onChange={handleChange}
                  sx={{ backgroundColor: "common.white" }}
                >
                  {ArrayNumber.map((value, index) => (
                    <MenuItem value={value} key={index}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                variant="filled"
                sx={{ minWidth: "70px", flex: 1, backgroundColor: "white" }}
              >
                <InputLabel id="heightMax">Max</InputLabel>
                <Select
                  labelId="heightMax"
                  name="heightMax"
                  value={form.heightMax}
                  label="Max"
                  onChange={handleChange}
                  sx={{ backgroundColor: "common.white" }}
                >
                  {ArrayHeightMax.map((value, index) => (
                    <MenuItem value={value} key={index}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {/********************* Años de vida ****************************/}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "80%",
                margin: "0 auto",
                gap: "10px",
              }}
            >
              <Typography
                sx={{ minWidth: "60px", color: "white" }}
                variant="h6"
              >
                Años de Vida:
              </Typography>
              <FormControl
                variant="filled"
                sx={{
                  minWidth: "70px",
                  flex: 1,
                  marginLeft: "auto",
                  backgroundColor: "white",
                }}
              >
                <InputLabel id="lifeSpanMin">Min</InputLabel>
                <Select
                  labelId="lifeSpanMin"
                  value={form.lifeSpanMin}
                  label="Min"
                  name="lifeSpanMin"
                  onChange={handleChange}
                  sx={{ backgroundColor: "common.white" }}
                >
                  {ArrayNumber.map((value, index) => (
                    <MenuItem value={value} key={index}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                variant="filled"
                sx={{ minWidth: "70px", flex: 1, backgroundColor: "white" }}
              >
                <InputLabel id="lifeSpanMax">Max</InputLabel>
                <Select
                  labelId="lifeSpanMax"
                  value={form.lifeSpanMax}
                  label="Max"
                  name="lifeSpanMax"
                  onChange={handleChange}
                  sx={{ backgroundColor: "common.white" }}
                >
                  {ArrayLifeSpanMax.map((value, index) => (
                    <MenuItem value={value} key={index}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {/********************** Temperamento ***************************/}

            <FormControl
              aria_label="Control de seleccion de temperament"
              sx={{
                width: "80%",
                margin: "0 auto",
                "& .MuiInputLabel-root.Mui-focused ": {
                  top: "30px",
                  fontSize: "22px",
                  color: "rgba(0, 0, 0, 0.6)",
                },
              }}
            >
              <InputLabel id="temperament" sx={{ display: "flex" }}>
                Temperamento
              </InputLabel>
              <Select
                sx={{
                  backgroundColor: "common.white",
                }}
                labelId="temperament"
                label="Temperamento"
                name="temperament"
                value={form.temperament}
                onChange={handleChangeTemperament}
              >
                {temperaments.map((temperament) => (
                  <MenuItem
                    key={temperament.id}
                    value={`${temperament.id}:${temperament.name}`}
                  >
                    {temperament.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/**************** item de temperamentos agregados **************/}
            {form.temperamentIndex.length ? (
              <Box
                aria-label="Panel de temperamentos seleccionados"
                sx={{
                  borderRadius: "10px",
                  padding: "5px",
                  border: "2px solid white",
                  width: "78%",
                  margin: "0 auto",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {form.temperamentIndex?.map((temperament, index) => (
                  <Chip
                    sx={{
                      backgroundColor: "white",
                      color: "primary.main",
                      "& .MuiChip-deleteIcon": {
                        color: "primary.main",
                        "&:hover": { color: "error.main" },
                      },
                    }}
                    variant="outlined"
                    key={index}
                    label={temperament.split(":")[1]}
                    onDelete={() => handleDeleteTemperament(temperament)}
                  />
                ))}
              </Box>
            ) : null}
            {/********************* Boton Agregar ***************************/}
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
              startIcon={<AddCircleIcon sx={{}} />}
            >
              Actualizar
            </Button>
          </Paper>
        </Box>
      }
    />
  );
};

export default DogUpdate;
