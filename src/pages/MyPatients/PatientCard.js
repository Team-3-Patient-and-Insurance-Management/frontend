import React, { useState } from 'react';
import userPlaceholder from "../../assets/images/user-placeholder.png";
import "./MyPatients.css";
import { useNavigate } from 'react-router-dom';

const PatientCard = (patient) => {
  const navigate = useNavigate();

  const handleClick = () => {
      // const queryString = new URLSearchParams({ patient: JSON.stringify(patient) }).toString();
      // window.location.href = `/doctor/PatientInfo?${queryString}`;
      // const dataToSend = { /* Your object here */ };
       navigate(`/doctor/PatientInfo`, { state: patient });
    };

    return (
      <div className="card" onClick={handleClick}>
        <img src={userPlaceholder} alt="User Placeholder" />
            <p className="name">{patient.patientName}</p>
            <p>Date: {patient.formattedDate}</p>
            <p>Time: {patient.time}</p>
      </div>
    );
};

export default PatientCard;
