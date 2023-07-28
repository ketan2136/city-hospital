import * as ActionTypes from "../ActionType"

const inistate = {
    medicines: [],
    loading: false,
    error: null
}

export const medicineReducher = (state = inistate, action) => {
   
    switch (action.type) {
        case ActionTypes.GET_MEDICINE:
            return {
                ...state,
                medicines: action.payload,
                loading: false,
            }
        case ActionTypes.ADD_DOCTORS:
            return {
                ...state,
                medicines: state.medicines.concat(action.payload)
            }

        case ActionTypes.DELETE_MEDICINE:
            return {
                ...state,
                medicines: state.medicines.filter((v) => v.id != action.payload)
            }

            case ActionTypes.UPDATE_MEDICINE:
                return {
                    ...state,
                    medicines:state.medicines.map((v) => {
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



