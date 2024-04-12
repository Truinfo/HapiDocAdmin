import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define a thunk for the login operation
export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {

      // Make the API call to authenticate the user
      const response = await fetch('http://localhost:2000/api/adminSignin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      // If login is successful, return the user data
      if (response.ok) {
        const user = await response.data;
        return user;
      } else {
        // If login fails, throw an error with the response status text
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      // Catch any network or parsing errors and throw them
      throw error;
    }
  }
);

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
  isLoading: false, // Add loading state for async operation
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Other reducers as before
  },
  extraReducers: (builder) => {
    builder
      // Handle the pending state (while the login request is ongoing)
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // Handle the fulfilled state (login request is successful)
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;

      })

      // Handle the rejected state (login request failed)
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Define a thunk for the forgot password operation
export const forgotPasswordAsync = createAsyncThunk(
  'auth/forgotPassword',
  async (mobileNumber, thunkAPI) => {
    try {
      // Make the API call to send a verification code to the user's mobileNumber
      const response = await fetch('http://localhost:2000/api/admin-forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber }),
      });
      // If forgot password request is successful, return success message
      if (response.ok) {
        const result = await response.data;
        return result
      } else {
        // If forgot password request fails, throw an error with the response status text
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      // Catch any network or parsing errors and throw them
      throw error;
    }
  }
);

// Define a thunk for the reset password operation
export const resetPasswordAsync = createAsyncThunk(
  'auth/resetPassword',
  async ({ mobileNumber, verificationCode ,password }, thunkAPI) => {
    try {
      // Make the API call to reset the user's password using the verification code
      const response = await fetch('http://localhost:2000/api/admin-reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber, verificationCode ,password }),
      });
      // If reset password request is successful, return success message
      if (response.ok) {
        const result = await response.data
        return result
      } else {
        // If reset password request fails, throw an error with the response status text
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      // Catch any network or parsing errors and throw them
      throw error;
    }
  }
);

// Define initial state for forgot password slice
const initialForgotPasswordState = {
  isSendingVerification: false,
  errorSendingVerification: null,
  isResettingPassword: false,
  errorResettingPassword: null,
  successMessage: null,
};

// Define initial state for reset password slice
const initialResetPasswordState = {
  isResettingPassword: false,
  errorResettingPassword: null,
  successMessage: null,
};

// Create slice for forgot password functionality
export const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState: initialForgotPasswordState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pending state for sending verification code
      .addCase(forgotPasswordAsync.pending, (state) => {
        state.isSendingVerification = true;
        state.errorSendingVerification = null;
        state.successMessage = null;
      })
      // Handle fulfilled state for sending verification code
      .addCase(forgotPasswordAsync.fulfilled, (state, action) => {
        state.isSendingVerification = false;
        state.successMessage = action.payload;
      })
      // Handle rejected state for sending verification code
      .addCase(forgotPasswordAsync.rejected, (state, action) => {
        state.isSendingVerification = false;
        state.errorSendingVerification = action.error.message;
      });
  },
});

// Create slice for reset password functionality
export const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState: initialResetPasswordState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pending state for resetting password
      .addCase(resetPasswordAsync.pending, (state) => {
        state.isResettingPassword = true;
        state.errorResettingPassword = null;
        state.successMessage = null;
      })
      // Handle fulfilled state for resetting password
      .addCase(resetPasswordAsync.fulfilled, (state, action) => {
        state.isResettingPassword = false;
        state.successMessage = action.payload;
      })
      // Handle rejected state for resetting password
      .addCase(resetPasswordAsync.rejected, (state, action) => {
        state.isResettingPassword = false;
        state.errorResettingPassword = action.error.message;
      });
  },
});

// Export actions and reducers
export const { forgotPasswordReducer } = forgotPasswordSlice;
export const { resetPasswordReducer } = resetPasswordSlice;

export const { authReducer, authaction } = authSlice;

// exporting actions and reducers separately
export default authSlice.reducer;

export const { login } = authSlice.actions;