import { configureStore } from "@reduxjs/toolkit";
import SomeAuth from "./reducers/SomeAuth";
import LoginReducer from "./reducers/LoginReducer";
import UserData from "./reducers/UserData";
const Store=configureStore({
    reducer: {
        someAuth: SomeAuth,
        loginReducer: LoginReducer,
    },

});

export default Store;