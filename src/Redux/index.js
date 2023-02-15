import { combineReducers } from "redux";
import { authReducer } from "../Redux/AuthReducer";
import { carReducers } from "../Redux/carReducers";

const rootReducer = combineReducers({
  authReducer: authReducer,
  cars: carReducers,
});

export default rootReducer;
