import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    doctors: [],
    status: 'idle',
    error: null,
};


const DoctorsListAsync = createAsyncThunk([
    "doctor/ListFetching",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:2000/api/doctors/DoctorsList');

            if (response.status === 200) { // Check the status directly
                return response.data; // Return the response data
            } else {
                throw new Error('Failed to fetch doctors'); // Throw an error if the status is not 200
            }
        } catch (error) {
            throw error;
        }
    }
])

const doctorListSlice = createSlice({
name:"doctorList",
initialState,
reducers:{},
extraReducers:(builder)=>{
    builder
    .addCase(DoctorsListAsync.pending,(state,action)=>{
        state.status = "loading"
    })
    .addCase(DoctorsListAsync.fulfilled,(state,action)=>{
        state.status = "success"
        state.doctors = action.payload
    })
    .addCase(DoctorsListAsync.rejected,(state,action)=>{
        state.status = "failed"
        state.error = action.error.message
    })
}

})


export const{doctorListReducer,doctorListAction} = doctorListSlice
export default doctorListSlice.reducer