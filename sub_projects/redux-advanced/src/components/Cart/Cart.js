import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector(state =>state.cart.items);
  let elmItems = items.map(value=>{
    return <CartItem
        item={{ title: value.name, quantity: value.amount, total: value.amount*value.price, price: value.price }}
      />
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{elmItems}
      </ul>
    </Card>
  );
};

export default Cart;
