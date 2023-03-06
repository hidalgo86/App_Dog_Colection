import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDog, dogsEdit } from "../../redux/actions";
import Page from "../Page/Page";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styled from "@emotion/styled";
import { Link, useHistory } from "react-router-dom";
import noData from "../../img/noData.jpg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DogUpdate = () => {
  const dispatch = useDispatch();
  const desktop = useMediaQuery("(min-width:700px)");
  useEffect(() => {
    dispatch(dogsEdit());
  }, [dispatch]);

  const dogs = useSelector((state) => state.dogsEdit);

  const token = localStorage.getItem("token");

  let history = useHistory();

  const submitEliminar = (id) => {
    dispatch(deleteDog(id, token, history));
  };

  return dogs ? (
    <Page
      contenido={
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "radial-gradient(rgba(255, 255, 0, 0.8) 20%,white)",
          }}
        >
          {dogs.length ? (
            <Paper
              elevation={9}
              sx={{
                margin:"0 10px",
                display:"flex",
                width: desktop ? "700px" : "400px",
                backgroundColor: "primari.main",
              }}
            >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: "680px" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>RAZA</StyledTableCell>
                      <StyledTableCell align="right">PESO</StyledTableCell>
                      <StyledTableCell align="right">ALTURA</StyledTableCell>
                      <StyledTableCell align="right">
                        AÑOS DE VIDA
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        TEMPERAMENTOS
                      </StyledTableCell>
                      <StyledTableCell align="center">EDITAR</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dogs.map((dog) => (
                      <StyledTableRow
                        key={dog.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {dog.name}
                        </TableCell>
                        <StyledTableCell align="right">
                          {dog.weight} kg
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {dog.height} mts
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {dog.lifeSpan}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {dog.temperament.join(", ")}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Link to={`/home/dog/update/${dog.id}`}>
                            <Button size="small">
                              <BorderColorIcon
                                sx={{ color: "rgba(0, 0, 255, 0.6)" }}
                              />
                            </Button>
                          </Link>

                          <Button
                            size="small"
                            onClick={() => submitEliminar(dog.id)}
                          >
                            <DeleteForeverIcon
                              sx={{ color: "rgba(255, 0, 0, 0.6)" }}
                            />
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          ) : (
            <Paper
              elevation={9}
              sx={{
                borderRadius: "20px",
                backgroundColor: "primari.main",
              }}
            >
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={noData}
                alt="noData"
              />
            </Paper>
          )}
        </Box>
      }
    />
  ) : null;
};

export default DogUpdate;
