import { combineReducers } from "redux";
import { userReducer } from "../users/reducers/userReducer";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
