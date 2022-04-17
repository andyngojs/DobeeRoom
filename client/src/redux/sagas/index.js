import { call, put, takeEvery } from "redux-saga/effects";
import { createPost } from "../../api";
import { createPostActions } from "../actions";

const { createPostSuccess, createPostFailure } = createPostActions;

function* createPostSaga(action) {
  try {
    const res = yield call(createPost, action.payload);
    yield put(createPostSuccess(res.data.post));
  } catch (error) {
    yield put(createPostFailure(error));
  }
}

function* rootSaga() {
  yield takeEvery(
    (action) =>
      action.type === "createPostRequest" && Object.keys(action).length === 2,
    createPostSaga,
  );
}

export default rootSaga;
