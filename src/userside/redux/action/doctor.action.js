import * as ActionTypes from '../ActionType'

export const getDoctorData = () => (dispatch) => {
    try {
        dispatch(loading(true))
        setTimeout(function () {
            fetch("http://localhost:3004/doctor")
                .then((response) => {
                    if (response.ok) {
                        response.json()
                    }
                    throw new Error('Somthing went wrong')
                })
                .then((data) => dispatch({ type: ActionTypes.GET_DOCTORS, payload: data }))
                .catch((error) => console.log(error))
        }, 3000);

    } catch (error) {
        console.log(error);
    }
}

export const addDoctorData = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/doctor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.ADD_DOCTORS, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const deleteDoctorData = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3004/doctor" + id, {
            method: "DELETE"
        })
            .then(dispatch({ type: ActionTypes.DELETE_DOCTORS, payload: id }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updateDoctorData = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/Doctor/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(dispatch({ type: ActionTypes.UPDATE_DOCTORS, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error)
    }
}

export const loading = (status) => (dispatch) => {
    dispatch({ type: ActionTypes.LOADING_DOCTORS, payload: status })
}
export const error = (error) => (dispatch) => {
    
    dispatch({ type: ActionTypes.LOADING_DOCTORS, payload: status })
}