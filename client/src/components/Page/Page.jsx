import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

const Page = ({ contenido }) => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{display: "flex", flex: 1 }}>{contenido}</Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Page;
