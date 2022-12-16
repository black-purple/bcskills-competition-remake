import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api/api_data";

// *get
export const getPatients = createAsyncThunk(
  "get/patients",
  async (skip)=>{
    const response = await api.get(`/get/patients?limit=5&skip=${skip}`);
    return response.data;
  }
)
export const getArchivedPatients = createAsyncThunk(
  "get/patients/archived",
  async (skip)=>{
    const response = await api.get(`/get/patients/archived?limit=5&skip=${skip}`);
    return response.data;
  }
)
export const getPatient = createAsyncThunk(
  "get/patient",
  async (cin,apithunk)=>{
    const response = await api.get(`/get/patient/${cin}`);
    return response.data;
  }
)
export const getTraitements = createAsyncThunk(
  "get/traitement",
  async (cin)=>{
    const response = await api.get(`/get/treatment/${cin}`);
    return response.data;
  }
)
// *put

export const editPatient = createAsyncThunk(
  "edit/patient",
  async (data)=>{
    const response = await api.put(`/edit/patient/${data.cin}`,data);
    return response.data;
  }
)
export const archivePatient = createAsyncThunk(
  "add/patient",
  async (id)=>{
    const response = await api.put(`/edit/patient/archive/${id}`);
    return response.data;
  }
)
export const editTraitement = createAsyncThunk(
  "edit/traotement",
  async (data)=>{
    const response = await api.put(`/edit/treatment/${data.treatmentid}`,data);
    return response.data;
  }
)

// *post
export const addPatient = createAsyncThunk(
  "add/patient",
  async (data)=>{
    const response = await api.post(`/new/patient`,data);
    return response.data;
  }
)
export const addTraitement = createAsyncThunk(
  "add/traitement",
  async (data)=>{
    const response = await api.post(`/new/treatment/`,data);
    return response.data;
  }
)


