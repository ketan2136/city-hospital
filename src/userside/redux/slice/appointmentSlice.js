import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../fireBase";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

const initialState = {
    isLoading: false,
    apt: [],
    error: null,
}


export const AptdataAdd = createAsyncThunk(
    'appoinment/add',
    async (data) => {
        console.log(data.file.name);
        let idata = { ...data };
        try {
            const rNo = Math.floor(Math.random() * 10);

            const fileRef = ref(storage, 'prescription/' + rNo + "_" + data.file.name);

            await uploadBytes(fileRef, data.file).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        idata = { ...data, file: url, "file_name": rNo + "_" + data.file.name };
                        const docRef = await addDoc(collection(db, "appointment"), idata);
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
)

export const AptdataGet = createAsyncThunk(
    'appoinment/Get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "appointment"));
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


export const AptdataDelete = createAsyncThunk(
    'appoinment/delete',
    async (data) => {
        console.log(data);
        try {

            console.log(data);

            const desertRef = ref(storage, 'prescription/' + data.file_name);
            // console.log(data);
            await deleteObject(desertRef).then(async () => {
                await deleteDoc(doc(db, "appointment", data.id));
                console.log("deleted success");
            })


            // await deleteDoc(doc(db, "appointment", id));

            return data.id;

        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
)

export const AptdataUpdate = createAsyncThunk(
    'appoinment/update',
    async (data) => {
        console.log(data);
        try {

            if (typeof data.file === "string") {
                console.log('add img');

                const updataRef = doc(db, "appointment", data.id);

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
                                const docRef = await addDoc(collection(db, "appointment"), data.id);
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
                state.apt = state.apt.concat(action.payload)
            })

            .addCase(AptdataGet.pending, pending)
            .addCase(AptdataGet.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.apt = action.payload
            })

            .addCase(AptdataDelete.pending, pending)
            .addCase(AptdataDelete.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.apt = state.apt.filter((v) => v.id !== action.payload);
            })

            // .addCase(AptdataUpdate.pending, pending)
            .addCase(AptdataUpdate.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                // state.apt = action.payload;
                let Udata = state.apt.map((v) => {
                    console.log(v);
                    if (v.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return v;
                    }
                })
                state.apt = Udata;
            })
    }
})

export default appinmentSlice.reducer;