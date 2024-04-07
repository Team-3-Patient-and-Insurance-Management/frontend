import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import { AuthProvider } from "./context/AuthContext";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "./Components/PrivateRoute";

export default function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<LogIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    
                    {/* Define a route with PrivateRoute as the element */}
                    <Route element={<PrivateRoute />}>
                        {/* Define protected routes as children */}
                        <Route path="userprofile" element={<UpdateProfile />} />
                        <Route path="dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}