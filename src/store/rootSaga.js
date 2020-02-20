import { all } from "redux-saga/effects";

import authsSaga from "./authModule/saga";

export default function* rootSaga() {
    yield all([
        authsSaga(),
    ]);
}
