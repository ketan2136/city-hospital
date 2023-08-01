import * as ActionTypes from '../ActionType'


export const addToFevorite = (id) => (dispatch) => {
    dispatch({type: ActionTypes.ADD_FEVORITE, payload: id})
}
