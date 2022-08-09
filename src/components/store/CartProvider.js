import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
};
const cartReducer = (state, action) =>{
    
    switch(action.type)
    {
        case "ADD":
            console.log(action.item);
            const existingCartItemIndex = state.items.findIndex((item)=>{
                return item.id === action.item.id;
            });
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItem;
            let updatedItems;
            if(existingCartItem){
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }else{
                updatedItems = state.items.concat(action.item);
            }
            const totalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {items: updatedItems, totalAmount};
            break;
        case "REMOVE":
            const rexistingCartItemIndex = state.items.findIndex((item)=>{
                return item.id = action.id;
            });
            const rexistingCartItem = state.items[rexistingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - rexistingCartItem.price;
            let rupdatedItems;
            if(rexistingCartItem.amount === 1){
                rupdatedItems = state.items.filter(item => item.id !== action.id);
            }else{
                const updatedItem = {...rexistingCartItem, amount: rexistingCartItem.amount - 1 };
                rupdatedItems = [...state.items];
                rupdatedItems[rexistingCartItemIndex] = updatedItem;
            }
            return {items:rupdatedItems,totalAmount:updatedTotalAmount}
        default:
            return defaultCartState;
    }
    return defaultCartState;
};

const CartProvider = (props) =>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);
    const addItemToCartHandler = item => {
        console.log("Add ", item.id);
        dispatchCartAction({type: 'ADD',item})
    };
    const removeItemFromCartHanlder = id =>{
        dispatchCartAction({type:"REMOVE",id});
    };
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