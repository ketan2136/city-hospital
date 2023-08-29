import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Putdepartmentdata, deletedepartmentdata, getdepartmentdata, postdepartmentdata } from "../../../common/apis/department.api";
import { db, storage } from "../../../fireBase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { addDoc, collection } from "firebase/firestore"; 


const initialState = {
    isLoading: false,
    department: [],
    error: null
}


export const FetchDepartment = createAsyncThunk(
    'department/fetch',
    async () => {
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));

        let response = await getdepartmentdata();
        console.log(response);
        return response.data
    }
)
export const Deletedepartmentdata = createAsyncThunk(
    'department/delete',
    async (id) => {
        let response = await deletedepartmentdata(id);
        console.log(response);
        return response.data
    }
)

export const Adddepartmentdata = createAsyncThunk(
    'department/add',
    async (data) => {
        console.log(data);
        console.log(data.file.name);
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Alan",
                middle: "Mathison",
                last: "Turing",
                born: 1912
            });

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        // let idata = { ...data };
        // try {
        //     const rNo = Math.floor(Math.random() * 10);

        //     const fileRef = ref(storage, 'departmentData/' + rNo + "_" + data.file.name);

        //     await uploadBytes(fileRef, data.file).then(async (snapshot) => {
        //         console.log('Uploaded a blob or file!');
        //         await getDownloadURL(snapshot.ref)
        //             .then(async (url) => {
        //                 console.log(url);
        //                 idata = { ...data, file: url, "file_name": rNo + "_" + data.file.name };
        //                 const docRef = await addDoc(collection(db, "department"), idata);
        //                 return {
        //                     id: docRef.id,
        //                     file: url,
        //                     ...data,
        //                     "file_name": rNo + "_" + data.file.name,
        //                 }
        //             })

        //     });

        //     return idata;


        //     // const docRef = await addDoc(collection(db, "appointment"), data);
        //     // return {
        //     //     id: docRef.id,
        //     //     ...data
        //     // }
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        // }
    }

    // let response = await postdepartmentdata(data);
    // console.log(response);
    // return response.data

)

export const Editdepartmentdata = createAsyncThunk(
    'department/Edit',
    async (data) => {
        let response = await Putdepartmentdata(data);
        console.log(response);
        return response.data
    }
)

const hisLoading = (state, action) => {
    state.isLoading = true;
}
const hisError = (state, action) => {
    console.log(state);
    state.isLoading = false;
    state.error = action.error.message;
}

export const departmentSlice = createSlice({
    name: 'department',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchDepartment.pending, hisLoading)
            .addCase(FetchDepartment.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.department = action.payload
            })
            .addCase(FetchDepartment.rejected, hisError)

            .addCase(Adddepartmentdata.fulfilled, (state, action) => {
                console.log(state);
                state.department = state.department.concat(action.payload)
            })
            .addCase(Editdepartmentdata.fulfilled, (state, action) => {
                let Udata = state.department.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })
                state.department = Udata
            })
            .addCase(Deletedepartmentdata.fulfilled, (state, action) => {
                state.department = state.department.filter((v) => v.id !== action.payload)
            })
    }


})

export default departmentSlice.reducer;