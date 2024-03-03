import React, { useState, useEffect } from 'react';
import { Button } from "primereact/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DoctorProfile.css";
import { json } from 'react-router-dom';
import axios from 'axios'; // Import axios
import "../Home/Home.css";
import { Link } from "react-router-dom";


const DoctorProfile = () => {
  const [image, setImage] = useState(null);
  const [role, setRole] = useState("doctor");
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
  const [specialties, setSpecialties] = useState([]);
  const [fetchedCountry, setFetchedCountry] = useState("");
  const [specialization, setSpecialization] = useState("");

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const host = "http://localhost:8080/";

  const handleSaveDetails = () => {
    // Construct updated user data object
    const userData = {
      // email: email,
      // password: password,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth,
      streetAddress: address,
      country: country,
      state: state,
      city: city,
      zipCode: zipCode,
      doctorLicense: doctorLic,
      specialization: specialization,
    };
    
    axios.post(host + "/updateUser?email=" + email, userData)
      .then(response => {
        console.log('User data updated successfully:', response.data);
        // Optionally, show a success message to the user
      })
      .catch(error => {
        console.error('Error updating user data:', error);
        // Optionally, show an error message to the user
      });
  };

  // Function to format the phone number input
  const formatPhoneNumber = (input) => {
    const cleaned = input.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return `${match[1] ? '1(' + match[1] : ''}${match[2] ? ')' + match[2] : ''}${match[3] ? match[3] + '-' : ''}${match[4] || ''}`;
    }
    return '';
  };

  // Event handler for input change
  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedPhoneNumber);
    
    // Validate the phone number format immediately after each change
    const cleaned = formattedPhoneNumber.replace(/\D/g, '');
    if (!cleaned.match(/^1?\(\d{3}\)\d{3}-\d{4}$/)) {
      setErrorMessage('Phone number must be in the format 1(000)000-0000');
    } else {
      setErrorMessage('');
    }
  };

  const url = "http://localhost:8080/getUser?userID=PZ7OdrlzMxQOf9qUHQ1hwu3wsWx1";

  const formatDateDisplay = (date) => {
    // Check if the date parameter is valid (not null or undefined)
    if (date) {
      // Define options for formatting the date
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      // Use toLocaleDateString with options to format the date
      return date.toLocaleDateString(undefined, options);
    } else {
      // If the date parameter is null or undefined, return an empty string
      return "";
    }
  };

  const fetchInfo = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setEmai(jsonData.email);
      setPassword(jsonData.password);
      setFirstName(jsonData.firstName);
      setLastName(jsonData.lastName);
      setPhoneNumber(jsonData.phoneNumber);
      setAddress(jsonData.streetAddress);
      setFetchedCountry(jsonData.country);
      setState(jsonData.state);
      setCity(jsonData.city);
      setZipCode(jsonData.zipCode);
      setDoctorLic(jsonData.doctorLicense);
      const dateOfBirthDate = new Date(jsonData.dateOfBirth);
      setDateOfBirth(dateOfBirthDate);
      setSpecialization(jsonData.specialization);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log("Saving profile picture...");
  };

  const addSpecialty = (specialty) => {
    setSpecialties([...specialties, specialty]);
  };

  const handleChange = (date) => {
    setDateOfBirth(date);
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

    const renderNavigation = () => {
      return (
      <div className="home-page">
            <header>
                <h1>
                    CareConnect<span>360</span>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <button>
                                <Link className="nav-link" to="/login">
                                    Log in
                                </Link>
                            </button>
                        </li>
                        <li>
                            <button>
                                <Link className="nav-link" to="/signup">
                                    Sign up
                                </Link>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            </div>
      );
    }

  return (

    <div className="doctorprofile-page">
      {renderNavigation()}
      <div className="contentProfile">
        <div className="image-container">
          <div className="right-element">
            
          </div>
          <div
            className="profile-picture-frame"
            onClick={() => document.querySelector(".file-input").click()}
          >
            {image ? (
              <img src={image} alt="Profile" className="profile-picture" />
            ) : (
              <div className="empty-profile">Select a profile picture</div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
              style={{ display: "none" }} // Hide the file input visually
            />
          </div>
          <Button className="saveButton" label="Save" onClick={handleSave} />

          <div className="bottom-element">
            <h2>Dr. {lastName}</h2>
            <p>{doctorLic}</p>
            <p>{specialization}</p>
            <p>Covid Support</p>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <p>Insurance Accepted</p>
          </div>

        </div>
        
        <div className="dpersonal-information">
          <div className="content">
            <p>Login Information</p>
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
            <p>Personal Information</p>
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
              <option disabled selected value="">
                Gender: {gender}
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="tel"
              placeholder="+1(000)000-0000"
              required
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <DatePicker
              selected={dateOfBirth}
              onChange={handleChange}
              placeholderText="Date of Birth"
              dateFormat="yyyy-MM-dd"
            />
            <p>
              Selected Date: {formatDateDisplay(dateOfBirth)}
            </p>
          </div>
          <div className="content">
            <p>Address</p>
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
              <option disabled selected value="">
                Country : {fetchedCountry}
              </option>
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
        </div>

        <button onClick={handleSaveDetails} className="saveDetailsButton">Save Details</button>
      </div>
    </div>
  );
};

export default DoctorProfile;
