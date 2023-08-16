import * as ActionTypes from '../ActionType'

const initState = {
    user: null,
    isLoading: false,
    error: null
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {

        case ActionTypes.SIGNUP_REQUEST:
        case ActionTypes.LOGIN_REQUEST:
        case ActionTypes.LOGOUT_REQUEST:
            
            return {
                user: null,
                isLoading: true,
                error: null
            }

        case ActionTypes.EMAIL_VERIFICATION:
            return {
                user: null,
                isLoading: false,
                error: null
            }

        case ActionTypes.AUTH_ERROR:
            return {
                user: null,
                isLoading: false,
                error: action.payload
            }

        case ActionTypes.LOGGED_IN:
            return {
                user: action.payload,
                isLoading: false,
                error: null
            }
            // case ActionTypes.FORGOT_REQUEST:
            //     return {
            //         user: null,
            //         isLoading: false,
            //         error: null
            //     }
        case ActionTypes.LOGGED_OUT:
            return{
                user: null,
                isLoading: false,
                error: null,
            }
        default:
            return state
    }
}