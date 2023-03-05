import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Page from "../Page/Page";
import Cart from "../Carts/Cart/Cart";
import { useSelector } from "react-redux";

const DogDetail = () => {
  let data = useSelector((state) => state.detail);

  if (data.name) localStorage.setItem("dog", JSON.stringify(data));
  let dog = JSON.parse(localStorage.getItem("dog"));

  return (
    <Page
      contenido={
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={9}
            sx={{
              margin:"10px 0",
              padding:"10px 0",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              borderRadius:"20px",
              maxWidth:"400px"
            }}
          >
            <Typography
              sx={{ textAlign: "center", color: "primary.main" }}
              variant="h4"
            >
              {dog.name}
            </Typography>

            <img src={dog.image} alt="dog.name" style={{ width: "300px", alignSelf:"center" }} />

            {dog.weight ? (
              <Typography
                sx={{ textAlign: "center", color: "primary.main" }}
                variant="h6"
              >
                <b>Peso:</b> {dog.weight} Kg
              </Typography>
            ) : null}
            {dog.height ? (
              <Typography
                sx={{ textAlign: "center", color: "primary.main" }}
                variant="h6"
              >
                <b>Altura:</b> {dog.height} mts
              </Typography>
            ) : null}

            {dog.lifeSpan ? (
              <Typography
                sx={{ textAlign: "center", color: "primary.main" }}
                variant="h6"
              >
                <b>Esperanza de vida:</b> {dog.lifeSpan}
              </Typography>
            ) : null}
            {dog.temperament.length? (
              <Typography
                sx={{
                  maxWidth: "400px",
                  textAlign: "center",
                  color: "primary.main",
                }}
                variant="h6"
              >
                <b>Temperamentos:</b> *{dog.temperament.join(" / *")}
              </Typography>
            ) : null}
          </Paper>
        </Box>
      }
    />
  );
};

export default DogDetail;
