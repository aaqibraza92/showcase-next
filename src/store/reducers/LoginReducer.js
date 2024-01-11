"use client"
import { createSlice } from "@reduxjs/toolkit";


//  var localData= JSON.parse(localStorage.getItem("userData"))
const LoginReducer= createSlice({
    name: "LoginReducer",
    initialState: {
     userData: JSON.parse(localStorage.getItem("userData")), 
    },
    reducers: {
        AfterLogin(state,action){
            state.userData=action.payload
            JSON.stringify(localStorage.setItem("userData",action.payload))
        }
    }

})

export default LoginReducer.reducer
export const {AfterLogin}=LoginReducer.actions