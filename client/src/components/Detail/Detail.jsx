import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Page from "../Page/Page";

const Detail = () => {
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
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "600px",
              gap: "10px",
              flex: 0.5,
            }}
          ></Paper>
        </Box>
      }
    />
  );
};

export default Detail;
