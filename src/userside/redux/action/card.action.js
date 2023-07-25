import * as ActionTypes from '../ActionType'


export const addToCart = (id) => (dispatch) => {
    dispatch({type: ActionTypes.ADD_TO_CARD, payload: {pid: id, qty:1}})
}


