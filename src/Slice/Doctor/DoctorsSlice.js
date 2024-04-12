import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"

// Define the initial state
const initialState = {
  doctors: [],
  status: 'idle', // or 'loading', 'succeeded', 'failed'
  error: null,
};


export const doctorRequestAsync = createAsyncThunk(
  'doctors/requestDoctors',
  async (data, thunkAPI) => {
    try {
      // Make the API call to authenticate the user
      const response = await axios.post('http://localhost:2000/api/doctors/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Specify content type as multipart/form-data
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

// Define the doctors slice
const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(doctorRequestAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(doctorRequestAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.doctors = action.payload; // Use the transformed payload
      })
      .addCase(doctorRequestAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



// Export the async thunk action creator and the doctors slice reducer


export const { doctorReducer, doctoraction } = doctorsSlice;
export default doctorsSlice.reducer;





// export const { resetPasswordReducer } = resetPasswordSlice;

