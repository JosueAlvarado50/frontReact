/* eslint-disable react/prop-types */
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  return (
    <Box component="li" className={classes["cart-item"]}>
      <Box>
        <Typography variant="h6" component="h2" gutterBottom>
          {props.name}
        </Typography>
        <Box className={classes.summary}>
          <Typography variant="body1" className={classes.price}>
            {price}
          </Typography>
          <Typography variant="body1" className={classes.amount}>
            x {props.amount}
          </Typography>
        </Box>
      </Box>
      <Box
        className={`${classes.actions} ${
          isLargeScreen ? classes.actionsRow : classes.actionsColumn
        }`}
      >
        <Button variant="outlined" color="primary" onClick={props.onRemove}>
          −
        </Button>
        <Button variant="outlined" color="primary" onClick={props.onAdd}>
          +
        </Button>
      </Box>
    </Box>
  );
};

export default CartItem;
