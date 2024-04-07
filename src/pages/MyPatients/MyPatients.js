import { Link } from "react-router-dom";
import DoctorHeader from "../../components/DoctorHeader/DoctorHeader";
import { useState, useEffect } from 'react';
import PatientCard from "./PatientCard";
import "./MyPatients.css";
import getCurrentAppointments from "../../contexts/getCurrentAppointments";

export default function MyPatients() {
    const [patients, setPatients] = useState([
        {
            closePhysicalContact: "no",
            formattedDate: "2021-09-01",
            experiencedSymptoms: "no",
            patientName: "John Doe",
            patientUid: "123456",
            positiveCovid90Days: "no",
            selfMonitor: "no",
            bookingTime: "12:00",
            wantCovidTest: "yes"
        },
        {
            closePhysicalContact: "no",
            formattedDate: "2021-09-01",
            experiencedSymptoms: "no",
            patientName: "Jane Doe",
            patientUid: "123456",
            positiveCovid90Days: "no",
            selfMonitor: "no",
            bookingTime: "12:00",
            wantCovidTest: "yes"
        }
    ]);


    const fetchAppointments = async () => {
        try{
            const response = await getCurrentAppointments(); 
            const appointments = response.data;
            console.log(appointments);
            setPatients(appointments); 
        }
        catch(error){
            setPatients([]);
            console.error("Error fetching appointments data", error);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    const displayPatients = () => {
        return patients.map((patient, index) => {
            return (
                <PatientCard
                    key={index}
                    patientName={patient.patientName}
                    formattedDate={patient.formattedDate}
                    bookingTime={patient.bookingTime ? patient.bookingTime : "10:00 AM"}
                    closePhysicalContact={patient.closePhysicalContact}
                    experiencedSymptoms={patient.experiencedSymptoms}
                    positiveCovid90Days={patient.positiveCovid90Days}
                    selfMonitor={patient.selfMonitor}
                    wantCovidTest={patient.wantCovidTest}
                    patientUID={patient.patientUid}
                />
            );
        });
    };

    return (
        <div className="doctor-page">
            <DoctorHeader />
            <div className="content">
                <h1 className="welcome">Your Patients</h1>
                <div className="cards">
                    {displayPatients()}
                </div>
                
            </div>
        </div>
    );
};
