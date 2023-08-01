import { createSlice } from "@reduxjs/toolkit"

const initstate = {
    item: [],
    loading: false,
    error: null
}

export const cartSlice = createSlice ({
    name: 'cart',
    initialState: initstate,
    reducers: {
        
    }
})