import { takeLatest, call, put } from "redux-saga/effects";
import { createPost } from "../../api";
import {
  createPostRequest,
  createPostSuccess,
  createPostFailure,
} from "../actions";

function* createPostSaga(action) {
  try {
    const post = yield createPost(action.payload).then((res) => {
      if (res.status === 200) {
        return res.data.post;
      }
    });
    yield put(createPostSuccess(post));
  } catch (error) {
    yield put(createPostFailure(error));
  }
}

export default function* rootSaga() {
  yield takeLatest(createPostRequest, createPostSaga);
}
