/* eslint-disable react/prop-types */
import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`; //?aqui sirve para solo tomar los decimales que se necesitan

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name} </h3>
        <div className={classes.description}>{props.description} </div>
        <div className={classes.price}>{price} </div>
      </div>
      <div>
        <MealItemForm
          onAddToCart={addToCartHandler}
          id={props.id}
          onClick={props.onShowCart}
        ></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
