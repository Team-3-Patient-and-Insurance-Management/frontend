import React, {useState} from 'react';
import userPlaceholder from "../../assets/images/user-placeholder.png";
import "./InsuranceClients.css";
import {useNavigate} from 'react-router-dom';

const ClientCard = (client) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/insurance/clients/ClientInfo`, {state: client});
    };

    return (
        <div className="card" onClick={handleClick}>
            <img src={userPlaceholder} alt="User Placeholder"/>
            <p className="name">{client.clientName}</p>
            <p>Plan: {client.plan}</p>
            <p>Premium: {client.premium}</p>
            <p>Deductible: {client.deductible}</p>
            <p>Medical Coverage: {client.medicalCoverage}</p>
            <p>Dental Coverage: {client.dentalCoverage}</p>
            <p>Vision Coverage: {client.visionCoverage}</p>
        </div>
    );
}

export default ClientCard;