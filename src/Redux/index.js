import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import { carReducers } from "./carReducers";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
  authReducer: authReducer,
  user: userReducers,
  cars: carReducers,
});

export default rootReducer;
