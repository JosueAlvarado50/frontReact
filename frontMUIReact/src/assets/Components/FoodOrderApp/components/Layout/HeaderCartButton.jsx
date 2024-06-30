import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const [btnIsHightLighted, setBtnIsHightLighted] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const numberCartItems = items.reduce((curNumer, item) => {
    return curNumer + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    btnIsHightLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHightLighted(true);
    const timer = setTimeout(() => {
      setBtnIsHightLighted(false); // con esto se elimina el classes.bump en la condicion de buttonClasses
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>{" "}
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
