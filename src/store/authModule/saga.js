import { put, takeLatest, call, all } from "redux-saga/effects";

import allService from "../../services/allServices";

import {
    SIGNIN,
    SIGNIN_SUCCESS,
    SIGNIN_ERROR,
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    setUserData
} from "./actions";
import { setLoading } from "../utilsModule/actions";

export const authRequest = {
    loginRequest: "loginRequest",
    signupRequest: "signupRequest",
}

function* signinActionSaga(action) {
    try {
        const { data, history } = action.payload;

        yield setLoading(({ request: authRequest.loginRequest, loading: true }));
        const response = yield call(allService.signinUser, data);

        yield put(setLoading({ request: authRequest.loginRequest }));
        if (response.status === 200) {
            yield put(setUserData(response.data.user));
            yield call(allService.setToken, response.data.token);
            yield put({
                type: SIGNIN_SUCCESS,
                payload: response.status
            });
            history.push("/user");
        } else {
            yield put({
                type: SIGNIN_ERROR,
                payload: response.status
            });
        }
    } catch (error) {
        yield put(setLoading({ request: authRequest.loginRequest }));
        yield put({
            type: SIGNIN_ERROR,
            payload: error
        })
    }
}

function* signupActionSaga(action) {
    try {
        const { data, history } = action.payload;
        yield put(
            setLoading(({ request: authRequest.signupRequest, loading: true }))
        );
        const response = yield call(allService.signupUser, data);

        yield put(setLoading({ request: authRequest.signupRequest }));
        if (response.status === 201) {
            const { name, email } = response.data.user;
            yield put(setUserData({ name, email }));
            yield put({
                type: SIGNUP_SUCCESS,
                payload: response.status
            });
            history.push("/account");
        } else {
            yield put({
                type: SIGNUP_ERROR,
                payload: response.status
            });
        }
    } catch (error) {
        yield put(setLoading({ request: authRequest.signupRequest }));
        yield put({
            type: SIGNUP_ERROR,
            payload: error
        });
    }
}

function* signinActionWatcher() {
    yield takeLatest(SIGNIN, signinActionSaga)
}

function* signupActionWatcher() {
    yield takeLatest(SIGNUP, signupActionSaga);
}

export default function* authsSaga() {
    yield all([
        signinActionWatcher(),
        signupActionWatcher()
    ])
}