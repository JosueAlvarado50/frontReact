import { Fragment } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import classes from "./Header.module.css";
import headerFood from "../../assets/HeaderFood.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar className={classes.header}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Meals
          </Typography>
          <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
        </Toolbar>
      </AppBar>
      <Box className={classes["main-image"]}>
        <img src={headerFood} alt="A table full of delicious food!" />
      </Box>
    </Fragment>
  );
};

export default Header;
