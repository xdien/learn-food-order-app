import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../hook/use-fetch";
import useInput from "../../hook/use-input";
import CartContext from "../store/cart-context";
import classes from "./CheckOut.module.css";
import { v4 as uuidv4 } from 'uuid';

function CheckOut(props) {
  const cartCtx = useContext(CartContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: nameValue,
    hasError: nameHasError,
    isValid: nameIsValid,
    inputBlurHandler: nameInputBlurHanlder,
    valueChangeHandler: nameValueChangeHandler,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  const {
    value: streetValue,
    hasError: streetHasError,
    isValid: streetIsValid,
    inputBlurHandler: streetInputBlurHanlder,
    valueChangeHandler: streetValueChangeHandler,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: postalValue,
    hasError: postalHasError,
    isValid: postalIsValid,
    inputBlurHandler: postalInputBlurHanlder,
    valueChangeHandler: postalValueChangeHandler,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: cityValue,
    hasError: cityHasError,
    isValid: cityIsValid,
    inputBlurHandler: cityInputBlurHanlder,
    valueChangeHandler: cityValueChangeHandler,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  //du lieu tra ve
  const applyData = (data) => {
    console.log("Du lieu tra ve ",data);
  };
  const { isLoading, error, sendRequestFn } = useFetch(
    {
      url: "https://hoc-reactjs-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      method: "POST",
    },
    applyData
  );

  useEffect(() => {
    if (cityIsValid && postalIsValid && streetIsValid && nameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [cityIsValid, postalIsValid, streetIsValid, nameIsValid]);
  const submitHandler = (envent) => {
    console.log("Submit ne");
    envent.preventDefault();
    sendRequestFn({
        id: uuidv4(),
      name: nameValue,
      street: streetValue,
      city: cityValue,
      postal: postalValue,
      items: cartCtx.items,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameValueChangeHandler}
          onBlur={nameInputBlurHanlder}
          type="text"
          id="name"
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          onChange={streetValueChangeHandler}
          onBlur={streetInputBlurHanlder}
          type="text"
          id="street"
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input
          onChange={postalValueChangeHandler}
          onBlur={postalInputBlurHanlder}
          type="text"
          id="postal"
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          onChange={cityValueChangeHandler}
          onBlur={cityInputBlurHanlder}
          type="text"
          id="city"
        />
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button
          type="submit"
          disabled={!formIsValid}
          className={classes.submit}
        >
          Comfirm
        </button>
      </div>
    </form>
  );
}

export default CheckOut;
