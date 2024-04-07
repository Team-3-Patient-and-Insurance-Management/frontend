import { Link } from "react-router-dom";
import { FaHome, FaUserCircle } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import "./InsuranceHeader.css";

export default function DoctorHeader() {
    return (
        <div className="insurance-header">
            <nav>
                <Logo />
                <ul>
                    <li>
                        <Link to="/insurance/dashboard">
                            <FaHome className="dashboard-icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/insurance/clients">My Clients</Link>
                    </li>
                    <li>
                        <Link to="/insurance/plans">Insurance Plans</Link>
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