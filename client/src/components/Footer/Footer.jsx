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
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <LinkedInIcon/>
      </Fab>
      <Link to="/home/admin/contact" style={{ textDecoration: "none" }}>
        <Fab
        size="small"
          color="primary"
          sx={{
            color: "white",
            "&:hover": { backgroundColor: "white", color: "primary.main" },
          }}
        >
          <EmailIcon/>
        </Fab>
      </Link>
      <Link to="/home/admin/contact" style={{ textDecoration: "none" }}>
        <Fab
        size="small"
          color="primary"
          sx={{
            color: "white",
            "&:hover": { backgroundColor: "white", color: "primary.main" },
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Link>
    </Paper>
  );
};

export default Footer;
