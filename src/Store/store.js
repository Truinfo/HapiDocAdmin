// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Slice/authSlice';
import doctorCreateReducer from '../Slice/Doctor/DoctorsSlice';
import doctorRequestFtechingReducer from '../Slice/Doctor/DoctorRequestSlice';
import DoctorApprovalReducer from '../Slice/Doctor/DoctorApprovalSlice';

const reducer = {
  auth: authReducer,
  doctor: doctorCreateReducer,
  doctorRequest: doctorRequestFtechingReducer,
  doctorApproval: DoctorApprovalReducer,
  // other reducers can be added here if needed
};

export default configureStore({
  reducer,
});

