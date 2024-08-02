import { createSlice } from "@reduxjs/toolkit";

export const typeParamSlice = createSlice({
    name:"typeParam",
    initialState:{
        typeParam : 'all'
    },
    reducers:{
        setType: (state, action) => {
            state.typeParam = action.payload
        }
    }
})

export const {setType} = typeParamSlice.actions

export default typeParamSlice.reducer