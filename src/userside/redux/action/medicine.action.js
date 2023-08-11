import * as ActionTypes from '../ActionType'
import { setAlert } from '../slice/alertSlice'

export const getMedicineData = () => (dispatch) => {

    fetch("http://localhost:3004/medicines")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ActionTypes.GET_MEDICINE, payload: data }))
        .catch((error) => console.log(error))

}



export const addMedicineData = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setAlert({text: 'add Data', color: 'success'}))
                dispatch({ type: ActionTypes.ADD_MEDICINE, payload: data })
            })
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const deleteMedicineData = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines/" + id, {
            method: "DELETE"
        })
            .then(
                dispatch(setAlert({text: 'Delete Data', color: 'error'})),
                dispatch({ type: ActionTypes.DELETE_MEDICINE, payload: id }))

            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const updateMedicineData = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(
                dispatch(setAlert({text: 'updet Data', color: 'success'})),
                dispatch({ type: ActionTypes.UPDATE_MEDICINE, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}
