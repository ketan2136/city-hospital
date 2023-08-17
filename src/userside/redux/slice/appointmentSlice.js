import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../fireBase";


const initialState = {
    isLoading: false,
    apt: [],
    error: null,
}


export const AptdataAdd = createAsyncThunk(
    'appoinment/add',
    async (data) => {
        console.log(data);
        try {
            const docRef = await addDoc(collection(db, "appointment"), data);
            return {
                id: docRef.id,
                ...data
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)


const pending = (state, action) => {
    state.isLoading = true;
    state.error = null;
}


const rejected = (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
}



export const appinmentSlice = createSlice({
    name: 'appoinment',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(AptdataAdd.pending, pending)
            .addCase(AptdataAdd.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.department = action.payload
            })
    }
})

export default appinmentSlice.reducer;