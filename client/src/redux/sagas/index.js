import { takeLatest, put, takeLeading } from 'redux-saga/effects';
import { setUser, getUserCurrent } from '../actions';
import { getUser, createUser } from '../../api';

export function* createUserSaga(action) {
    yield getUser().then(res => {
        const userSignedIn = res.data.find(user => user.email === action.payload.email);
        if (!(!!userSignedIn)) {
            createUser(action.payload);
        }
    });
};

export function* getUserCurrentSaga(action) {
    yield getUser().then(res => {
        const userCurrent = res.data.find(user => user.email === action.payload.email);
        action.payload = userCurrent;
        put(action);
    })
}

export default function* rootSaga() {
    yield takeLatest(setUser().type, createUserSaga);
    yield takeLatest(getUserCurrent().type, getUserCurrentSaga);
};