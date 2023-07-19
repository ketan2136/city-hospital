// import { combineReducers } from "redux";
import { combineReducers } from "redux";
import { counterReducher } from "./counter.reducer";
import { fackDoctor } from "./doctor.reducer";


export const rootReducer = combineReducers({
    counter: counterReducher,
    data: fackDoctor
})