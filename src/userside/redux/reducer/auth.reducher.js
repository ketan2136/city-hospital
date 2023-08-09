import * as ActionTypes from '../ActionType'

const initState = {
    user: null,
    isLoading: false,
    error: null
}

export const singReducer = (state=initState, action) => {
    switch (action.type) {

        case ActionTypes.SIGNUP_REQUEST:
            return {
                ...state
            }

        default:
            return state
    }
}