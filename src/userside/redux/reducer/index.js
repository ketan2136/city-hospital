//5
import { combineReducers } from "redux";
import { doctorReducer } from "./doctor.reducer";
import { medicineReducher } from "./medicines.reducer";
// import { cartReducer } from "./card.reducher";
import { fevoriteReducer } from "./fevorite.reducer";
import  counterReducer  from "../slice/CounterSlice";
import  cartReducer  from "../slice/CartSlice";
import  depadepartmentReducer  from "../slice/DepartmentSlice";


export const rootReducer = combineReducers({
    counter : counterReducer,
    doctors: doctorReducer,
    medicines: medicineReducher,
    cart: cartReducer,
    fevorite: fevoriteReducer,
    department: depadepartmentReducer


})