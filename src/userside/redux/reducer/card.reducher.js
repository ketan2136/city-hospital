import * as ActionTypes from '../ActionType'

const inistate = {
    item: [],
    loading: false,
    error: null
}

export const cartReducer = (state = inistate, action) => {
    console.log(action);

    switch (action.type) {
        case ActionTypes.ADD_TO_CARD:
            let item = state.item.some((v) => v.pid === action.payload.pid)

            if(item) {
                let index = state.item.findIndex((v) => v.pid === action.payload.pid);
                state.item[index].qty++;
                
                
            } else {
                state.item.push(action.payload)
            }

            console.log(state.item);
            return {
                item: state.item,
                loading: false,
                error:null
            };
        default:
            return state;
    }
}


