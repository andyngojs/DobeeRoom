import { createPostSuccess, createPostFailure } from "../actions";

const initState = {
  isError: false,
  isSuccess: false,
  post: {},
};

export const postSlice = (state = initState, action) => {
  switch (action.type) {
    case createPostSuccess.type:
      return {
        ...state,
        isSuccess: true,
        post: { ...state.post, ...action.payload },
      };
    case createPostFailure.type:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
