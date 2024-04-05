import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../../components/NavBar/Navbar";
import "./UpdateProfile.css";

export default function UpdateProfile() {
    const { currentUser } = useAuth()

    return (
        <div className="updateprofile-page">
            <Navbar />
            <div className="profile"></div>
            <div className="content">
                <form>
                    <input type="email"
                        required
                        defaultValue={currentUser.email} />
                </form>
            </div>
        </div>
    );
}