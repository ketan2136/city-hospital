import * as ActionTypes from '../ActionType';

const inistate = {
    item: [],
    loading: false,
    error: null
}

export const fevoriteReducer = (state = inistate, action) => {
    console.log(action, state.item);
    switch (action.type) {
        case ActionTypes.ADD_FEVORITE:

            let item = state.item.find((v) => v.pid === action.payload.pid)

            console.log(item);

            let newfav;

            if (item) {
                newfav = state.item.filter((v) => v.pid !== action.payload.pid);
                state.item = newfav
            } else {
                state.item.push(action.payload)
            }

            return {
                item: state.item,
                loading: false,
                error: null
            };

        case ActionTypes.REMOVE_FEVORITE:
            return {
                ...state,
                item: state.item.filter((v) => v.pid !== action.payload)
            }

        default:
            return state;
    }
}
