import React, { useState, useEffect } from "react";
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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
        borderRadius: "10px",
        ml: { xs: 3, sm: 3, md: 3, lg: 3, xl: 0 },
        mt: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 450 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Department Name</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Options</StyledTableCell>
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
                    sx={{ display: "flex", justifyContent: "center", gap: 2 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => handleEdit(dep.id)}
                    >
                      Editar
                    </Button>

                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
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
