import { combineReducers } from "redux";
import regisReducer from "./RegisReducer";
import authReducer from "./AuthReducer";
import carReducer from "./CarReducer"

const rootReducer = combineReducers ({
    regisReducer : regisReducer, 
    authReducer : authReducer, 
    carReducer : carReducer,
})

export default rootReducer