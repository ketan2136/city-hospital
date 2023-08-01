import * as ActionTypes from '../ActionType';

const inistate = {
    item: [],
    loading: false,
    error: null
}

export const fevoriteReducer = () => (state = inistate, action) => {

    switch (action.type) {
        case ActionTypes.ADD_FEVORITE:
            let item = state.item.some((v) => v.pid === action.payload.pid)

            if (item) {
                let index = state.item.findIndex((v) => v.pid === action.payload.pid);
                state.item[index].qty++;
            } else {
                state.item.push(action.payload)
            }

            return {
                item: state.item,
                loading: false,
                error: null
            };



        default:
            return state;
    }
}
