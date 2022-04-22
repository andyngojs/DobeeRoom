import { call, put, takeEvery } from "redux-saga/effects";
import { createPost, createUser, getPostPublic, getUser } from "../../api";
import { createPostActions, getPostAction, authAction } from "../actions";

const { createPostSuccess, createPostFailure } = createPostActions

function* getPostPublicSaga() {
  try {
    const res = yield call(getPostPublic)
    const user = yield call(getUser)
    const posts = res.data.data.map((post) => {
      const authorPost = user.data.find(item => item._id === post.created_by)
      return {
        ...post,
        created_by: authorPost.name
      }
    })
    yield put(getPostAction.getPostSuccess(posts))
  } catch (error) {
    yield put(getPostAction.getPostFailure(error))
  }
}

function* createPostSaga(action) {
  try {
    const res = yield call(createPost, action.payload);
    yield put(createPostSuccess(res.data.post));
  } catch (error) {
    yield put(createPostFailure(error));
  }
}

function* authSaga(action) {
  try {
    yield put(authAction.authSuccess(action.payload))
  } catch (error) {
    yield put(authAction.authFailure(error))
  }
}

function* rootSaga() {
  yield takeEvery((action) => action.type === 'authRequest', authSaga)
  yield takeEvery((action) => action.type === 'getPostRequest', getPostPublicSaga)
  yield takeEvery(
    (action) =>
      action.type === 'createPostRequest' && Object.keys(action).length === 2,
    createPostSaga,
  );
}

export default rootSaga;