const initialState = {
  value:{
    Patients:{
      data:[],
      status:"",
      loading:true,
      errors:""
    },
    Patient:{
      data:[],
      edited:{status:'',errors:''},
      status:"",
      loading:false,
      errors:""
    },
    Traitement:{
      data:[],
      status:"",
      loading:false,
      errors:""
    },
    ArchivedPatients:{
      data:[],
      status:"",
      loading:true,
      errors:""
    },
    ArchivedPatient:{
      data:{},
      status:"",
      loading:false,
      errors:""
    },
  },
}
const PatientSlice = createSlice({
    name:"patient",
    initialState,
    reducers:{
      claerarchivedpatient:(state,action)=>{
        state.value.Patient.data={}
      }
    },
    extraReducers: {
      //*getPatients
      [getPatients.pending]: (state, action) => {
        state.value.Patients.status = "loading";
        state.value.Patients.loading = true;
      },
      [getPatients.fulfilled]: (state, action) => {
        state.value.Patients.data = action.payload;
        state.value.Patients.status = "success";
        state.value.Patients.loading = false;
      },
      [getPatients.rejected]: (state, action) => {
        state.value.Patients.status = "failed";
        state.value.Patients.errors = action.payload;
        state.value.Patients.loading = false;
      },

      //*getArchivedPatients
      [getArchivedPatients.pending]: (state, action) => {
        state.value.ArchivedPatients.status = "loading";
        state.value.ArchivedPatients.loading = true;
      },
      [getArchivedPatients.fulfilled]: (state, action) => {
        state.value.ArchivedPatients.data = action.payload;
        state.value.ArchivedPatients.status = "success";
        state.value.ArchivedPatients.loading = false;
      },
      [getArchivedPatients.rejected]: (state, action) => {
        state.value.ArchivedPatients.status = "failed";
        state.value.ArchivedPatients.loading = false;
        state.value.ArchivedPatients.errors = action.payload;
      },

      //*getPatient
      [getPatient.pending]: (state, action) => {
        state.value.Patient.status = "loading";
      },
      [getPatient.fulfilled]: (state, action) => {
        state.value.Patient.data = action.payload;
        state.value.Patient.status = "success";
      },
      [getPatient.rejected]: (state, action) => {
        state.value.Patient.status = "failed";
        state.value.Patient.errors = action.payload;
      },
      //*editPatient
      //!
      [editPatient.pending]: (state, action) => {
        state.value.Patient.edited.status = "loading";
      },
      [editPatient.fulfilled]: (state, action) => {
        console.log(action.payload)
        state.value.Patient.data = action.payload;
        state.value.Patient.edited.status = "success";
      },
      [editPatient.rejected]: (state, action) => {
        state.value.Patient.edited.status = "failed";
        state.value.Patient.edited.errors = action.payload;
      },
      //*addPatient
      [addPatient.pending]: (state, action) => {
        state.value.Patients.status = "loading";
      },
      [addPatient.fulfilled]: (state, action) => {
        state.value.Patients.status = "success";
      },
      [addPatient.rejected]: (state, action) => {
        state.value.Patients.status = "failed";
        state.value.Patients.errors = action.payload;
      },    
      //*archivePatient
      [archivePatient.pending]: (state, action) => {
        state.value.ArchivedPatient.status = "loading";
      },
      [archivePatient.fulfilled]: (state, action) => {
        state.value.ArchivedPatient.status = "success";
      },
      [archivePatient.rejected]: (state, action) => {
        state.value.ArchivedPatient.status = "failed";
        state.value.ArchivedPatient.errors = action.payload;
      },
      //*getTraitments
      [getTraitements.pending]: (state, action) => {
        state.value.Traitement.status = "loading";
      },
      [getTraitements.fulfilled]: (state, action) => {
        // state.value.Traitement.data.push(action.payload);
        state.value.Traitement.data= action.payload;
        state.value.Traitement.status = "success";
      },
      [getTraitements.rejected]: (state, action) => {
        state.value.Traitement.status = "failed";
        state.value.Traitement.errors = action.payload;
      },
      //*addTraitments
      [addTraitement.pending]: (state, action) => {
        state.value.Traitement.status = "loading";
      },
      [addTraitement.fulfilled]: (state, action) => {
        // state.value.Traitement.data.push(action.payload);
        state.value.Traitement.data.push(action.payload);
        state.value.Traitement.status = "success";
      },
      [addTraitement.rejected]: (state, action) => {
        state.value.Traitement.status = "failed";
        state.value.Traitement.errors = action.payload;
      },
      //*updatetraitement
      [editTraitement.pending]: (state, action) => {
        state.value.Traitement.status = "loading";
      },
      [editTraitement.fulfilled]: (state, action) => {
        const index = state.value.Traitement.data.findIndex(obj => obj.treatmentid === action.payload.treatmentid);
        // console.log(index)
        console.log('in the state',action.payload)
        state.value.Traitement.data[index] = action.payload;
        state.value.Traitement.status = "success";
      },
      [editTraitement.rejected]: (state, action) => {
        state.value.Traitement.status = "failed";
        state.value.Traitement.errors = action.payload;
      },
    },
})
export default PatientSlice.reducer;
export const {claerarchivedpatient} = PatientSlice.actions;
//patients
export const PatientsState = state=>state.patients.value.Patients.data;
export const PatientsStatus = state=>state.patients.value.Patients.status;
export const PatientsLoading = state=>state.patients.value.Patients.loading;
//archived patients
export const ArchivedPatientsState = state=>state.patients.value.ArchivedPatients.data;
export const ArchivedPatientsStatus = state=>state.patients.value.ArchivedPatients.status;
export const ArchivedPatientsLoading = state=>state.patients.value.ArchivedPatients.loading;
//archived patient
export const PatientState = state=>state.patients.value.Patient.data;
export const PatientStatus = state=>state.patients.value.Patient.status;
//archive patient
export const ArchivePatientsStatus = state=>state.patients.value.ArchivedPatient.status;
//traitement
export const TraitementsState = state=>state.patients.value.Traitement.data;
export const TraitementsStatus = state=>state.patients.value.Traitement.status;
//edit patient
export const PatientEditederr = state=>state.patients.value.Patient.edited.errors;
//edit traitemtn
export const TreitementErr = state=>state.patients.value.Traitement.errors;
