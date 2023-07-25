//5
import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { doctorReducer } from "./doctor.reducer";
import { medicineReducher } from "./medicines.reducer";


export const rootReducer = combineReducers({
    counter : counterReducer,
    doctors: doctorReducer,
    medicines: medicineReducher,
})