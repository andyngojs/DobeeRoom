import { call, put, takeEvery } from "redux-saga/effects";
import {
  createPost,
  deleteSavedPost,
  getPostPublic,
  getSavedList,
  getUser,
  savePost,
} from "../../api";
import {
  createPostActions,
  getPostAction,
  authAction,
  savePostAction,
  getSavedListAction,
  deleteSavedPostAction,
} from "../actions";

const { createPostSuccess, createPostFailure } = createPostActions;

function* getPostPublicSaga(action) {
  try {
    const res = yield call(getPostPublic, action.payload);
    const user = yield call(getUser);
    const posts = res.data.data.map((post) => {
      const authorPost = user.data.find((item) => item._id === post.created_by);
      return {
        ...post,
        created_by: authorPost.name,
      };
    });
    yield put(getPostAction.getPostSuccess(posts));
  } catch (error) {
    yield put(getPostAction.getPostFailure(error));
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
    yield put(authAction.authSuccess(action.payload));
  } catch (error) {
    yield put(authAction.authFailure(error));
  }
}

function* getSavedListSaga(action) {
  try {
    const res = yield call(getSavedList, action.payload);
    yield put(getSavedListAction.getSavedListSuccess(res.data.saved_list));
  } catch (error) {
    console.log(error);
    yield put(getSavedListAction.getSavedListFailure());
  }
}

function* savePostSaga(action) {
  try {
    const res = yield call(savePost, action.payload);
    yield put(savePostAction.savePostSuccess(res.data.saved_posts));
  } catch (error) {
    yield put(savePostAction.savePostFailure(error));
  }
}

function* deleteSavedPostSaga(action) {
  try {
    yield call(deleteSavedPost, action.payload);
    yield put(
      deleteSavedPostAction.deleteSavedPostSuccess(action.payload.id_post),
    );
  } catch (error) {
    yield put(deleteSavedPostAction.deleteSavedPostFailure());
  }
}

function* rootSaga() {
  yield takeEvery((action) => action.type === "authRequest", authSaga);
  yield takeEvery(
    (action) => action.type === "getPostRequest",
    getPostPublicSaga,
  );
  yield takeEvery(
    (action) =>
      action.type === "createPostRequest" && Object.keys(action).length === 2,
    createPostSaga,
  );
  yield takeEvery(
    (action) => action.type === "getSavedListRequest" && Object.keys(action).length === 2,
    getSavedListSaga,
  );
  yield takeEvery(
    (action) =>
      action.type === "savePostRequest" && Object.keys(action).length === 2,
    savePostSaga,
  );
  yield takeEvery(
    (action) =>
      action.type === "deleteSavedPostRequest" &&
      Object.keys(action).length === 2,
    deleteSavedPostSaga,
  );
}

export default rootSaga;
