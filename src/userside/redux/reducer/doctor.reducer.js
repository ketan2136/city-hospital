import * as  ActionType from "../ActionType"

const iniState = {
    doctor: [],
    loading : false,
    error: null
}

export const fackDoctor = (state = iniState, action ) => {
    console.log(action);

    switch(action.type) {
        case ActionType.GET_DOCTOR:
            return {
                ...state,
                doctor:action.payload
            }
            default:
                return state;
    }

}