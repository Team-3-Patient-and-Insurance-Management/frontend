import { Link } from "react-router-dom";
import DoctorHeader from "../../components/DoctorHeader/DoctorHeader";
import userPlaceholder from "../../assets/images/user-placeholder.png";
import React, { useState } from 'react';
import "./BedAvailability.css";

export default function BedAvailability() {
    const [hospitals, setHospitals] = useState([
        {
            hospital: 'St Helena Hospital',
            address: "123 Main St Bloomington, IN 47408",
            phone: "812-123-4567",
            covidSupport: true,
            beds: 10,
            available: 5
        },
        {
            hospital: 'IU Health Bloomington Hospital',
            address: "123 Main St Bloomington, IN 47408",
            phone: "812-123-4567",
            covidSupport: false,
            beds: 15,
            available: 2
        },
        {
            hospital: 'Monroe Hospital',
            address: "123 Main St Bloomington, IN 47408",
            phone: "812-123-4567",
            covidSupport: true,
            beds: 20,
            available: 10
        },
        {
            hospital: 'IU Health Bedford Hospital',
            address: "123 Main St Bloomington, IN 47408",
            phone: "812-123-4567",
            covidSupport: true,
            beds: 5,
            available: 0
        }

    ]);

    const displayHospitals = () => {
        return hospitals.map((hospital, index) => {
            return (
                <div className="hospital" key={index}>
                    <div className="dr-info">
                        <h1>{hospital.hospital}</h1>
                        <h3>Address: {hospital.address}</h3>
                        <h3>Phone: {hospital.phone}</h3>
                        <h3>Covid Support: {hospital.covidSupport ? "Yes" : "No"}</h3>
                        <h3>Total Beds: {hospital.beds}</h3>
                        <h3>Beds Available: {hospital.available}</h3>
                    </div>
                </div>
            );
        });
    }


    return (
        <div className="doctor-page">
            <DoctorHeader />
            <div className="content">
                <h1 className="welcome">Beds Available</h1>
                <div className="hospitals">
                    {displayHospitals()}
                </div>
                
            </div>
        </div>
    );
};
