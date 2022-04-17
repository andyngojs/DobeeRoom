const initState = {
  isError: false,
  isSuccess: false,
  post: {},
};

export const postSlice = (state = initState, action) => {
  switch (action.type) {
    case "createPostSuccess":
      return {
        ...state,
        isSuccess: true,
        post: action.payload,
      };
    case "createPostFailure":
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
