import * as ActionType from '../ActionType';

const inistate = {
    count: 0
}

export const counterReducher = (state = inistate, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.INCREMENT_COUNTER:
            return {
                count: state.count + 1
            };
        case ActionType.DECREMENT_COUNTER:
            return {
                count: state.count - 1
            };
        default:
            return(state);
    }
}