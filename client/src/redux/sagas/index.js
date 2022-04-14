import { takeLatest, call, put } from "redux-saga/effects";
import { createPost } from "../../api";
import {
  createPostRequest,
  createPostSuccess,
  createPostFailure,
} from "../actions";

function* createPostSaga(action) {
  try {
    const post = yield call(createPost, action.payload);
    yield put(createPostSuccess(post.data));
  } catch (error) {
    console.log(error);
    yield put(createPostFailure(error));
  }
}

export default function* rootSaga() {
  yield takeLatest(createPostRequest, createPostSaga);
}
