import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartItems = createSlice({
    name: 'cart',
    initialState: defaultCartState,
    reducers:{
        addItem(state,action) {
            const existingCartItemIndex = state.items.findIndex((item)=>{
                return item.id === action.payload.id;
            });
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItem;
            let updatedItems;
            if(existingCartItem){
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }else{
                updatedItems = state.items.concat(action.payload);
            }
            state.totalAmount = state.totalAmount + action.payload.price * action.payload.amount;
            state.items = updatedItems;
        },

        removeItem(state,action) {
            const rexistingCartItemIndex = state.items.findIndex((item)=>{
                return item.id = action.payload;
            });
            const rexistingCartItem = state.items[rexistingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - rexistingCartItem.price;
            let rupdatedItems;
            if(rexistingCartItem.amount === 1){
                rupdatedItems = state.items.filter(item => item.id !== action.payload);
            }else{
                const updatedItem = {...rexistingCartItem, amount: rexistingCartItem.amount - 1 };
                rupdatedItems = [...state.items];
                rupdatedItems[rexistingCartItemIndex] = updatedItem;
            }
            state.totalAmount = updatedTotalAmount;
            state.items = rupdatedItems;
        }
    }
});
export const cartActions = cartItems.actions;
export default cartItems.reducer;