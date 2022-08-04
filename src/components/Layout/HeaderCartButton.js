import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon"
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css"
function HeaderCartButton(props) {
    const cartCtx  = useContext(CartContext);
    const numberOfCartItem = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    },0);

    
    const [btnIsHighlight, setBtnIsHightLight] = useState(false);
    const {items} = cartCtx;
    const btnClasses = `${classes.button} ${btnIsHighlight?classes.bump:''}`
    useEffect(()=>{
        setBtnIsHightLight(true);
        let timer = setTimeout(() => {
            setBtnIsHightLight(false);
        }, 300);
        return () =>{
            clearTimeout(timer);
        };
    },[items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberOfCartItem}
        </span>
        <span>

        </span>
    </button>
}
export default HeaderCartButton;