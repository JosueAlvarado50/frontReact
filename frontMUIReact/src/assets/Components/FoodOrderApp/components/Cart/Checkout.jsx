/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import classes from "./Checkout.module.css";
import { Box, Button, TextField } from "@mui/material";

const isEmpty = (value) => value.trim().length !== 5;
const isNotFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid =
      !isEmpty(enteredPostalCode) && isNotFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
    if (formIsValid) {
      console.log("los datos son validados correctamente");
    }

    //submit cart data
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };
  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <Box className={classes.control}>
        <TextField
          label="Your name"
          variant="outlined"
          fullWidth
          inputRef={nameInputRef}
          error={!formInputsValidity.name}
          helperText={!formInputsValidity.name && "Please enter a valid name!"}
        />
      </Box>
      <Box className={classes.control}>
        <TextField
          label="Street"
          variant="outlined"
          fullWidth
          inputRef={streetInputRef}
          error={!formInputsValidity.street}
          helperText={
            !formInputsValidity.street && "Please enter a valid street!"
          }
        />
      </Box>
      <Box className={classes.control}>
        <TextField
          label="Postal Code"
          variant="outlined"
          fullWidth
          inputRef={postalCodeInputRef}
          error={!formInputsValidity.postalCode}
          helperText={
            !formInputsValidity.postalCode &&
            "Please enter a valid postal code!"
          }
        />
      </Box>
      <Box className={classes.control}>
        <TextField
          label="City"
          variant="outlined"
          fullWidth
          inputRef={cityInputRef}
          error={!formInputsValidity.city}
          helperText={!formInputsValidity.city && "Please enter a valid city!"}
        />
      </Box>
      <Box className={classes.actions}>
        <Button variant="outlined" color="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Confirm
        </Button>
      </Box>
    </form>
  );
};

export default Checkout;
