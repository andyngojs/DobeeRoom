import { takeLatest } from 'redux-saga/effects';
import { setUser } from '../actions';
import { createUser } from '../../api';

export function* createUserSaga(action) {
    yield createUser(action.payload);
};

export default function* rootSaga() {
    yield takeLatest(setUser().type, createUserSaga);
};