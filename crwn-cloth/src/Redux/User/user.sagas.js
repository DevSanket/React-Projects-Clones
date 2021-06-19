import { takeLatest,put,all,call } from "@redux-saga/core/effects";
import { auth, createUserProfileDocument, GoogleProvider } from "../../Firebase/firebase.utils";
import { googleSignInFailure, googleSignInSuccess } from "./user.actions";
import userActionTypes from "./user.types";

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(GoogleProvider);
        const userRef = yield call(createUserProfileDocument,user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({id:userSnapshot.id,...userSnapshot.data()}));

        
    }catch(e){
        yield put(googleSignInFailure(e));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart)])
}

