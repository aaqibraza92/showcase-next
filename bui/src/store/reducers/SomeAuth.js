import { createSlice } from "@reduxjs/toolkit";


const SomeAuth= createSlice({
    name: 'Quantity',
    initialState: {
        qty: 0, //number example
        name: "", // string example
        nav: [] //array of obj example
    },
    reducers:{
        qtyItem(state,action){
            state.qty = action.payload
        },
        NameOfItems(state,action){
            state.name=action.payload
        }
    }
})


export const {qtyItem,NameOfItems}=SomeAuth.actions;
export default SomeAuth.reducer;