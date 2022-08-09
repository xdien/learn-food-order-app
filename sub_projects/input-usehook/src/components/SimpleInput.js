import { useEffect, useState } from "react";
import useInput from "../hook/use-input";

const SimpleInput = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangedHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameResetinput,
  } = useInput((value) => {
      return value.trim() !== '';
  });

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInpuHasError,
    valueChangeHandler: emailInputChangedHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailResetInput,
  } = useInput((value) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  });

  useEffect(() => {
    if (nameInputHasError && emailInpuHasError) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!nameInputHasError && !emailInpuHasError) {
      return;
    }
    emailResetInput();
    nameResetinput();
  };

  const nameinputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInpuHasError
    ? "form-control "
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameinputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangedHandler}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
        />
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          onChange={emailInputChangedHandler}
          onBlur={emailInputBlurHandler}
          type="email"
          id="email"
        />
      </div>

      {nameInputHasError && <p>Invalid</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
