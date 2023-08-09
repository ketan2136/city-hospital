import * as ActionTypes from '../ActionType'

export const singupRequest = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNUP_REQUEST, payload: data})
}
export const loginRequest = (data) => (dispatch) => {
    dispatch({type: ActionTypes.LOGIN_REQUEST, payload: data})
}

export const forgotRequest = (data) => (dispatch) => {
    dispatch({type: ActionTypes.FORGOT_REQUEST, payload: data})
}