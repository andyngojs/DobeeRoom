const initState = {
  isError: false,
  isSuccess: false,
  post: {},
  postPublic: [],
  message: "",
};

const postSlice = (state = initState, action) => {
  switch (action.type) {
    case "getPostSuccess":
      return {
        ...state,
        postPublic: action.payload,
      };
    case "getPostFailure":
      return {
        ...state,
        message: action.payload,
      };
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

export default postSlice
