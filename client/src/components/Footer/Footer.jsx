import { Fab, Paper } from "@mui/material";
import { useHistory } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  let history = useHistory();

  const ruta = (path) => {
    history.push(path);
  };

  return (
    <Paper
      sx={{
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "40px",
        backgroundColor: "primary.main",
      }}
    >
      <Fab
        size="small"
        color="primary"
        sx={{
          color: "white",
          "&:hover": { backgroundColor: "white", color: "primary.main" },
        }}
        href="https://github.com/hidalgo86"
      >
        <GitHubIcon />
      </Fab>
      <Fab
        size="small"
        color="primary"
        sx={{
          color: "white",
          "&:hover": { backgroundColor: "white", color: "primary.main" },
        }}
        href="https://www.linkedin.com/in/hidalgoeduardo"
      >
        <LinkedInIcon />
      </Fab>
      <Fab
        onClick={() => ruta("/home/admin/contact")}
        size="small"
        color="primary"
        sx={{
          color: "white",
          "&:hover": { backgroundColor: "white", color: "primary.main" },
        }}
      >
        <EmailIcon />
      </Fab>
      <Fab
        onClick={() => ruta("/home/admin/contact")}
        size="small"
        color="primary"
        sx={{
          color: "white",
          "&:hover": { backgroundColor: "white", color: "primary.main" },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Paper>
  );
};

export default Footer;
