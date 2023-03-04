import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Page from "../Page/Page";
import fondo from "../../img/fondoCachorros.jpg";

const Contact = () => {
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
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <Paper
            elevation={9}
            sx={{
              marginTop: "5px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              flex: 0.5,
              borderRadius: "20px",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(#ff9800, white)",
                height: "100px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "bolder" }}
              >
                Telefono:
              </Typography>
              <Typography
                component="h6"
                sx={{ color: "black", fontWeight: "bolder" }}
              >
                +34 6 1386-1229
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(#ff9800, white)",
                height: "100px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "bolder" }}
              >
                Email:
              </Typography>
              <Typography
                component="h6"
                sx={{ color: "black", fontWeight: "bolder" }}
              >
                higalgojose86@gmail.com
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(#ff9800, white)",
                height: "100px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "bolder" }}
              >
                Linkedin:
              </Typography>
              <Typography
                component="h6"
                sx={{ color: "black", fontWeight: "bolder" }}
              >
                https://www.linkedin.com/in/hidalgoeduardo
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(#ff9800, white)",
                height: "100px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "bolder" }}
              >
                GigHub:
              </Typography>
              <Typography
                component="h6"
                sx={{ color: "black", fontWeight: "bolder" }}
              >
                https://github.com/hidalgo86
              </Typography>
            </Paper>
          </Paper>
        </Box>
      }
    />
  );
};

export default Contact;
