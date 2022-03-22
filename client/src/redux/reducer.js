import { combineReducers } from 'redux';
import authSlice from '../components/SigninButton/authSlice';

const rootReducer = combineReducers({
    auths: authSlice
});

export default rootReducer;