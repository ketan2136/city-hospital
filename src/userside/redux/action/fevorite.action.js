import * as ActionTypes from '../ActionType'


export const addToCart = (id) => (dispatch) => {
    dispatch({type: ActionTypes.ADD_FEVORITE, payload: id})
}
