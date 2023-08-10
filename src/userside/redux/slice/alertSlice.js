import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    text: '',
    color: '',
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state,action) => {
            console.log(action);
            state.text = action.payload.text;
            state.color = action.payload.color;
        },
        resertAlert: (state,action) => {
            console.log(action);
            state.text = '';
            state.color = '';
        }
    }
})

export const { setAlert, resertAlert } = alertSlice.actions;

export default alertSlice.reducer;