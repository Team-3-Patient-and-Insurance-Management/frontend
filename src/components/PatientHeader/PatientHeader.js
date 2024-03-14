import { Link } from "react-router-dom";
import { FaHome, FaUserCircle } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import "./PatientHeader.css";

export default function PatientHeader() {
    return (
        <div className="patient-header">
            <nav>
                <Logo />
                <ul>
                    <li>
                        <Link to="/patient/dashboard">
                            <FaHome className="dashboard-icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/patient/doctor">Find a Doctor</Link>
                    </li>
                    <li>
                        <Link to="/patient/insurance">Find an Insurance</Link>
                    </li>
                    <li>
                        <Link to="/patient/appointments">My Appointments</Link>
                    </li>
                    <li>
                        <Link className="user-nav-link" to="/patient/account">
                            <FaUserCircle className="user-icon" />
                            <p>USER</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}