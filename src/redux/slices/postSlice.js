
const initState = {
  post: {},
  postPublic: [],
  message: "",
  myPostPending: [],
  isError: false,
  isSuccess: false
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
        post: action.payload,
        isSuccess: true
      };
    case "createPostFailure":
      return {
        ...state,
        isError: true
      };
    case 'createdPost': 
      return {
        ...state,
        isSuccess: action.payload,
        isError: action.payload
      }
    case "getPostPendingSuccess":
      return {
        ...state,
        myPostPending: action.payload,
      };
    case "getPostPendingFailure":
      return state;
    default:
      return state;
  }
};

export default postSlice;
