import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    doctors: [],
    status: 'idle',
    error: null,
  };

  
  export const doctorFetchRequestAsync = createAsyncThunk(
    'doctors/doctorsRequestFetching',
    async (_, thunkAPI) => { // Since you're not using any data, you can use _ as a placeholder for the first argument
      try {
        const response = await axios.get('http://localhost:2000/api/doctors/requests');
  
        if (response.status === 200) { // Check the status directly
          return response.data; // Return the response data
        } else {
          throw new Error('Failed to fetch doctors'); // Throw an error if the status is not 200
        }
      } catch (error) {
        throw error; // Throw the caught error
      }
    }
  );
  
  const doctorRequestFetchingSlice = createSlice({
    name: 'doctorRequestFetching',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(doctorFetchRequestAsync.pending, (state, action) => {
          state.status = 'loading';
        })
        .addCase(doctorFetchRequestAsync.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.doctors=action.payload
        })
        .addCase(doctorFetchRequestAsync.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

  export const { doctorReducer, doctoraction } = doctorRequestFetchingSlice;
export default doctorRequestFetchingSlice.reducer;