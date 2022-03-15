const initState = {
    id: '',
    name: '',
    email: '',
    status: 0,
    phone: null,
    address: null,
    university: null,
    accessToken: ''
};

const authSlice = (state = initState, action) => {
    switch (action.type) {
        case 'auth/loginFB':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default authSlice;