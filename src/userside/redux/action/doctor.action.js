import * as ActionType from "../ActionType"

export const getdoctor = () => (dispatch) => {
    fetch("http://localhost:3004/doctor")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then((data) => dispatch({ type: ActionType.GET_DOCTOR, payload: data }))
        .catch(error => console.log(error))

}

