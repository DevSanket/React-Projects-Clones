import userActionTypes  from "./user.types";

export const setCurrentUser = user => ({
    type:userActionTypes.SET_CURRENT_USER,
    payload:user
});

export const googleSignInStart = () => ({
    type:userActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = (user) => ({
    type:userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload:user
});

export const googleSignInFailure = error => ({
    type:userActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload:error
});

export const EmailSignInStart = (emailAndPassword) => ({
    type:userActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
});

export const EmailSignInSuccess = (user) => ({
    type:userActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload:user
});

export const EmailSignInFailure = error => ({
    type:userActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload:error
});