import { combineReducers } from "redux";
import postSlice  from "./slices/postSlice";
import savedPostSlice from "./slices/savedPostSlice";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
  post: postSlice,
  user: userSlice,
  savedPost: savedPostSlice
});

export default rootReducer;
