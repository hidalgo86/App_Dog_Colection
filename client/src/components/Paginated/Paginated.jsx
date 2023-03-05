import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const paginated = ({ pagTotal, handlerChange }) => {
  return (
    <Box>
      <Pagination siblingCount={0} count={pagTotal} defaultPage={1} onChange={handlerChange} />
    </Box>
  );
};

export default paginated;