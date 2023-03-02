import { Paper } from "@mui/material";
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "600px",
              gap: "10px",
              flex: 0.5,
              borderRadius: "20px",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(#ff9800, white)",
                height: "150px",
                textAlign: "center",
              }}
            >
              <h3>Telefono:</h3>
              <h4>+34 6 1386-1229</h4>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(#ff9800, white)",
                height: "150px",
                textAlign: "center",
              }}
            >
              <h3>Email:</h3>
              <h4>higalgojose86@gmail.com</h4>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(#ff9800, white)",
                height: "150px",
                textAlign: "center",
              }}
            >
              <h3>Linkedin:</h3>
              <h4>
                <a href="https://www.linkedin.com/in/hidalgoeduardo">
                  https://www.linkedin.com/in/hidalgoeduardo
                </a>
              </h4>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(#ff9800, white)",
                height: "150px",
                textAlign: "center",
              }}
            >
              <h3>GigHub:</h3>
              <h4>
                <a href="https://github.com/hidalgo86">
                  https://github.com/hidalgo86
                </a>
              </h4>
            </Paper>
          </Paper>
        </Box>
      }
    />
  );
};

export default Contact;
