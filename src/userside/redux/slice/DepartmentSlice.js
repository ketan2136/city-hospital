import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Putdepartmentdata, deletedepartmentdata, getdepartmentdata, postdepartmentdata } from "../../../common/apis/department.api";
import { db, storage } from "../../../fireBase";

import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


const initialState = {
    isLoading: false,
    department: [],
    error: null
}


export const FetchDepartment = createAsyncThunk(
    'department/fetch',
    // async () => {
    //     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    //     let response = await getdepartmentdata();
    //     console.log(response);
    //     return response.data
    // }

    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "department"));
            let data = [];
            querySnapshot.forEach((doc) => {


                data.push({
                    id: doc.id,
                    ...doc.data()

                })
                console.log(data);


            });
            return data;

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)
export const Deletedepartmentdata = createAsyncThunk(
    'department/delete',
    // async (id) => {
    //     let response = await deletedepartmentdata(id);
    //     console.log(response);
    //     return response.data
    // }
    async (data) => {
        console.log(data);
        try {

            console.log(data);

            const desertRef = ref(storage, 'prescription/' + data.file_name);
            // console.log(data);
            await deleteObject(desertRef).then(async () => {
                await deleteDoc(doc(db, "department", data.id));
                console.log("deleted success");
            })


            // await deleteDoc(doc(db, "appointment", id));

            return data.id;

        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
)

export const Adddepartmentdata = createAsyncThunk(
    'department/add',
    async (data) => {
        console.log(data.file.name);
       
        try {
            const rNo = Math.floor(Math.random() * 1000000000000);

            const fileRef = ref(storage, 'prescription/' + rNo + "_" + data.file.name);
            
            let idata = { ...data };

            console.log(fileRef);

            await uploadBytes(fileRef, data.file).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        idata = { ...data, file: url, "file_name": rNo + "_" + data.file.name };
                        const docRef = await addDoc(collection(db, "department"), idata);
                        return {
                            id: docRef.id,
                            file: url,
                            ...data,
                            "file_name": rNo + "_" + data.file.name,
                        }
                    })

            });

            return idata;


            // const docRef = await addDoc(collection(db, "appointment"), data);
            // return {
            //     id: docRef.id,
            //     ...data
            // }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    // let response = await postdepartmentdata(data);
    // console.log(response);
    // return response.data

)

export const Editdepartmentdata = createAsyncThunk(
    'department/Edit',
    // async (data) => {
    //     let response = await Putdepartmentdata(data);
    //     console.log(response);
    //     return response.data
    // }
    async (data) => {
        console.log(data);
        try {

            if (typeof data.file === "string") {
                console.log('add img');

                const updataRef = doc(db, "department", data.id);

                await updateDoc(updataRef, data);

                console.log(data);


            } else {
                console.log('update img');

                const desertRef = ref(storage, 'prescription/' + data.file_name);
                console.log(desertRef);
                let iData = { ...data }
                await deleteObject(desertRef).then(async () => {
                    const rNo = Math.floor(Math.random() * 10);

                    const fileRef = ref(storage, 'prescription/' + rNo + "_" + data.file.name);
        
                    await uploadBytes(fileRef, data.file).then(async (snapshot) => {
                        console.log('Uploaded a blob or file!');
                        await getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                console.log(url);
                                iData = { ...data, file: url, "file_name": rNo + "_" + data.file.name };
                                const docRef = await addDoc(collection(db, "department"), data.id);
                                return {
                                    id: docRef.id,
                                    file: url,
                                    ...data,
                                    "file_name": rNo + "_" + data.file.name,
                                }
                            })
        
                    });
                    
                    
                    console.log('New Upload File Uploaded');

                    // console.log("File deleted successfully");
                    // await deleteDoc(doc(db, "appointment", data.id));
                    // return data.id
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                });
                console.log(iData);
                return iData;
            }

            return data;



        } catch (e) {
            console.error("Error adding document: ", e);
        }
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