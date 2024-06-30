// src/Footer.js
import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Facebook, WhatsApp, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#333", color: "#fff", py: 2 }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4} sx={{ pl: 2, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Información de contacto
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, pl: 1 }}>
            Dirección: Calle Principal #123, Ciudad, País
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, pl: 1 }}>
            Teléfono: +123456789
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, pl: 1 }}>
            Email: info@example.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ pl: 2, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Enlaces útiles
          </Typography>
          <Link
            href="#"
            color="inherit"
            sx={{ display: "block", mb: 1, pl: 1 }}
          >
            Inicio
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ display: "block", mb: 1, pl: 1 }}
          >
            Sobre nosotros
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ display: "block", mb: 1, pl: 1 }}
          >
            Servicios
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ display: "block", mb: 1, pl: 1 }}
          >
            Contacto
          </Link>
        </Grid>
        <Grid item xs={12} md={4} sx={{ pl: 2, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Síguenos en las redes sociales
          </Typography>
          <IconButton color="inherit" href="#">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="#">
            <WhatsApp />
          </IconButton>
          <IconButton color="inherit" href="#">
            <Instagram />
          </IconButton>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        © 2024 Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
