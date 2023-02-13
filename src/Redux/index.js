import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import { handleName } from "./carAction";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
  authReducer: authReducer,
  user: userReducers,
  name: handleName,
});

export default rootReducer;
