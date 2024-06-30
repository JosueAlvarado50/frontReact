import { useState } from "react";
import CartProvider from "../../store/CartProvider";
import Cart from "../Cart/Cart";
import { Container, Box } from "@mui/material";
import Header from "../Layout/Header";
import Meals from "../Meals/Meals";

function HomePage() {
  const [cartIsShowCart, setCartIsShowCart] = useState(false);

  const showCartHandler = () => {
    setCartIsShowCart(true);
  };

  const hideCartHandler = () => {
    setCartIsShowCart(false);
  };

  return (
    <Box
      sx={{
        borderRadius: "5px",
        backgroundColor: "#3f3f3f",
        minHeight: "100vh",
      }}
    >
      <CartProvider>
        <Header onShowCart={showCartHandler} />
        <Container maxWidth="md">
          {cartIsShowCart && <Cart onHideCart={hideCartHandler}></Cart>}
        </Container>
        <main>
          <Meals onShowCart={showCartHandler}></Meals>
        </main>
      </CartProvider>
    </Box>
  );
}

export default HomePage;
