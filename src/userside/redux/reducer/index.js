import { combineReducers } from "redux";
import { counterReducher } from "./counter.reducer";


export const rootReducer = combineReducers({
    counter: counterReducher
})