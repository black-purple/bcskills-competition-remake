import {configureStore} from "@reduxjs/toolkit";
import PatientsReducer from "./features/patientsSlice"
import adminReducers from "./features/adminSlice"

export default configureStore({
    reducer:{
        patients:PatientsReducer,
        admin:adminReducers
    }
});