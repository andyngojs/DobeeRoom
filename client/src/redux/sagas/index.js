import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { createPost, getPostPublic, getUser } from "../../api";
import { createPostActions, getPostAction, getUserAction } from "../actions";

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

function* rootSaga() {
  yield takeLatest((action) => action.type === 'getPostRequest', getPostPublicSaga)
  yield takeLatest(
    (action) =>
      action.type === 'createPostRequest' && Object.keys(action).length === 2,
    createPostSaga,
  );
}

export default rootSaga;
