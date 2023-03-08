import { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Image = ({setFile}) => {
  const [image, setImage] = useState({
    imagen: "",
    name: "",
    url: "",
    message: "",
  });

  const handlerOnChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setImage({ ...image, name: file.name });
    setImage({ ...image, image: URL.createObjectURL(event.target.files[0]) });
    setFile(event.target.files[0]);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        gap: "5px",
      }}
    >
      <Button
        sx={{
          color: "primary.main",
          backgroundColor: "white",
          "&:hover": { color: "common.white" },
        }}
        variant="contained"
        component="label"
        startIcon={<PhotoCamera />}
      >
        subir
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={handlerOnChange}
        />
      </Button>
      <img
        src={image.image}
        alt={image.name}
        style={{ width: "100px", borderRadius: "20px" }}
      />
    </Box>
  );
};
export default Image;
