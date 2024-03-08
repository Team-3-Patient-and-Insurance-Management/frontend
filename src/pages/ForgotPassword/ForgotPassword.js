import React, { useState } from "react"
import { useAuth } from "../../context/AuthContext";

import { Link } from "react-router-dom"
import "./ForgotPassword.css";
export default function ForgotPassword() {
    const [emailid, setEmailId] = useState("")
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailid)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <div className="forgot-password">
            <div className="content">
                <h2>Password Reset</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {message && <div className="alert alert-success">{message}</div>}
                <form onSubmit={handleSubmit}>
                    <input type="email"
                        value={emailid}
                        onChange={(e) => setEmailId(e.target.value)}
                        required />

                    <button
                        disabled={loading}>
                        Reset Password
                    </button>
                </form>

                <Link to="/login">Login</Link>
                <div className="footer">
                    <p>
                        Don't have an account?
                        <Link to="/signup">Sign up</Link>
                    </p>
                </div>

            </div>
        </div >
    );
}