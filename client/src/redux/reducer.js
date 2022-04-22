import { combineReducers } from "redux";
import postSlice  from "./slices/postSlice";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
  post: postSlice,
  user: userSlice
});

export default rootReducer;
