import { useContext } from "react";
import CartIcon from "../Cart/CartIcon"
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css"
function HeaderCartButton(props) {
    const cartCtx  = useContext(CartContext);
    const numberOfCartItem = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    },0);

    return <button className={classes.button} onClick={props.onClick}>
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