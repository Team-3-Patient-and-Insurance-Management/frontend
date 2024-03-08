import React, { useState } from "react"
import { useAuth } from "../../context/AuthContext";
import "./UpdateProfile.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
const UpdateProfile = () => {
    const [emailid, setEmaiId] = useState("");

    const { currentUser, updatePassword, updateEmail } = useAuth()
    return (

        <div className="userprofile">

            <Navbar />
            <div className="profile">
                
            </div>
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

export default UpdateProfile;