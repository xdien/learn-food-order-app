import cartReducer from "./cart-items";
import {configureStore} from '@reduxjs/toolkit'
import uiRecducer from "./ui-slice";

const store = configureStore({
    reducer: {cart: cartReducer,ui: uiRecducer }
});

export default store;