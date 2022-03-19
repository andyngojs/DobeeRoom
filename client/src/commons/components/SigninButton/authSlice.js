const initState = {
    id: '',
    name: '',
    email: '',
    status: 0,
    phone: null,
    address: '',
    university: '',
    accessToken: ''
};

const authSlice = (state = initState, action) => {
    switch (action.type) {
        case 'auth/login':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default authSlice;