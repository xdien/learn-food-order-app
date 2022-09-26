import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';


const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  function submitHanlder(event){
    event.preventDefault();
    const enteredPassword = passwordInputRef.current.value;
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCimqeBKPHNUaET5irxisNlfEznH52DfKg", {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredPassword,
        returnSecureToken: false,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(data=>{
      if(data.ok){
        data.json().then(res=>{
          console.log(res);
          history.replace("/");
        });
      }else{
        console.log("loi cap nhat ");
      }
    }).catch(err=>{
      alert("Loi cap nhat ", err);
    });
    
  }
  return (
    <form className={classes.form} onSubmit={submitHanlder}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={passwordInputRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
