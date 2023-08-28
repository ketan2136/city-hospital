import * as ActionTypes from '../ActionType'

export const addToFevorite = (id) => (dispatch) => {
    console.log(id);
    dispatch({type: ActionTypes.ADD_FEVORITE, payload:{pid:id, qty:1}})
}
export const removeToFevorite = (id) => (dispatch) => {
    console.log(id);
    dispatch({type: ActionTypes.REMOVE_FEVORITE, payload:id})
}
