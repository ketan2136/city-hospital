//4
import * as ActionTypes from "../ActionType"

const initialState = {
    doctors: [],
    loading: false,
    error: null
}

export const doctorReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionTypes.LOADING_DOCTORS:
            return {
                doctors: [],
                loading: true,
                error:null
            }
        case ActionTypes.ERROR_DOCTORS:
            return {
                doctors: [],
                loading: true,
                error:null
            }
        case ActionTypes.GET_DOCTORS:
            return {
                ...state,
                doctors: action.payload,
                loading: false
            }

        case ActionTypes.ADD_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.concat(action.payload)
            }

        case ActionTypes.DELETE_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.filter((v) => v.id != action.payload)
            }

        case ActionTypes.UPDATE_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v;
                    }
                })
            }

        default:
            return state
    }
}
