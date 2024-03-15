import { configureStore } from "@reduxjs/toolkit";
import SomeAuth from "./reducers/SomeAuth";
import LoginReducer from "./reducers/LoginReducer";
import UserData from "./reducers/UserData";
import CheckoutReducer from "./reducers/CheckoutReducer";
const Store=configureStore({
    reducer: {
        someAuth: SomeAuth,
        loginReducer: LoginReducer,
        CheckoutReducer: CheckoutReducer
    },

});

export default Store;


// // const { configureStore } = require("@reduxjs/toolkit");
// // const { configureStore } = require("@reduxjs/toolkit");
// import { FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER, 
//     persistReducer, persistStore } from "redux-persist"
//   import storage from "redux-persist/lib/storage"
//   import { combineReducers, configureStore, createSelector, createSlice } from "@reduxjs/toolkit"
//   import { HYDRATE, createWrapper } from "next-redux-wrapper"
//   import { hydrate } from "react-dom"
// import HeaderReducer from "./reducers/HeaderReducer"
// import LoginReducer from "./reducers/LoginReducer"
// import SomeAuth from "./reducers/SomeAuth"
//   const mainReducer = (state, action) => {
//     // hydration is a process of filling an object with some data
//     // this is called when server side request happens
//     if (action.type === HYDRATE) {
//       const nextState = {
//         ...state,
//         ...action.payload,
//       };
//       return nextState;
//     } else {
//       // whenever we deal with static rendering or client side rendering, this will be the case
//       // reducers is the combinedReducers
//       return rootReducer(state, action);
//     }
//   };
//   const rootReducer = combineReducers({
//     [HeaderReducer.name]: HeaderReducer.reducer,
//     [LoginReducer.name]: LoginReducer.reducer,
//     [SomeAuth.name]: SomeAuth.reducer,
//   })
//       // ---------------------------------------------------------------------
//       const makeConfiguredStore = () =>
//       configureStore({
//         reducer: rootReducer,
//         devTools: true
//     })
    
//     export const makeStore = () => {
//       const isServer = typeof window == "undefined"
//       if (!isServer) {
//         return makeConfiguredStore()
//       } else {
//         // we need it only on client side
//         const persistConfig = {
//           key: "nextjs",
//           // whitelist: ["auth"], 
//           // blacklist: ['navigation'],  //make sure it does not clash with server keys
//         storage
//       }
//       const persistedReducer = persistReducer(persistConfig, rootReducer)
//       let store = configureStore({
//         reducer: persistedReducer,
//         middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//         //   devTools: process.env.NODE_ENV !== "production"
//       })
//       store.__persistor = persistStore(store) // Nasty hack
//       return store
//     }
//   }
//   // console.log('homeslice.reducer==>>>>>>',hydrate);
  
//   // Previous codes
  
//   export const wrapper = createWrapper(makeStore,{debug: true})