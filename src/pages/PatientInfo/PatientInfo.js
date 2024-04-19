import { Link } from "react-router-dom";
import DoctorHeader from "../../components/DoctorHeader/DoctorHeader";
import { useState, useEffect } from 'react';
import "./PatientInfo.css";
import { useLocation } from 'react-router-dom';
import getUserID from "../../contexts/getUserID";
import { useNavigate } from 'react-router-dom';

export default function PatientInfo() {
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const patient = JSON.parse(queryParams.get('patient'));
    const navigate = useNavigate();
    const location = useLocation();
    const patient = location.state;
    const [patientInfo, setPatientInfo] = useState({});
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    console.log("Patient Info: ", patient)

    const [patients, setPatients] = useState([
        {
            name: 'John Doe',
            COVID19details: 'No taste, no smell',
            testResults: 'Positive',
            medicalHistory: 'Asthma',
            insuranceDetails: 'Blue Cross Blue Shield',
            profilePictureUrl: 'https://example.com/profile_picture.jpg'
        },
        {
            name: 'Jane Doe',
            COVID19details: 'Fever, cough',
            testResults: 'Positive',
            medicalHistory: 'Diabetes',
            insuranceDetails: 'Aetna',
            profilePictureUrl: 'https://example.com/profile_picture.jpg'
        },
        {
            name: 'Jason Doe',
            COVID19details: 'No symptoms',
            testResults: 'Negative',
            medicalHistory: 'None',
            insuranceDetails: 'United Healthcare',
            profilePictureUrl: 'https://example.com/profile_picture.jpg'
        },
        {
            name: 'Jannet Doe',
            COVID19details: 'No symptoms',
            testResults: 'Negative',
            medicalHistory: 'None',
            insuranceDetails: 'Cigna',
            profilePictureUrl: 'https://example.com/profile_picture.jpg'
        }
    ]);

    const insuranceProviders = [
        {
            "planId": "LVloe2ESesTYMbYa12hu",
            "planName": "ABC",
            "description": "Something more amazing",
            "premium": 2300,
            "deductible": 500,
            "medicalCoverage": false,
            "dentalCoverage": true,
            "visionCoverage": true
        },
        {
            "planId": "kjasehflianwjkefKJhu",
            "planName": "XYZ",
            "description": "Something more amazing",
            "premium": 2300,
            "deductible": 500,
            "medicalCoverage": true,
            "dentalCoverage": false,
            "visionCoverage": true
        },
        {
            "planId": "wEFLIH78wefLNFEWhuh",
            "planName": "PQR",
            "description": "Something more amazing",
            "premium": 2300,
            "deductible": 500,
            "medicalCoverage": true,
            "dentalCoverage": true,
            "visionCoverage": false
        }
    ];

    const fetchInfo = async () => {
        try {
            const patientInfo = {};
            const userData = await getUserID(patient.patientUID);
            console.log("fetching info")
            console.log(userData);
            if (userData) {
                patientInfo.phoneNumber = userData.phoneNumber;
                patientInfo.address = userData.streetAddress;
                patientInfo.country = userData.country;
                patientInfo.state = userData.state;
                patientInfo.city = userData.city;
                patientInfo.zipCode = userData.zipCode;
                patientInfo.dateOfBirth = userData.dateOfBirth;
                patientInfo.gender = userData.gender;
                patientInfo.patientName = patient.patientName;
                patientInfo.formattedDate = patient.formattedDate;
                patientInfo.bookingTime = patient.bookingTime;
                patientInfo.closePhysicalContact = patient.closePhysicalContact;
                patientInfo.experiencedSymptoms = patient.experiencedSymptoms;
                patientInfo.positiveCovid90Days = patient.positiveCovid90Days;
                patientInfo.selfMonitor = patient.selfMonitor;
                patientInfo.wantCovidTest = patient.wantCovidTest;
                patientInfo.insuranceProviders = patient.patientInsuranceProviders;
                setPatientInfo(patientInfo);
            };
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            const message = {
                text: newMessage,
                sentByCurrentUser: true // Set to true for messages sent by the current user
            };
            setMessages([...messages, message]);
            setNewMessage('');
        }
    };

    const handleClick = () => {
      // const queryString = new URLSearchParams({ patient: JSON.stringify(patient) }).toString();
      // window.location.href = `/doctor/PatientInfo?${queryString}`;
      // const dataToSend = { /* Your object here */ };
       navigate(`/doctor/finishAppointment`, { state: patient });
    };

    return (
        <div className="doctor-page">
            <DoctorHeader />
            <div className="content">
                <div className="theme-buttons">
                    <button className="light-button" onClick={handleClick}>Finish Appointment</button>
                </div>
                
                <div className="patient-info-container">
                    <h2>Patient Information</h2>
                    <p><strong>Name:</strong> {patientInfo.patientName}</p>
                    <p><strong>Phone Number:</strong> {patientInfo.phoneNumber}</p>
                    <p><strong>Address:</strong> {patientInfo.address} {patientInfo.city}, {patientInfo.country} {patientInfo.zipCode}</p>
                    <p><strong>Date of Birth:</strong> {patientInfo.dateOfBirth}</p>
                    <p><strong>Sex: {patientInfo.gender}</strong></p>

                    <h2>Appointment Information</h2>
                    <p><strong>Date:</strong> {patientInfo.formattedDate}</p>
                    <p><strong>Booking Time:</strong> {patientInfo.bookingTime}</p>

                    <h2>COVID-19 Information</h2>
                    <p><strong>Close Physical Contact:</strong> {patientInfo.closePhysicalContact}</p>
                    <p><strong>Experienced Symptoms:</strong> {patientInfo.experiencedSymptoms}</p>
                    <p><strong>Positive COVID-19 in the last 90 days:</strong> {patientInfo.positiveCovid90Days}</p>
                    <p><strong>Self-monitoring:</strong> {patientInfo.selfMonitor}</p>
                    <p><strong>Wants COVID-19 test:</strong> {patientInfo.wantCovidTest}</p>

                    <h2>Insurance Information</h2>
                    {insuranceProviders.map((provider, index) => (
                        <div key={index}>
                            <p><strong>Insurance Description:</strong> {provider.description}</p>
                            <p><strong>Plan:</strong> {provider.planName}</p>
                            <p><strong>Deductible:</strong> ${provider.deductible}</p>
                            <p><strong>Premium:</strong> ${provider.premium}</p>
                            <p><strong>Medical:</strong> {provider.medicalCoverage ? 'Yes' : 'No'}</p>
                            <p><strong>Dental:</strong> {provider.dentalCoverage ? 'Yes' : 'No'}</p>
                            <p><strong>Vision:</strong> {provider.visionCoverage ? 'Yes' : 'No'}</p>
                            <br></br>
                        </div>
                    ))}
                </div>

                
                <div className="chat-box-container">
                    <div className="top">
                            <h2 className="child1">Chat</h2>
                    </div>
                    <div className="chat-box-outline">
                        <div className="chat-box">
                            <div className="chat-header">today</div>
                            <div className="chat-messages">
                                {messages.map((message, index) => (
                                    <div key={index} className={`message ${message.sentByCurrentUser ? 'sent-by-me' : ''}`}>
                                        {message.text}
                                    </div>
                                ))}
                            </div>
                            <div className="chat-input">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    style={{ width: '80%', height: '30px'}}
                                />
                                <button style={{width: '15%' , height: '35px'}} onClick={sendMessage}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};