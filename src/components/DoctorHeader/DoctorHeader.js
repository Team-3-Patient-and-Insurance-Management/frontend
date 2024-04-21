import { Link } from "react-router-dom";
import { FaHome, FaUserCircle } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import "./DoctorHeader.css";

export default function DoctorHeader({ theme }) {
    return (
        <div className={`doctor-header ${theme === "dark" ? "dark" : ""}`}>
            <nav>
                <Logo />
                <ul>
                    <li>
                        <Link to="/doctor/dashboard">
                            <FaHome className="dashboard-icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/MyPatients">My Patients</Link>
                    </li>
                    <li>
                        <Link to="/doctor/bedAvailability">Bed Availability</Link>
                    </li>
                    <li>
                        <Link className="user-nav-link" to="/doctor/account">
                            <FaUserCircle className="user-icon" />
                            <p>USER</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}