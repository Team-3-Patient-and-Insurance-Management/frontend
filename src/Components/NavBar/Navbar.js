import React, { useState } from "react"
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");
    const navigate=useNavigate();
    async function handleLogout() {
        setError("")
        try {
            await logout()
            navigate('/login')

        }
        catch{
            setError("Failed to logout")

        }
    }
    return (
        
        <nav className="navbar">
            <ul>
                <li>
                    Careconnect 360
                </li>
                <div className="auth-options">
                    <li className="userprofile-link">
                        <Link to="/userprofile" className="profile-link">
                            <svg className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" />
                            </svg>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <button className="profile-link" onClick={handleLogout}>
                            <svg className="logout-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                            </svg>
                            Logout
                        </button>
                    </li>
                </div>
            </ul>
            {error && <div>{error}</div>}
        </nav>

    );
}

export default Navbar;