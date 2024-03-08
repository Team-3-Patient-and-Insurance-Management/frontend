import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LogIn.css";
import { useAuth } from "../../context/AuthContext";

export default function LogIn() {
    const [emailid, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login , logout} = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            await login(emailid, password)
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
        catch{
            setError("Failed to logout")

        }
    }

    return (
        <div className="login-page">
            <div className="content">
                <h2>Sign In</h2>
                {error && <div className="error-message"> {error} </div>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email Address"
                        required
                        value={emailid}
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
                        <Link to="/signup" onClick={handleLogout}>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}