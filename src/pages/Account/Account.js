import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import userPlaceholder from "../../assets/images/user-placeholder.png";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import "./Account.css";

export default function Account() {
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

    return (
        <div className="account-page">
            <PatientHeader />
            <div className="content">
                <div className="heading">
                    <h1>Account</h1>
                    <div>
                        <Link to="/patient/dashboard">
                            <button className="save-btn">SAVE</button>
                        </Link>
                        <Link to="/">
                            <button className="logout-btn">LOG OUT</button>
                        </Link>
                    </div>
                </div>
                <form>
                    <h2>Basic Information</h2>
                    <div className="basic-information">
                        <div className="portfolio">
                            <img src={userPlaceholder} alt="User Placeholder" />
                            <input type="file" />
                        </div>
                        <div className="basic-information-inputs">
                            <div>
                                <label>First Name</label>
                                <input type="text" />
                                <label>Last Name</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" />
                                <label>Phone Number</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <h2>Patient Information</h2>
                    <div className="patient-information">
                        <div>
                            <h3>Home Address</h3>
                            <div className="home-address">
                                <div>
                                    <label>Street Address</label>
                                    <input type="text" />
                                    <label>Country</label>
                                    <select id="country">
                                        <option disabled selectedvalue="">Country</option>
                                    </select>
                                    <label>State</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>City</label>
                                    <input type="text" />
                                    <label>ZIP Code</label>
                                    <input type="number" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Personal Information</h3>
                            <div className="personal-information">
                                <label>Date of Birth</label>
                                <DatePicker dateFormat="MMMM d, yyyy" />
                                <label>Gender</label>
                                <select>
                                    <option disabled selected value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}