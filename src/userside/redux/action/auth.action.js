import * as ActionTypes from '../ActionType'

export const singupRequest = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNUP_REQUEST, payload: data})
}

export const emailVerification = () => (dispatch) => {
    dispatch({type: ActionTypes.EMAIL_VERIFICATION})
}

export const loginRequest = (data) => (dispatch) => {
    dispatch({type: ActionTypes.LOGIN_REQUEST, payload: data})
}
export const authError = (data) => (dispatch) => {
    dispatch({type: ActionTypes.AUTH_ERROR, payload: data})
}

export const loggedIN = (data) => (dispatch) => {
    dispatch({type: ActionTypes.LOGGED_IN, payload: data})
}

export const forgotRequest = (data) => (dispatch) => {
    dispatch({type: ActionTypes.FORGOT_REQUEST, payload: data})
}

export const logout = () => (dispatch) => {
    dispatch({type: ActionTypes.LOGOUT_REQUEST})
}
export const loggedOut = () => (dispatch) => {
    dispatch({type: ActionTypes.LOGGED_OUT})
}