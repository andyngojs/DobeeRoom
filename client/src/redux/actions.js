const createPost = {
  createPostRequest: (payload) => ({
    type: "createPostRequest",
    payload,
  }),
  createPostSuccess: (payload) => ({
    type: "createPostSuccess",
    payload,
  }),
  createPostFailure: (payload) => ({
    type: "createPostFailure",
    payload,
  }),
};

export const { createPostRequest, createPostSuccess, createPostFailure } =
  createPost;
