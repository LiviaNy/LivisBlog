import { combineReducers } from "redux";
import { userReducer } from "../users/reducers/userReducer";
import { commentReducer } from "../comment/reducers/commentReducer";

const rootReducer = combineReducers({
  userReducer,
  commentReducer,
});

export default rootReducer;
