export const createPostActions = {
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

export const getPostAction = {
  getPostRequest: () => ({
    type: "getPostRequest",
  }),
  getPostSuccess: (payload) => ({
    type: "getPostSuccess",
    payload,
  }),
  getPostFailure: (payload) => ({
    type: "getPostFailure",
    payload,
  }),
};

export const authAction = {
  authRequest: (payload) => ({
    type: 'authRequest',
    payload
  }),
  authSuccess: (payload) => ({
    type: 'authSuccess',
    payload
  }),
  authFailure: (payload) => ({
    type: 'authFailure',
    payload
  })
}