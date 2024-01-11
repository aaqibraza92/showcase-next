import { configureStore } from "@reduxjs/toolkit";
import SomeAuth from "./reducers/SomeAuth";
import LoginReducer from "./reducers/LoginReducer";
const Store=configureStore({
    reducer: SomeAuth,
    reducer: LoginReducer
});

export default Store;