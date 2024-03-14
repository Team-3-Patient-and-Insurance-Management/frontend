import { Link } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Register.css";

export default function Register() {
    const [role, setRole] = useState("patient");
    const [email, setEmai] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [doctorLic, setDoctorLic] = useState("");
    const [company, setCompany] = useState("");
    const [companyLic, setCompanyLic] = useState("");

    const handleChange = (date) => {
        setDateOfBirth(date);
    };

    const formatDateDisplay = (date) => {
        return date ? date.toLocaleDateString() : "";
    };

    fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
            const countrySelect = document.getElementById("country");

            data.sort((a, b) => {
                const nameA = a.name.common.toUpperCase();
                const nameB = b.name.common.toUpperCase();
                return nameA.localeCompare(nameB);
            });

            // Populate the dropdown with sorted country names
            data.forEach((country) => {
                const option = document.createElement("option");
                option.value = country.name.common;
                option.text = country.name.common;
                countrySelect.add(option);
            });
        })
        .catch((error) => console.error("Error fetching countries:", error));

    const renderInputForm = () => {
        if (role === "patient") {
            return;
        } else if (role === "doctor") {
            return (
                <div className="doctor-info">
                    <p>Doctor Information</p>
                    <div className="doctor-content">
                        <input
                            type="text"
                            placeholder="License Number"
                            required
                            value={doctorLic}
                            onChange={(event) => setDoctorLic(event.target.value)}
                        />
                    </div>
                </div>
            );
        } else if (role === "insuranceProvider") {
            return (
                <div className="insurance-provider">
                    <p>Insurance Information</p>
                    <div className="insurance-content">
                        <input
                            type="text"
                            placeholder="Insurance Company"
                            required
                            value={company}
                            onChange={(event) => setCompany(event.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="License Number"
                            required
                            value={companyLic}
                            onChange={(event) => setCompanyLic(event.target.value)}
                        />
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div className="register-page">
            <div className="content">
                <h2>Registration Form</h2>
                <form>
                    <p>Select User Type</p>
                    <select
                        required
                        value={role}
                        onChange={(event) => setRole(event.target.value)}
                    >
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="insuranceProvider">Insurance Provider</option>
                    </select>

                    <p>Account Information</p>
                    <div className="account-information">
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={email}
                            onChange={(event) => setEmai(event.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <p>Personal Information</p>
                    <div className="personal-information">
                        <input
                            type="text"
                            placeholder="First Name"
                            required
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            required
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <select
                            required
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option
                                disabled
                                selected
                                value=""
                            >
                                Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <input
                            type="number"
                            placeholder="Phone Number"
                            required
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                        />
                        <DatePicker
                            selected={dateOfBirth}
                            onChange={handleChange}
                            placeholderText="Date of Birth"
                            dateFormat="MMMM d, yyyy"
                        />
                        <p>
                            <p>Selected Date: {formatDateDisplay(dateOfBirth)}</p>
                        </p>
                    </div>

                    <p>Address</p>
                    <div className="address">
                        <input
                            type="text"
                            placeholder="Street Address"
                            required
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                        <select
                            id="country"
                            required
                            value={country}
                            onChange={(event) => setCountry(event.target.value)}
                        >
                            <option disabled selectedvalue="">Country</option>
                        </select>
                        <input
                            type="text"
                            placeholder="State"
                            required
                            value={state}
                            onChange={(event) => setState(event.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="City"
                            required
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="ZIP Code"
                            required
                            value={zipCode}
                            onChange={(event) => setZipCode(event.target.value)}
                        />
                    </div>

                    {renderInputForm()}

                    <button>Register</button>
                </form>
                <div className="footer">
                    <p>
                        <Link to="/">Back to Homepage</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}