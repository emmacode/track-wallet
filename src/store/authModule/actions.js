export const SIGNIN = "SIGNIN";
export const SIGNIN_ERROR = "SIGNIN_ERROR";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";

export const SIGNUP = "SIGNUP";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const SET_ACCOUNT = "SET_ACCOUNT";
export const SET_ACCOUNT_ERROR = "SET_ACCOUNT_ERROR";
export const SET_ACCOUNT_SUCCESS = "SET_ACCOUNT_SUCCESS"

export const SET_USER_DATA = "SET_USER_DATA";

export const signinUser = data => ({
    type: SIGNIN,
    payload: data
})

export const signupUser = data => ({
    type: SIGNUP,
    payload: data
})

export const setUserData = data => ({
    type: SET_USER_DATA,
    payload: data
});