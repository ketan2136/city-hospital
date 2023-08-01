import { createSlice } from "@reduxjs/toolkit"

const initstate = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initstate,
    reducers: {
        increment: (state, action) => {
            state.count += 1;
        },
        decrement: (state, action) => {
            state.count -= 1;
        }
        
    }
})

export const {  increment, decrement  } = counterSlice.actions;

export default counterSlice.reducer;