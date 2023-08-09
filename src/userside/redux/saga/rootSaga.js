import { all } from "redux-saga/effects"
import { allSaga, authsaga } from "./AuthSaga"

export function* rootSaga() {
    yield all ([
        authsaga()
    ])
}