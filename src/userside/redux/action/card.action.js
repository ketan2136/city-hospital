import * as ActionTypes from '../ActionType'


export const addToCart = (id) => (dispatch) => {
    dispatch({type: ActionTypes.ADD_TO_CARD, payload: {pid: id, qty:1}})
}

export const incrementCart = (id) => (dispatch) => {
    dispatch({type: ActionTypes.ICN_CARD, payload:id})
}
export const decrementCart = (id) => (dispatch) => {
    dispatch({type: ActionTypes.DEN_CARD, payload:id})
}

export const removeCart = (id) => (dispatch) => {
    dispatch({type: ActionTypes.REMOVE_CARD, payload:id})
}

