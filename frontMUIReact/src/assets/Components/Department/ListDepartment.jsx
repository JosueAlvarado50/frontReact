import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  departmentList,
  deleteDepartment,
} from "../services/DepartmentService";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { isAdminUser } from "../services/AuthService";
import { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: "6px 20px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "6px 20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10, // Tamaño de letra para pantallas xs
    },
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

function ListDepartment() {
  const [department, setDepartment] = useState([]);
  const navigator = useNavigate();
  const [deletedD, setDeletedD] = useState(false);
  const isAdmin = isAdminUser();

  useEffect(() => {
    departmentList()
      .then((response) => {
        setDepartment(response.data);
        setDeletedD(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [deletedD]);

  function handleEdit(id) {
    navigator(`/edit-department/${id}`);
  }

  function handleDelete(id) {
    deleteDepartment(id)
      .then(() => {
        setDeletedD(true); // Trigger re-fetch of departments after deletion
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <TableContainer
      sx={{
        width: { xs: "95%" },
        borderRadius: "10px",
        ml: { xs: 0, sm: 3, md: 3, lg: 3, xl: 0 },
        mt: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ fontSize: { xs: "11px" } }}>
              ID
            </StyledTableCell>
            <StyledTableCell sx={{ fontSize: { xs: "11px" } }} align="center">
              Department Name
            </StyledTableCell>
            <StyledTableCell sx={{ fontSize: { xs: "11px" } }} align="center">
              Description
            </StyledTableCell>
            <StyledTableCell sx={{ fontSize: { xs: "11px" } }} align="center">
              Options
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {department.map((dep) => (
            <StyledTableRow key={dep.id}>
              <StyledTableCell component="th" scope="row">
                {dep.id}
              </StyledTableCell>
              <StyledTableCell align="center">
                {dep.departmentName}
              </StyledTableCell>
              <StyledTableCell align="center">
                {dep.departmentDescription}
              </StyledTableCell>
              {isAdmin && (
                <StyledTableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexDirection: {
                        xs: "column", // Layout de columna para pantallas pequeñas
                        sm: "row", // Layout de fila para pantallas más grandes
                      },
                    }}
                  >
                    <Button
                      sx={{ fontSize: { xs: "8px" } }}
                      variant="contained"
                      color="primary"
                      startIcon={<EditIcon sx={{ width: { xs: "15px" } }} />}
                      onClick={() => handleEdit(dep.id)}
                    >
                      Editar
                    </Button>

                    <Button
                      sx={{ fontSize: { xs: "8px" } }}
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon sx={{ width: { xs: "15px" } }} />}
                      onClick={() => handleDelete(dep.id)}
                    >
                      Eliminar
                    </Button>
                  </Box>
                </StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListDepartment;
