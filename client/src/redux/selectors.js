export const postSelector = (state) => state.post;
export const postPublicSelector = (state) => state.post.postPublic

export const getSavedPostSelector = (state) => state.savedPost.postSaved

export const myPostPendingSelector = (state) => state.post.myPostPending

export const getUserCurrSelector = (state) => state.user.userCurr

export const checkIsLogged = (state) => state.user.isLogged

export const getIsSuccess = (state) => state.post.isSuccess
export const getIsError = (state) => state.post.isError
