import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { createDepartment } from "../services/DepartmentService";
import BusinessIcon from "@mui/icons-material/Business";
const defaultTheme = createTheme();

function AddDepartment() {
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
      createDepartment(form)
        .then((response) => {
          console.log(response.data);
          console.log("user registered");
          navigator("/Departments");
        })
        .catch((error) => {
          console.log(error);
          setSnackbarMessage("Registration failed. Please try again.");
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
            Add Department
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
                    errors.departmentName ? "department name is required." : ""
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
                      ? "departmentDescription is required."
                      : ""
                  }
                  sx={{
                    height: "100px",
                    "& .MuiInputBase-root": {
                      height: "100%", // Ajusta la altura del área de entrada de texto
                      alignItems: "flex-start", // Alinea el texto al principio de la caja
                    },
                    "& .MuiInputLabel-root": {
                      transform: "translate(14px, 15px) scale(1)", // Ajusta la posición del label
                    },
                    "& .MuiFormHelperText-root": {
                      position: "absolute",
                      bottom: "-20px", // Ajusta la posición del helper text si es necesario
                    },
                  }}
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
                Add Department
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
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
      </Container>
    </ThemeProvider>
  );
}

export default AddDepartment;
