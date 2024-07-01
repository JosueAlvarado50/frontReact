import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./assets/Components/NavBar";
import Footer from "./assets/Components/Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Home from "./assets/Components/Pages/Home";
import SignIn from "./assets/Components/Pages/SignIn";
import SignUp from "./assets/Components/Pages/SignUp";
import PersistentDrawerLeft from "./assets/Components/PersistentDrawerLeft";
import Department from "./assets/Components/Department/Department";
import AddDepartment from "./assets/Components/Department/AddDepartment";
import EditDepartment from "./assets/Components/Department/EditDepartment";
import { isUserLoggedIn } from "./assets/Components/services/AuthService";
import PrivateRoute from "./assets/Components/PrivateRoute";
import HomePage from "./assets/Components/FoodOrderApp/components/UI/HomePage";

function App() {
  const [open, setOpen] = useState(false);
  const isAuth = isUserLoggedIn();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundImage:
            "url(https://www.solofondos.com/wp-content/uploads/2015/11/Fondos-web.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          p: {
            xs: 1, // Padding for small screens (like iPhone)
            sm: 2, // Padding for larger screens
          },
        }}
      >
        {isAuth && (
          <PersistentDrawerLeft open={open} toggleDrawer={toggleDrawer} />
        )}

        <Container
          component="div"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mt: 9,
            mb: 4,
            disableGutters: true,
            backgroundColor: "rgba(255, 255, 255, 0)",
            borderRadius: "15px",
            boxShadow: 3,
            maxWidth: "md",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            {/** Rutas para Department */}
            <Route element={<PrivateRoute isAuth={isAuth} />}>
              <Route path="/Departments" element={<Department />} />
              <Route path="/add-department" element={<AddDepartment />} />
              <Route path="/edit-department/:id" element={<EditDepartment />} />
            </Route>
            <Route
              path="*"
              element={<Navigate to={isAuth ? "/Home" : "/Login"} replace />}
            />
            {/** Rutas para Pagina Food order app, el main de esa app contentra su propio route */}
            <Route path="/FoodOrderHomePage" element={<HomePage />} />
          </Routes>
          <Footer />
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
