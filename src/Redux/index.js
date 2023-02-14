import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";
import { userReducer } from "./AuthReducer";

const rootReducer = combineReducers({
	authReducer: authReducer,
	userReducer: userReducer
});

export default rootReducer;
