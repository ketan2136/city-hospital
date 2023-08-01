//2
import { addDoctorApi, deleteDoctorApi, getDoctoApi, putDoctorApi } from '../../../common/apis/doctors.api';
import * as ActionTypes from '../ActionType'

//--------------------------------------Doctors--------------------------------------------//

export const getDoctorData = () => (dispatch) => {
    try {
        dispatch(loading(true))



        setTimeout(function () {

            getDoctoApi()
                .then((response) => dispatch({ type: ActionTypes.GET_DOCTORS, payload: response.data }))
                .catch((error) => dispatch(errorData(error.message)))

            // fetch("http://localhost:3004/doctor")
            //     .then((response) => {
            //         if (response.ok) {
            //             response.json()
            //         }
            //         throw new Error('Somthing went wrong')
            //     })
            //     .then((data) => dispatch({ type: ActionTypes.GET_DOCTORS, payload: data }))
            //     .catch((error) => dispatch(errorData(error.message)))
        }, 3000);

    } catch (error) {
        console.log(error);
        dispatch(errorData(error.message))
    }
}

export const addDoctorData = (data) => (dispatch) => {
    try {
        addDoctorApi(data)
            .then((response) => dispatch({ type: ActionTypes.ADD_DOCTORS, payload: response.data }))
            .catch((error) => dispatch(errorData(error.message)))

        // fetch("http://localhost:3004/doctor", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionTypes.ADD_DOCTORS, payload: data }))
        //     .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const deleteDoctorData = (id) => (dispatch) => {
    try {

        deleteDoctorApi(id)
            .then(dispatch({ type: ActionTypes.DELETE_DOCTORS, payload: id }))
            .catch((error) => console.log(error))
        // fetch("http://localhost:3004/doctor" + id, {
        //     method: "DELETE"
        // })
        //     .then(dispatch({ type: ActionTypes.DELETE_DOCTORS, payload: id }))
        //     .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updateDoctorData = (data) => (dispatch) => {
    try {
        putDoctorApi(data)
            .then(dispatch({ type: ActionTypes.UPDATE_DOCTORS, payload: data }))
            .catch((error) => console.log(error))

        // fetch("http://localhost:3004/Doctor/" + data.id, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(dispatch({ type: ActionTypes.UPDATE_DOCTORS, payload: data }))
        //     .catch((error) => console.log(error))
    } catch (error) {
        console.log(error)
    }
}

export const loading = (status) => (dispatch) => {
    dispatch({ type: ActionTypes.LOADING_DOCTORS, payload: status })
}



export const errorData = (error) => (dispatch) => {
    console.log("error");
    dispatch({ type: ActionTypes.ERROR_DOCTORS, payload: error })
}