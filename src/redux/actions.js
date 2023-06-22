export const logOutAction = {
  type: 'LOG_OUT'
}

export const loggedIn = (payload) => ({
  type: 'LOGIN',
  payload
})

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
  createdPost: (payload) => ({
    type: 'createdPost',
    payload
  }),
};

// Trang Home
export const getPostAction = {
  getPostRequest: (payload) => ({
    type: "getPostRequest",
    payload
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

export const getSavedListAction = {
  getSavedListRequest: (payload) => ({
    type: 'getSavedListRequest',
    payload
  }),
  getSavedListSuccess: (payload) => ({
    type: 'getSavedListSuccess',
    payload
  }),
  getSavedListFailure: () => ({
    type: 'getSavedListFailure'
  })
}

export const savePostAction = {
  savePostRequest: (payload) => ({
    type:'savePostRequest',
    payload
  }),
  savePostSuccess: (payload) => ({
    type: 'savePostSuccess',
    payload
  }),
  savePostFailure: (payload) => ({
    type: 'savePostFailure',
    payload
  })
}

export const deleteSavedPostAction = {
  deleteSavedPostRequest: (payload) => ({
    type: 'deleteSavedPostRequest',
    payload
  }),
  deleteSavedPostSuccess: (payload) => ({
    type: 'deleteSavedPostSuccess',
    payload
  }), 
  deleteSavedPostFailure: () => ({
    type: 'deleteSavedPostFailure'
  })
}

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

// [FEATURE] My Post
export const getPostPending = {
  getPostPendingRequest: (payload) => ({
    type: 'getPostPendingRequest',
    payload
  }), 
  getPostPendingSuccess: (payload) => ({
    type: 'getPostPendingSuccess',
    payload
  }),
  getPostPendingFailure: (payload) => ({
    type: 'getPostPendingFailure',
    payload
  })
}

// Trang user
export const getUserByIDAction = {
  getUserIDRequest: (payload) => ({
    type: 'getUserIDRequest',
    payload
  }),
  getUserIDSuccess: (payload) => ({
    type: 'getUserIDSuccess',
    payload
  }),
  getUserIDFailure: () => ({
    type: 'getUserIDFailure'
  })
}
