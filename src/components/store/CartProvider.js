import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
};
const cartReducer = (state, action) =>{
    let updateItems = [];
    switch(action.type)
    {
        case "ADD":
            updateItems = state.items.concat(action.item);
            const totalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {items: updateItems, totalAmount}
        default:
            return defaultCartState;
    }
    return defaultCartState;
};

const CartProvider = (props) =>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);
    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD',item})
    };
    const removeItemFromCartHanlder = id =>{};
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHanlder,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;