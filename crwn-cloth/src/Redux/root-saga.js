import { all,call } from "@redux-saga/core/effects";
import { fetchCollectionsStart } from "./shop/shop.saga";
import { userSagas } from "./User/user.sagas";

export default function* rootSaga(){
    yield all([
        call(fetchCollectionsStart),
        call(userSagas)
    ])
}