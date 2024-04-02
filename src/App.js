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
import Appointments from "./pages/Appointments/Appointments";

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
                    <Route path="patient/appointments" element={<Appointments />} />

                    {/* Define a route with PrivateRoute as the element */}
                    {/* <Route element={<PrivateRoute />}> */}
                        {/* Define protected routes as children */}
                        {/* <Route path="userprofile" element={<UpdateProfile />} /> */}
                        {/* <Route path="dashboard" element={<Dashboard />} /> */}
                    {/* </Route> */}
                </Routes>
            </AuthProvider>
        </Router>
    );
}