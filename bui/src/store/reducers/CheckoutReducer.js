
import { createSlice } from "@reduxjs/toolkit";

let item;
if (typeof window !== 'undefined') {
     item = localStorage.getItem('checkoutData')
     item= JSON.parse(item)
}
  
const CheckoutReducer= createSlice({
    name: "CheckoutReducer",
    initialState: {
        checkoutData: item,
    },
    
    reducers: {
        checkoutContent(state,action){
            state.checkoutData=action.payload
            localStorage.setItem("checkoutData",JSON.stringify(action.payload))
            // console.log("initialState",initialState)
        }
       
    },
    

})

export default CheckoutReducer.reducer
export const {checkoutContent}=CheckoutReducer.actions