import { set } from '../../utils/LocalStorage';

const initState = {
    id: '',
    name: '',
    email: '',
    status: 0,
    phone: null,
    address: '',
    university: '',
    accessToken: '',
    providerId: '',
};

const authSlice = (state = initState, action) => {
    switch (action.type) {
        case 'auth/register':
            const newState = {
                ...state,
                ...action.payload
            };
            set('INFOR', newState);
            return newState;
        case 'auth/login':
            const userCurrent = {
                ...state,
                ...action.payload
            };
            set('INFOR', userCurrent);
            return userCurrent;
        default:
            return state;
    }
}

export default authSlice;