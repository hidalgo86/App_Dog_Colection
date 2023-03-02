import { Fab, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Paper
      sx={{
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        backgroundColor: "primary.main",
      }}
    >
      <Fab
        color="primary"
        sx={{
          color: "white",
          "&:hover": { backgroundColor: "white", color: "primary.main" },
        }}
        href="https://github.com/hidalgo86"
      >
        <GitHubIcon sx={{ fontSize: "40px" }} />
      </Fab>
      <Fab
        color="primary"
        sx={{
          color: "white",
          "&:hover": { backgroundColor: "white", color: "primary.main" },
        }}
        href="https://www.linkedin.com/in/hidalgoeduardo"
      >
        <LinkedInIcon sx={{ fontSize: "40px" }} />
      </Fab>
      <Link to="/home/admin/contact" style={{ textDecoration: "none" }}>
        <Fab
          color="primary"
          sx={{
            color: "white",
            "&:hover": { backgroundColor: "white", color: "primary.main" },
          }}
        >
          <EmailIcon sx={{ fontSize: "40px" }} />
        </Fab>
      </Link>
      <Link to="/home/admin/contact" style={{ textDecoration: "none" }}>
        <Fab
          color="primary"
          sx={{
            color: "white",
            "&:hover": { backgroundColor: "white", color: "primary.main" },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: "40px" }} />
        </Fab>
      </Link>
    </Paper>
  );
};

export default Footer;
