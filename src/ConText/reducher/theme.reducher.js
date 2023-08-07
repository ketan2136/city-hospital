import { TOGGLE_THEME } from "../ActionType";


export const ThemeReducher = (state,action) => {
    console.log(action);
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                theme: action.payload,
            }
        default:
            return state;
    }
}