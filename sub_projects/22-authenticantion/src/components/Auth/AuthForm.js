import { useContext, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";
import {useHistory} from 'react-router-dom';

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const emailInpuRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading,setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext)
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function submitHanlder(event) {
    event.preventDefault();
    const enteredEmail = emailInpuRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCimqeBKPHNUaET5irxisNlfEznH52DfKg";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCimqeBKPHNUaET5irxisNlfEznH52DfKg";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          // console.log("Khong ok ", res.json().then(data));
          res.json().then(data=>{
            authCtx.login(data.idToken);
            history.replace("/");
          })
        } else {
          res.json().then((data) => {
            console.log(data);
            let errorMessage = "Authencication failed!";
            alert(errorMessage);
          });
        }
      })
      .catch((err) => {
        console.log("loif ", err);
      });
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHanlder}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailInpuRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            id="password"
            required
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
