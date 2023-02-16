import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";
import { userReducer } from "./AuthReducer";
import { bankReducer } from "./bankReducer";

const rootReducer = combineReducers({
	authReducer: authReducer,
	userReducer: userReducer,
	bankReducer: bankReducer,
});

export default rootReducer;
