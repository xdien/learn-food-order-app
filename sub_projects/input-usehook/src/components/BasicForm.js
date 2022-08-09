import { useEffect, useState } from "react";
import useInput from "../hook/use-input";

const BasicForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: fenteredName,
    isValid: fenteredNameIsValid,
    hasError: fnameInputHasError,
    valueChangeHandler: fnameInputChangedHandler,
    inputBlurHandler: fnameInputBlurHandler,
    reset: fnameResetinput,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  const fnameinputClasses = fnameInputHasError
    ? "form-control invalid"
    : "form-control";

  // Last name
  const {
    value: lenteredName,
    isValid: lenteredNameIsValid,
    hasError: lnameInputHasError,
    valueChangeHandler: lnameInputChangedHandler,
    inputBlurHandler: lnameInputBlurHandler,
    reset: lnameResetinput,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  const lnameinputClasses = lnameInputHasError
    ? "form-control invalid"
    : "form-control";

  //email input
  const {
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangedHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailResetinput,
  } = useInput((value) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  });
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  useEffect(() => {
    if (fenteredNameIsValid && lenteredNameIsValid && emailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [fenteredNameIsValid, lenteredNameIsValid,emailIsValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    fnameResetinput();
    emailResetinput();
    
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={fnameinputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={fnameInputBlurHandler}
            onChange={fnameInputChangedHandler}
          />
        </div>

        <div className={lnameinputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onBlur={lnameInputBlurHandler}
            onChange={lnameInputChangedHandler}
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailInputChangedHandler}
          onBlur={emailInputBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
