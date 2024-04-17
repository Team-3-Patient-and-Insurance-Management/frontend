import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';
import "./FindAnInsurance.css";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
export default function FindAnInsurance() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get('https://backend-careconnect360.onrender.com/allInsuranceProviders');

                setData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);


    const columns = [
        {
            name: 'Full Name',
            selector: row => row.fullName,
            sortable: true,
        },
        {
            name: 'Phone Number',
            selector: row => row.phoneNumber,
            sortable: true,
        },
        {
            name: 'Company',
            selector: row => row.company,
            sortable: true,
        }

    ];
    const ExpandedComponent = ({ data }) => {
        return (

            <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
                <h4 className="mt-4 mb-4">Insurance Plans:</h4>
                {data.insurancePlans.map((plan, index) => (
                    <div key={index} style={{ marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
                        <div><strong>Plan Name:</strong> {plan.planName}</div>
                        <div><strong>Description:</strong> {plan.description}</div>
                        <div><strong>Premium:</strong> ${plan.premium.toLocaleString()}</div>
                        <div><strong>Deductible:</strong> ${plan.deductible.toLocaleString()}</div>
                        <div><strong>Medical Coverage:</strong> {plan.medicalCoverage ? 'Yes' : 'No'}</div>
                        <div><strong>Dental Coverage:</strong> {plan.dentalCoverage ? 'Yes' : 'No'}</div>
                        <div><strong>Vision Coverage:</strong> {plan.visionCoverage ? 'Yes' : 'No'}</div>
                        <button className="primary mt-4">Get Insurance</button>
                    </div>
                ))}
            </div>

        );
    };


    return (
        <div className="insurance">
            <PatientHeader />
            <div className="findAnInsurance-page mt-4">
                <DataTable
                    columns={columns}
                    data={data}
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    );
}
