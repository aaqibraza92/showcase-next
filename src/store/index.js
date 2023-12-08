import { configureStore } from "@reduxjs/toolkit";
import SomeAuth from "./reducers/SomeAuth";
const Store=configureStore({
    reducer: SomeAuth
});

export default Store;