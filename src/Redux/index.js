import { combineReducers } from "redux";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers ({
    authReducer : authReducer, 
})

export default rootReducer