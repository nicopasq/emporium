import { configureStore } from "@reduxjs/toolkit";
import backendReducer from "../slices/backendSlice";
import typeParamReducer from "../slices/typeParamSlice";

export default configureStore({
    reducer:{
        backend:backendReducer,
        typeParam:typeParamReducer
    }
})