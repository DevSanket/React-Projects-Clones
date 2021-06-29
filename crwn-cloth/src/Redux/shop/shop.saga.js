import { call, put, takeLatest } from "@redux-saga/core/effects";
import { convertCollectionsSnapshotToMap, firestore } from "../../Firebase/firebase.utils";
import ShopActionTypes from "./shop.types";
import { fetchCollectionsSuccess,fetchCollectionsFailure, fetchCollectionStart } from "./shop.actions";
import { all } from "redux-saga/effects";

export function* fetchCollectionAsync() {
    // yield console.log("I am Fired");

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(e){
        yield put(fetchCollectionsFailure(e.message))
    }

    // collectionRef
    // .get()
    // .then(snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch
    // })
}


export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionAsync);
}


export function* shopSagas(){
  yield all([call(fetchCollectionStart)]); 
}
