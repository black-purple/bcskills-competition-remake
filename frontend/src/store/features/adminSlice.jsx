import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    adminInfo:{},
    isloggedIn:''
}
// localStorage.getItem("loggedin")
const adminSlice = createSlice({
    name:'admin',
    initialState,
    reducers:{
        loggin:(state,action)=>{
            state.isloggedIn=localStorage.getItem("loggedin");
            localStorage.setItem("loggedin", action.payload);
        },
        addAdmin:(state,action)=>{
            state.adminInfo=action.payload;
        }
    }
})
export default adminSlice.reducer;
export const {loggin, addAdmin} = adminSlice.actions; 
export const islogged = state=>state.admin.isloggedIn;
export const admininfo = state=>state.admin.adminInfo;