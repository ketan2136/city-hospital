import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from '../ActionType'
import { singupAPI } from '../../../common/apis/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* userSaga(action) {
    try {
        const user = yield call(singupAPI, action.payload)
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* singupSaga() {
    yield takeEvery(ActionTypes.SIGNUP_REQUEST, userSaga)
}

export function* authsaga() {
    yield all([
        singupSaga()
    ])
}