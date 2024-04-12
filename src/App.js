import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./auth/LoginForm";
import SignIn from "./auth/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Appointments from "./pages/Appointments/Appointments";
import Patients from "./pages/Patients/Patients";
import Details from "./pages/Patients/Details";
import Lablist from "./pages/Labs/Lablist";
import Sidebar from "./components/Sidebar";
import Doctor from "./pages/Doctors/Doctor";
import BloodDonor from "./pages/Bloodbank/BloodDonor";
import DoctorProfile from "./pages/Doctors/DoctoProfile";
import Medicines from "./pages/Medicines/Medicines";
import MedicalStoreList from "./pages/MedicalStores/MedicalStoreList";


import DetailsPage from "./pages/Patients/Details";
import Hospitals from "./pages/Clinics/Hospitals";
import HospitalDetail from "./pages/Clinics/HospitalDetail";
import Coupons from "./pages/Coupons/Coupons";
import Payments from "./pages/Payments/Payments";
import Blogs from "./pages/Blog/Blogs";
import BlogDetails from "./pages/Blog/BlogDetails";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import DoctorRequest from "./pages/Doctors/DoctorRequest";
import DoctorDescription from "./pages/Doctors/DoctorDescription";
import DoctorAppointments from "./pages/Doctors/DoctorAppointments";
import MedicalStoreRequest from "./pages/MedicalStores/MedicalStoreRequest";
import StoreProfile from "./pages/MedicalStores/StoreProfile";
import MedicalStoreDescription from "./pages/MedicalStores/MedicalStoreDescription";
import MedicineOrders from "./pages/MedicalStores/MedicineOrders";
import LabProfile from "./pages/Labs/LabProfile";
import TestsOrders from "./pages/Labs/TestsOrders";
import LabsRequest from "./pages/Labs/LabsRequest";
import LabsDescription from "./pages/Labs/LabsDescription";
import ClinicRequest from "./pages/Clinics/ClinicRequest";
import ClinicDescription from "./pages/Clinics/ClinicDescription";
import ClinicAppointments from "./pages/Clinics/ClinicAppointments";
import ConsultDoctorProfile from "./pages/Appointments/DoctoProfile";
import PatientProfile from "./pages/Appointments/PatientProfile";
import ClinicVisits from "./pages/Appointments/ClinicVisits";
import LabTests from "./pages/Appointments/LabTests";
import OrderMedicine from "./pages/Appointments/OrderMedicine";


function App() {

  return (


    <div className="App">

      <BrowserRouter>

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signUp" element={<SignIn />} />
          <Route path="/*" element={
            <Sidebar>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />

                {/**Doctors */}

                <Route path="/doctors" element={<Doctor />} />
                <Route path="/doctor-profile" element={<DoctorProfile />} />
                <Route path="/doctor-request" element={<DoctorRequest />} />
                <Route path="/doctor-description/:id" element={<DoctorDescription />} />
                <Route path="/doctor-appointments" element={<DoctorAppointments />} />

                <Route path="/medicalstore" element={<MedicalStoreList />} />
                <Route path="/store-profile" element={<StoreProfile />} />
                <Route path="/store-request" element={<MedicalStoreRequest />} />
                <Route path="/store-description" element={<MedicalStoreDescription />} />
                <Route path="/store-orders" element={<MedicineOrders />} />


                <Route path="/pharmacy" element={<Medicines />} />
                <Route path="/blood-donors" element={<BloodDonor />} />


                <Route path="/appointments" element={<Appointments />} />
                <Route path="/appointment-patient-profile" element={<PatientProfile />} />
                <Route path="/appointment-consultdoc-profile" element={<ConsultDoctorProfile />} />
                
                <Route path="/clinic-bookings" element={<ClinicVisits />} />
                <Route path="/test-bookings" element={<LabTests />} />
                <Route path="/medicine-bookings" element={<OrderMedicine />} />




                <Route path="/patients" element={<Patients />} />
                <Route path="/patient-profile" element={<DetailsPage />} />
                
                <Route path="/labs" element={<Lablist />} />
                <Route path="/lab-profile" element={<LabProfile />} />
                <Route path="/lab-orders" element={<TestsOrders />} />
                <Route path="/lab-request" element={<LabsRequest />} />
                <Route path="/lab-description/:id" element={<LabsDescription />} />


                <Route path="/clinics" element={<Hospitals />} />
                <Route path="/clinic-profile/:id" element={<HospitalDetail />} />
                <Route path="/coupons" element={<Coupons />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/clinic-request" element={<ClinicRequest />} />
                <Route path="/clinic-description/:id" element={<ClinicDescription />} />
                <Route path="/clinic-appointments" element={<ClinicAppointments />} />


                <Route path="/blog" element={<Blogs />} />
                <Route path="/blog-details/:id" element={<BlogDetails />} />


              </Routes>
            </Sidebar>} />
        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
