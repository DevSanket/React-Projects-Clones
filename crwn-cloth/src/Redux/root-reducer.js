import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./User/user.reducer";


export default combineReducers({
    user : userReducer,
    cart: cartReducer
});

