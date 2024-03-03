import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import DoctorProfile from "./pages/Profile/DoctorProfile";
import DoctorUser from "./data/Doctor/DoctorUser";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<LogIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="doctor-profile" element={<DoctorProfile />} />
                <Route path="doctorUser" element={<DoctorUser />} />å
            </Routes>
        </Router>
    );
}