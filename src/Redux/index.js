import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
	authReducer: authReducer,
	user: userReducers,
});

export default rootReducer;
