import { useState } from "react";
import sprintLogo from "../../spring-boot.png";
import reactLogo from "../../react.svg";
import viteLogo from "/vite.svg";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} alt="Vite logo" className={styles.logo} />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img
              src={reactLogo}
              alt="React logo"
              className={`${styles.logo} ${styles["logo.react"]}`}
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
              className={styles.logo}
            />
          </a>
        </Box>
        <Box sx={{ color: "white" }}>
          <Typography variant="h2" align="center" mt={4}>
            Vite + React + Spring boot
          </Typography>
          <Typography variant="h3" align="center" mt={2}>
            Developed by Josue Alvarado Rivera
          </Typography>
        </Box>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} alt="Vite logo" className={styles.logo} />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img
              src={reactLogo}
              alt="React logo"
              className={`${styles.logo} ${styles["logo.react"]}`}
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
              className={styles.logo}
            />
          </a>
        </Box>
        <Box sx={{ color: "white" }}>
          <Typography variant="h2" align="center" mt={4}>
            Vite + React + Spring boot
          </Typography>
          <Typography variant="h3" align="center" mt={2}>
            Developed by Josue Alvarado Rivera
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}

export default Home;
