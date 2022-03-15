import { combineReducers } from 'redux';
import authSlice from '../commons/components/SigninButton/authSlice';

const rootReducer = combineReducers({
    auths: authSlice
});

export default rootReducer;