import { call, put, takeEvery } from "redux-saga/effects";
import {
  createPost,
  deleteSavedPost,
  getMyPostPending,
  getPostPublic,
  getSavedList,
  getTotalPost,
  getUser,
  getUserByID,
  savePost,
} from "../../api";
import {
  createPostActions,
  getPostAction,
  authAction,
  savePostAction,
  getSavedListAction,
  deleteSavedPostAction,
  getPostPending,
  getUserByIDAction,
} from "../actions";

const { createPostSuccess, createPostFailure } = createPostActions;

function* getPostPublicSaga(action) {
  try {
    const res = yield call(getPostPublic, action.payload);
    yield put(getPostAction.getPostSuccess(res.data.data));
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
    if (res.status === 200) {
      yield put(getSavedListAction.getSavedListSuccess(res.data.saved_list));
    }
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

function* getPostPendingSaga(action) {
  try {
    const res = yield call(getMyPostPending, action.payload);
    yield put(getPostPending.getPostPendingSuccess(res.data.data));
  } catch (e) {
    yield put(getPostPending.getPostPendingFailure());
  }
}

function* getUserIDSaga(action) {
  try {
    const res = yield call(getUserByID, action.payload);
    yield put(getUserByIDAction.getUserIDSuccess(res.data.user));
  } catch (error) {
    console.log(error)
    yield put(getUserByIDAction.getUserIDFailure())
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
    (action) =>
      action.type === "getSavedListRequest" && Object.keys(action).length === 2,
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
  yield takeEvery(
    (action) =>
      action.type === "getPostPendingRequest" &&
      Object.keys(action).length === 2,
    getPostPendingSaga,
  );
  yield takeEvery((action) =>
  action.type === "getUserIDRequest" &&
  Object.keys(action).length === 2, getUserIDSaga)
}

export default rootSaga;
