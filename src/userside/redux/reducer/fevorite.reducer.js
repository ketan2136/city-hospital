import * as ActionTypes from '../ActionType';

const inistate = {
    item: [],
    loading: false,
    error: null
}

export const fevoriteReducer = () => (state = inistate, action) => {
  
    switch (action.type) {
        case ActionTypes.ADD_FEVORITE:
           
       
         state.item.push(action.payload)
           
        default:
            return state;
    }
}
