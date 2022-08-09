import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const cartItemRemoveHandler = (id) =>{
    
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item =>{

  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem name={item.name} 
        price={item.price}
        key={item.id}
        amount={item.amount}
        onRemove={cartItemRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler(null,item)}
        />
      ))}
    </ul>
  );
  const hasItem = cartCtx.items.length > 0;
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const checkOutHandler = () =>{
    setIsCheckOut(true);
  };
  return (<Modal onClose={props.onClose}>
    {cartItems}
    <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
    </div>
    {isCheckOut && <CheckOut /> }
    <div className={classes.actions}>
        <button className={classes['button--alt']
          } onClick={props.onClose}>Close</button>
        {hasItem && <button onClick={checkOutHandler} className={classes.button}>Order</button>}
    </div>
  </Modal>)
};
export default Cart;
