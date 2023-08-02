import * as ActionTypes from "../ActionType" 

export const getDepartment = () => (dispatch) => {

    fetch("http://localhost:3004/department")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ActionTypes.GET_DESC, payload: data }))
        .catch((error) => console.log(error))

}

export const addDepartments = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/department", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.ADD_DESC, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
} 