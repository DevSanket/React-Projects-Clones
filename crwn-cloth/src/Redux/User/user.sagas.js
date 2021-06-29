import { takeLatest,put,all,call } from "@redux-saga/core/effects";
import { auth, createUserProfileDocument, getCurrentUser, GoogleProvider } from "../../Firebase/firebase.utils";
import { SignInSuccess,SignInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpStart, signUpSuccess } from "./user.actions";
import userActionTypes from "./user.types";

export function* getSnapshotFromUserAuth(userAuth,additionalData) {
    try{
        const userRef = yield call(createUserProfileDocument,userAuth,additionalData);
        const userSnapshot = yield userRef.get();
        yield put(SignInSuccess({id:userSnapshot.id,...userSnapshot.data()}));

        
    }catch(e){
        yield put(SignInFailure(e));
    }
}

export function* signOut() {
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }
    catch(e){
        yield put(signOutFailure(e))
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(GoogleProvider);
        yield getSnapshotFromUserAuth(user)

        
    }catch(e){
        yield put(SignInFailure(e));
    }
}

export function* signUp({payload: { email,password,displayName }}){
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
          );
        yield put(signUpSuccess({user,additionData:{displayName}}));

    }catch(error){
        put(signUpFailure(error));
    }
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START,signUp)
}

export function* signInAfterSignUp({payload:{user,additionData}}){
   
    yield getSnapshotFromUserAuth(user,additionData);
    

}

export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}


export function* signInWithEmail({payload: {email,password}}){
 try{
    const {user} = yield auth.signInWithEmailAndPassword(email,password);
    yield getSnapshotFromUserAuth(user);
 }catch(error){
     put(SignInFailure(error))
 }
}

export function* IsUserAuthenticated(){
        try{
            const userAuth = yield getCurrentUser();
            if(!userAuth) return;
            yield getSnapshotFromUserAuth(userAuth);
        }catch(error){
            yield put(SignInFailure(error));
        }
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,IsUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START,signOut);
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(IsUserAuthenticated),call(onSignOutStart),call(onSignUpStart),
    call(onSignUpSuccess)
    ]);
}

