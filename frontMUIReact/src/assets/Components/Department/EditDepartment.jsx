import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BusinessIcon from "@mui/icons-material/Business";
import {
  getDepartmentById,
  updateDepartment,
} from "../services/DepartmentService";

const defaultTheme = createTheme();

function EditDepartment() {
  const { id } = useParams();
  const navigator = useNavigate();
  const [form, setForm] = useState({
    departmentName: "",
    departmentDescription: "",
  });

  const [errors, setErrors] = useState({
    departmentName: false,
    departmentDescription: false,
  });

  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    getDepartmentById(id)
      .then((response) => {
        setForm(response.data);
      })
      .catch((error) => {
        console.error(error);
        setSnackbarMessage("Failed to load department data.");
        setOpenSnackbar(true);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      departmentName: form.departmentName === "",
      departmentDescription: form.departmentDescription === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (hasErrors) {
      setSnackbarMessage("Please complete all required fields.");
      setOpenSnackbar(true);
    } else {
      setLoading(true);
      updateDepartment(id, form)
        .then((response) => {
          console.log(response.data);
          console.log("Department updated");
          navigator("/Departments");
        })
        .catch((error) => {
          console.log(error);
          setSnackbarMessage("Update failed. Please try again.");
          setOpenSnackbar(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ backgroundColor: "whitesmoke", borderRadius: "25px" }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: "100px",
              height: "100px",
              m: 1,
              bgcolor: "ActiveBorder",
            }}
          >
            <BusinessIcon
              sx={{
                width: "70px",
                height: "70px",
              }}
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Department
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="departmentName"
                  required
                  fullWidth
                  id="departmentName"
                  label="Department Name"
                  autoFocus
                  value={form.departmentName}
                  onChange={handleChange}
                  error={errors.departmentName}
                  helperText={
                    errors.departmentName ? "Department name is required." : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="departmentDescription"
                  label="Department Description"
                  name="departmentDescription"
                  autoComplete="family-name"
                  value={form.departmentDescription}
                  onChange={handleChange}
                  error={errors.departmentDescription}
                  helperText={
                    errors.departmentDescription
                      ? "Department description is required."
                      : ""
                  }
                />
              </Grid>
            </Grid>
            <Box sx={{ m: 2, position: "relative" }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{ backgroundColor: "#5a7d6d", borderRadius: "25px" }}
              >
                Update Department
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={() => setOpenSnackbar(false)}
            >
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={() => setOpenSnackbar(false)}
                severity="error"
              >
                {snackbarMessage}
              </MuiAlert>
            </Snackbar>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default EditDepartment;
