import { combineReducers } from "redux";
import postSlice  from "./slices/postSlice";
import savedPostSlice from "./slices/savedPostSlice";
import userSlice from "./slices/userSlice";

const appReducer = combineReducers({
  post: postSlice,
  user: userSlice,
  savedPost: savedPostSlice,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer;
