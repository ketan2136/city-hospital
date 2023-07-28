import * as ActionTypes from '../ActionType'

const inistate = {
    item: [],
    loading: false,
    error: null
}

export const cartReducer = (state = inistate, action) => {

    switch (action.type) {
        case ActionTypes.ADD_TO_CARD:
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

        case ActionTypes.ICN_CARD:
            console.log(state.item, action.payload);
            let index = state.item.findIndex((v) => v.pid === action.payload);
            state.item[index].qty++;

            return {
                item: state.item,
                loading: false,
                error: null
            }

        case ActionTypes.DEN_CARD:
            console.log(state.item , action.payload);

            let index1 = state.item.findIndex((v) => v.pid === action.payload);

            if (state.item[index1].qty > 1) {
                state.item[index1].qty--;
            }
            return {
                item: state.item,
                loading: false,
                error: null
            };


            case ActionTypes.REMOVE_CARD:
                return{
                    ...state,
                    item: state.item.filter((v) => v.pid !== action.payload)
                }
        default:
            return state;
    }
}


