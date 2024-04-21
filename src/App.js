import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Patient from "./pages/Patient/Patient";
import Account from "./pages/Account/Account";
import FindADoctor from "./pages/FindADoctor/FindADoctor";
import FindAnInsurance from "./pages/FindAnInsurance/FindAnInsurance";
import MyInsurance from "./pages/MyInsurance/MyInsurance";
import PatientHistory from "./pages/PatientHistory/PatientHistory";
import BookAppointment from "./pages/BookAppointment/BookApointment";
import Doctor from "./pages/Doctor/Doctor";
import MyPatients from "./pages/MyPatients/MyPatients";
import BedAvailability from "./pages/BedAvailability/BedAvailability";
import PatientInfo from "./pages/PatientInfo/PatientInfo";
import InsuranceDashboard from "./pages/InsuranceProvider/InsuranceProvider";
import InsuranceClients from "./pages/InsuranceClients/InsuranceClients";
import InsurancePlans from "./pages/InsurancePlans/InsurancePlans";
import 'bootstrap/dist/css/bootstrap.min.css';
import FinishAppointment from "./pages/FinishAppointment/FinishAppointment";

export default function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<LogIn />} />
                    <Route path="register" element={<Register />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="patient/dashboard" element={<Patient />} />
                    <Route path="patient/account" element={<Account />} />
                    <Route path="patient/doctor" element={<FindADoctor />} />
                    <Route path="patient/insurance" element={<FindAnInsurance />} />
                    <Route path="patient/myinsurance" element={<MyInsurance />} />
                    <Route path="patient/history" element={<PatientHistory />} />
                    <Route path="/book-appointment/:userId" element={<BookAppointment />} />


                    <Route path="doctor/dashboard/:theme" element={<Doctor />} />
                    <Route path="doctor/myPatients/:theme" element={<MyPatients />} />
                    <Route path="doctor/bedAvailability/:theme" element={<BedAvailability />} />
                    <Route path="doctor/patientInfo/:theme" element={<PatientInfo />} />
                    <Route path="doctor/account/:theme" element={<Account />} />
                    <Route path="doctor/finishAppointment/:theme" element={<FinishAppointment />} />

                    <Route path="patient/history" element={<PatientHistory />} />
                    <Route path="insurance/dashboard" element={<InsuranceDashboard />} />
                    <Route path="insurance/clients" element={<InsuranceClients />} />
                    <Route path="insurance/account" element={<Account />} />
                    <Route path="insurance/plans" element={<InsurancePlans />} />
                    
                </Routes>
            </AuthProvider>
        </Router>
    );
}