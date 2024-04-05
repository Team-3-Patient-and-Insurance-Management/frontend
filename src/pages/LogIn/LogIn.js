import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./LogIn.css";

export default function LogIn() {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { login, logout } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            await login(emailId, password)
            alert("Success");
            navigate('/dashboard');
        } catch (error) {
            console.error("Error signing in:", error);
            setError("Invalid email or password");
        }
        setLoading(false);
    };

    async function handleLogout() {
        setError("")
        try {
            await logout()
        }
        catch {
            setError("Failed to logout")
        }
    }

    return (
        <div className="login-page">
            <div className="content">
                <h2>Log In</h2>
                {error && <div className="error-message"> {error} </div>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email Address"
                        required
                        value={emailId}
                        onChange={(event) => setEmailId(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button>Login</button>
                </form>
                <Link to="/forgot-password">Forgot Password?</Link>
                <div className="footer">
                    <p>
                        Don't have an account?
                        <Link to="/register" onClick={handleLogout}>Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}