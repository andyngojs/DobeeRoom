import { combineReducers } from "redux";
import authSlice from "../components/SigninButton/authSlice";
import sideBarSlice from "../components/Sidebar/sideBarSlice";

const rootReducer = combineReducers({
  auths: authSlice,
  activeTab: sideBarSlice,
});

export default rootReducer;
