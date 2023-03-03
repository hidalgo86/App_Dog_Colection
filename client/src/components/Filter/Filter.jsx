import TuneIcon from "@mui/icons-material/Tune";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFilterDogs, getTemperament } from "../../redux/actions";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const Filter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  const temperaments = useSelector((state) => state.temperament);

  localStorage.setItem("temperamento", JSON.stringify(temperaments));

  const [form, setForm] = useState({
    temperament: "",
    name: "ascendente",
    weight: "ascendente",
    order: "name",
  });

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

  const filtrar = () => {
    dispatch(getFilterDogs(form));
    setForm({
      temperament: "",
      name: "ascendente",
      weight: "ascendente",
      order: "name",
    }); 
  };

  return (
    <Paper
      elevation={0}
      style={{
        width: "220px",
        height: "100%",
        background: "none",
        border:"none"
      }}
    >
      {/****************** Temperamento ************************/}
      <FormControl
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
          margin: "0 auto",
          "& .MuiFormLabel-root.Mui-focused": { color: "white" },
          "& .MuiInputLabel-root.Mui-focused": { color: "rgba(0, 0, 0, 0.52)" },
          "& .MuiOutlinedInput-input": { color: "white" },

          "& .MuiToggleButtonGroup-grouped:not(:first-of-type).Mui-selected": {
            color: "white",
          },
          "& .MuiToggleButtonGroup-grouped:not(:last-of-type).Mui-selected": {
            color: "white",
          },
        }}
        >
        <InputLabel
          aria-label="control de temperamento"
          id="temperament"
          sx={{}}
          >
          Temperamento
        </InputLabel>
        <Select
          sx={{ width: "100%" }}
          labelId="temperament"
          label="Temperamento"
          name="temperament"
          value={form.temperament}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {temperaments.map((temperament) => (
            <MenuItem key={temperament.id} value={temperament.name}>
              {temperament.name}
            </MenuItem>
          ))}
        </Select>

        {/****************** Orden "Nombre-Peso"  ************************/}
        <Divider sx={{ marginTop: "30px" }} />

        <ToggleButtonGroup
          sx={{ display: "flex", marginTop: "30px" }}
          value={form.order}
          exclusive
          name="order"
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton sx={{ flex: 1 }} value="name">
            Nombre
          </ToggleButton>
          <ToggleButton sx={{ flex: 1 }} value="weight">
            Peso
          </ToggleButton>
        </ToggleButtonGroup>

        {form.order === "weight" ? (
          <>
            {/************** Selector de orden por peso: ****************/}
            <FormLabel
              id="weight-order"
              sx={{
                color: "white",
                marginTop: "30px",
              }}
            >
              Peso:
            </FormLabel>
            <RadioGroup
              aria-labelledby="weight-order"
              name="weight"
              value={form.weight}
              onChange={handleChange}
            >
              <FormControlLabel
                value="ascendente"
                control={
                  <Radio
                    sx={{
                      color: "rgba(0, 0, 0, 0.52)",
                      "&.Mui-checked": { color: "white" },
                      "&.Mui-checked ~ .MuiFormControlLabel-label": {
                        color: "white",
                      },
                    }}
                  />
                }
                label="Ascendente"
              />
              <FormControlLabel
                value="desendente"
                control={
                  <Radio
                    sx={{
                      color: "rgba(0, 0, 0, 0.52)",
                      "&.Mui-checked": { color: "white" },
                      "&.Mui-checked ~ .MuiFormControlLabel-label": {
                        color: "white",
                      },
                    }}
                  />
                }
                label="Desendente"
              />
            </RadioGroup>
          </>
        ) : (
          <>
            {/************** Selector de orden por alfabetico: ****************/}
            <FormLabel
              id="name-order"
              sx={{
                marginTop: "30px",
                color: "white",
              }}
            >
              Nombre:
            </FormLabel>
            <RadioGroup
              aria-labelledby="name-order"
              name="name"
              value={form.name}
              onChange={handleChange}
            >
              <FormControlLabel
                value="ascendente"
                control={
                  <Radio
                    sx={{
                      color: "rgba(0, 0, 0, 0.52)",
                      "&.Mui-checked": { color: "white" },
                      "&.Mui-checked ~ .MuiFormControlLabel-label": {
                        color: "white",
                      },
                    }}
                  />
                }
                label="A - Z"
              />
              <FormControlLabel
                value="desendente"
                control={
                  <Radio
                    sx={{
                      color: "rgba(0, 0, 0, 0.52)",
                      "&.Mui-checked": { color: "white" },
                      "&.Mui-checked ~ .MuiFormControlLabel-label": {
                        color: "white",
                      },
                    }}
                  />
                }
                label="Z - A"
              />
            </RadioGroup>
          </>
        )}

        <Divider />

        <Button
          aria-label="Boton filtrar"
          sx={{
            margin: "30px auto",
            color: "primary.main",
            width: "150px",
            backgroundColor: "white",
            "&:hover": { color: "common.white" },
          }}
          onClick={filtrar}
          variant="contained"
          startIcon={<TuneIcon sx={{ mr: 1 }} />}
        >
          filtrar
        </Button>
      </FormControl>
    </Paper>
  );
};

export default Filter;
