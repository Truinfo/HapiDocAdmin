import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    doctors: [],
    status: 'idle',
    error: null,
};


export const doctorsApprovalAsync = createAsyncThunk(
    "doctor/doctorApproval",
    async ({ doctorId, status }, thunkAPI) => {
        try {
            // Make the API call to update doctor approval status
            const response = await axios.put(`http://localhost:2000/api/doctor/Approval/${doctorId}`, { status }, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            // Transform the Axios response object to fit the Redux state structure
            const responseData = response.data;
            return responseData;
        } catch (error) {
            // Catch any network or parsing errors and throw them
            throw error;
        }
    }
);

const doctorApprovalSlice = createSlice({
    name: "doctorList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(doctorsApprovalAsync.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(doctorsApprovalAsync.fulfilled, (state, action) => {
                state.status = "success"
                state.doctors = action.payload
            })
            .addCase(doctorsApprovalAsync.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }

})


// export const { doctorApprovalReducer, doctorApprovalAction } = doctorApprovalSlice
export default doctorApprovalSlice.reducer