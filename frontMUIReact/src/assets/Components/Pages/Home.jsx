import sprintLogo from "../../spring-boot.png";
import reactLogo from "../../react.svg";
import viteLogo from "/vite.svg";
import { Box, Container, Typography } from "@mui/material";

function Home() {
  return (
    <Container
      sx={{
        ml: { sm: 1, xs: 4 },
        width: { sm: "95%", xs: "96%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mb: 1,
          ml: { xs: -2 },
          justifyContent: "center",
          flexDirection: {
            xs: "column", // Layout de columna para pantallas pequeñas
            sm: "row", // Layout de fila para pantallas más grandes
          },
          alignItems: "center", // Centrar contenido en columna
        }}
      >
        <a
          style={{
            marginRight: "15px",
          }}
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={viteLogo}
            alt="Vite logo"
            style={{
              width: "100%",
              maxWidth: "250px",
              margin: "15px",
            }}
          />
        </a>
        <a
          style={{
            marginRight: "15px",
          }}
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            alt="React logo"
            style={{ width: "100%", maxWidth: "150px", margin: "10px" }}
          />
        </a>
        <a
          href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#web"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={sprintLogo}
            alt="Spring Boot logo"
            style={{ width: "100%", maxWidth: "150px", margin: "10px" }}
          />
        </a>
      </Box>
      <Box sx={{ color: "white", mt: 1 }}>
        <Typography variant="h2" align="center" mt={4}>
          Vite + React + Spring boot
        </Typography>
        <Typography variant="h3" align="center" mt={2}>
          Developed by Josue Alvarado Rivera
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
