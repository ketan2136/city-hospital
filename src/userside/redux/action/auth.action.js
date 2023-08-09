import * as ActionTypes from '../ActionType'

export const singupRequest = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNUP_REQUEST, payload: data})
}