
import { createSlice } from "@reduxjs/toolkit";

let item;
if (typeof window !== 'undefined') {
     item = localStorage.getItem('userData')
     item= JSON.parse(item)
}
  
const LoginReducer= createSlice({
    name: "LoginReducer",
    initialState: {
        userData: item,
        nav: []
    },
    reducers: {
        AfterLogin(state,action){
            state.userData=action.payload
            localStorage.setItem("userData",JSON.stringify(action.payload))
        },
        Navigation(state,action){
            state.nav=action.payload
        }
    }

})

export default LoginReducer.reducer
export const {AfterLogin}=LoginReducer.actions