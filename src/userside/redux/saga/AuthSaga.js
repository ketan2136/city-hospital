import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from '../ActionType'
import { forgotAPI, loginAPI, logoutAPI, singupAPI } from '../../../common/apis/auth.api'
import { setAlert } from '../slice/alertSlice';
import { authError, emailVerification, forgotRequest, loggedIN } from '../action/auth.action';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupSaga(action) {
    console.log("33333");
    try {
        const user = yield call(singupAPI, action.payload);
        yield put(setAlert({ text: user.massege, color: 'success' }));
        yield put(emailVerification());
    } catch (e) {
        yield put(authError(e.massege));
        yield put(setAlert({ text: e.massege, color: 'error' }));
    }
}


function* loginSaga(action) {
    try {
        const user = yield call(loginAPI, action.payload);
        yield put(loggedIN(user))
        yield put(setAlert({ text: user.massege, color: 'success' }))
    } catch (e) {
        yield put(authError(e.massege));
        yield put(setAlert({ text: e.massege, color: 'error' }))
    }
}

function* forgotSaga(action) {
    try {
        const user = yield call(forgotAPI, action.payload);
        yield put(forgotRequest(user))
        yield put(setAlert({ text: user.massege, color: 'success' }))
    } catch (e) {
        yield put(authError(e.massege));
        yield put(setAlert({ text: e.massege, color: 'error' }))
    }
}

function* logoutSaga(action) {
    try {
        const user = yield call(logoutAPI, action.payload);
        console.log(user);
    } catch (e) {
        yield put(authError(e.massege));
        yield put(setAlert({ text: e.massege, color: 'error' }))
    }
}

function* singupWath() {
    yield takeLatest(ActionTypes.SIGNUP_REQUEST, signupSaga)
}
function* loginupWath() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, loginSaga)
}
function* forgotupWath() {
    yield takeLatest(ActionTypes.FORGOT_REQUEST, forgotSaga)
}

function* logoutWath() {
    yield takeLatest(ActionTypes.LOGOUT, logoutSaga)
}


export function* authsaga() {
    yield all([
        singupWath(),
        loginupWath(),
        forgotupWath(),
        logoutWath(),
    ])
}