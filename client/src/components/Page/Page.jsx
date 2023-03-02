import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

const Page = ({ contenido }) => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{ flex: 1, display: "flex" }}>{contenido}</Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Page;
