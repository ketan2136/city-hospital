import * as ActionType from "../ActionType"

export const getdoctor = () => (dispatch) => {
    const response = fetch("http://localhost:3004/doctors")
        .then(response => response.json())
        .then(response => dispatch({type: ActionType.GET_DOCTOR, payload:response}))
        .catch(error => console.log(error))

}
