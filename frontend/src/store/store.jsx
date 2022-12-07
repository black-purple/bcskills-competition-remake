import {configureStore} from "@reduxjs/toolkit";
import PatientsReducer from "./features/patientsSlice"

export default configureStore({
    reducer:{
        patients:PatientsReducer,
    }
});