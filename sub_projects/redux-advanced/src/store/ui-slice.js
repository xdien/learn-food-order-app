import { createSlice } from "@reduxjs/toolkit";

const initialUI = {
    isShowModal: false
}

const uiSlice = createSlice({
    initialState: initialUI,
    name: "ui",
    reducers: {
        hiddenModal(state) {
            state.isShowModal = false;
        },
        showModal(state) {
            console.log("show cart ");
            state.isShowModal = true;
        },
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;