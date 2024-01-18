
import { createSlice } from "@reduxjs/toolkit";

// let item;
// if (typeof window !== 'undefined') {
//      item = localStorage.getItem('userData')
//      item= JSON.parse(item)
// }
  
const HeaderReducer= createSlice({
    name: "HeaderReducer",
    initialState: {
        nav: []
    },
    reducers: {
        Navigation(state,action){
            state.nav=action.payload
        }
    }

})

export default HeaderReducer.reducer
export const {Navigation}=HeaderReducer.actions