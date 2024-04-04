import { Link } from "react-router-dom";
import DoctorHeader from "../../components/DoctorHeader/DoctorHeader";
import React, { useState } from 'react';
import PatientCard from "./PatientCard";
import "./MyPatients.css";

export default function MyPatients() {
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

    const displayPatients = () => {
        return patients.map((patient, index) => {
            return (
                <PatientCard
                    key={index}
                    userName={patient.name}
                    diagnosis={patient.COVID19details}
                    symptoms={patient.testResults}
                    testResults={patient.medicalHistory}
                    medicalHistory={patient.insuranceDetails}
                    profilePictureUrl={patient.profilePictureUrl}
                />
            );
        });
    };

    return (
        <div className="doctor-page">
            <DoctorHeader />
            <div className="content">
                <h1 className="welcome">Your Reviews</h1>
                <div className="cards">
                
                    {displayPatients()}
                    
                </div>
                
            </div>
        </div>
    );
};
