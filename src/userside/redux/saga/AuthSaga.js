import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from '../ActionType'
import { forgotAPI, loginAPI, singupAPI } from '../../../common/apis/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupSaga(action) {
    console.log("33333");
    try {
        const user = yield call(singupAPI, action.payload);
        
        console.log(user);
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        console.log(e);
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* loginSaga(action) {
    try {
        const user = yield call(loginAPI, action.payload);
        
        console.log(user);
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        console.log(e);
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* forgotSaga(action) {
    try {
        const user = yield call(forgotAPI, action.payload);
        
        console.log(user);
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        console.log(e);
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
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


export function* authsaga() {
    yield all([
        singupWath(),
        loginupWath(),
        forgotupWath(),
    ])
}