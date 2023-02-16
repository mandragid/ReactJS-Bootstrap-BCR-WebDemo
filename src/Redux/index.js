import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";
import { carReducers } from "../Redux/carReducers";
import { userReducer } from "./AuthReducer";
import { bankReducer } from "./bankReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
  bankReducer: bankReducer,
  cars: carReducers,
});

export default rootReducer;
