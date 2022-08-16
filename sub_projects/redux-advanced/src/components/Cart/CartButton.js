import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(state=> state.cart.totalAmount);
  const isShowModal = useSelector(state=> state.ui.isShowModal);

  const clickCartHandler = (event)  =>{
    !isShowModal?dispatch(uiActions.showModal()):dispatch(uiActions.hiddenModal());
  };


  return (
    <button onClick={clickCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
