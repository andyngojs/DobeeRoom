import { combineReducers } from "redux";
import postSlice  from "./slices/postSlice";

const rootReducer = combineReducers({
  post: postSlice
});

export default rootReducer;
