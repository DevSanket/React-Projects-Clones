import { all,call } from "@redux-saga/core/effects";
import { cartSagas } from "./cart/cart.sagas";
import { fetchCollectionsStart, shopSagas } from "./shop/shop.saga";
import { userSagas } from "./User/user.sagas";

export default function* rootSaga(){
    yield all([
        call(fetchCollectionsStart),
        call(userSagas),
        call(cartSagas),
        call(shopSagas)
    ])
}