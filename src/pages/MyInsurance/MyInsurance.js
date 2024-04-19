import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import { Accordion, Card, Button } from 'react-bootstrap';

export default function MyInsurance() {
    const [insuranceData, setInsuranceData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://backend-careconnect360.onrender.com/patientInsuranceProviders');
                setInsuranceData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="myinsurance">
            <PatientHeader />
            <Accordion defaultActiveKey="0" style={{ margin: '150px' }}>
                {insuranceData.map((item, index) => (
                    <Accordion.Item eventKey={String(index)} key={index}  >
                        <Accordion.Header>{item.policyName || "No Policy Name"}</Accordion.Header>
                        <Accordion.Body>
                            <div><strong>Insurance Provider:</strong> {item.insuranceProvider || "N/A"}</div>
                            <div><strong>Policy Name:</strong> {item.policyName || "N/A"}</div>
                            <div><strong>Representative:</strong> {item.representative || "N/A"}</div>
                            <div><strong>Description:</strong> {item.description || "N/A"}</div>
                            <div><strong>Price:</strong> {item.price ? `$${item.price.toLocaleString()}` : "N/A"}</div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}
