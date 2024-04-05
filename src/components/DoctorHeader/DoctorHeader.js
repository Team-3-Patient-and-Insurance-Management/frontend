import { Link } from "react-router-dom";
import { FaHome, FaUserCircle } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import "./DoctorHeader.css";

export default function DoctorHeader() {
    return (
        <div className="doctor-header">
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
                        <Link to="/doctor/appointments">My Appointments</Link>
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