import { createSlice } from "@reduxjs/toolkit"

const initstate = {
    item: [],
    loading: false,
    error: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initstate,
    reducers: {
        addToCart: (state, action) => {
            console.log(action);
            let item = state.item.some((v) => v.pid === action.payload.pid)

            if (item) {
                let index = state.item.findIndex((v) => v.pid === action.payload.pid);
                state.item[index].qty++;
            } else {
                state.item.push(action.payload)
            }


            state.item = state.item;
            state.loading = state.false;
            state.error = state.null

        },
        increment: (state, action) => {
            let index = state.item.findIndex((v) => v.pid === action.payload);
            state.item[index].qty++;

            state.item = state.item;
            state.loading = state.false;
            state.error = state.null
        },
        decrement: (state, action) => {

            let index1 = state.item.findIndex((v) => v.pid === action.payload);

            if (state.item[index1].qty > 1) {
                state.item[index1].qty--;
            }

            state.item = state.item;
            state.loading = state.false;
            state.error = state.null
        },
        removeCart: (state, action) => {
          
            state.item = state.item.filter((v) => v.pid !== action.payload)
        }
    }
})


export const { increment, decrement, removeCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;