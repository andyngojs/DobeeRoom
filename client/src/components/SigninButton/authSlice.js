const initState = {
  id: "",
  name: "",
  email: "",
  status: 0,
  phone: null,
  address: "",
  university: "",
  accessToken: "",
  providerId: "",
};

const authSlice = (state = initState, action) => {
  switch (action.type) {
    case "auth/login":
      const newState = {
        ...state,
        ...action.payload,
      };
      return newState;
    default:
      return state;
  }
};

export default authSlice;
