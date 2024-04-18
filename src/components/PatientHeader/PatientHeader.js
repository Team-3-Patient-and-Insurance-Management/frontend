import { Link } from "react-router-dom";
import { FaHome, FaUserCircle } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import "./PatientHeader.css";

export default function PatientHeader({ theme }) {
    return (
        <div className={`patient-header ${theme === "dark" ? "dark" : ""}`}>
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
                        <Link to="/patient/history">Patient History</Link>
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