import { useState, useEffect } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Calendar } from "@progress/kendo-react-dateinputs";
import './FinishAppointment.css'; 
import DoctorHeader from '../../components/DoctorHeader/DoctorHeader';
import { Modal, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const times = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00"
];


export default function FinishAppointment() {
    const location = useLocation();
    const patient = location.state;

    const { doctorUid } = useParams();
    const [bookingDate, setBookingDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [bookingTimes, setBookingTimes] = useState([]);
    const [showModal, setShowModal] = useState(true);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [diagnosis, setDiagnosis] = useState('');
    const [covidSymptomDetails, setCovidSymptomDetails] = useState('');
    const [testResults, setTestResults] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [insuranceDetails, setInsuranceDetails] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const appointmentDetails = {
            diagnosis,
            covidSymptomDetails,
            testResults,
            medicalHistory,
            insuranceDetails
        };
        console.log(appointmentDetails);

    };

    const handleBookSlot = () => {
        setShowModal(true);
    };

    const onDateChange = e => {
        setSelectedTimeSlot(null);
        setBookingDate(e.value);
        setBookingTimes(times);
    };

    return (
        <div className="content">
            <DoctorHeader />
            <div className="book-appointment-container">
                <div className="booking-header">Book Doctor Slot
                    <div className="doctor-info">This is where the doctor info would go
                    </div>
                </div>
                

                
                <Modal show={showModal} fullscreen={false} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Finish Appointment With Your Patient</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                             <Form.Group>
                                <Form.Label>Diagnosis:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter diagnosis"
                                    onChange={(event) => {
                                        setDiagnosis(event.target.value);
                                    }}
                                />
                            </Form.Group>

                             <Form.Group>
                                <Form.Label>Covid-19 Symptom Details:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter diagnosis"
                                    onChange={(event) => {
                                        setCovidSymptomDetails(event.target.value);
                                    }}
                                />
                            </Form.Group>

                             <Form.Group>
                                <Form.Label>Test Results:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter diagnosis"
                                    onChange={(event) => {
                                        setTestResults(event.target.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Medical History:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter diagnosis"
                                    onChange={(event) => {
                                        setMedicalHistory(event.target.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Insurance Details:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter diagnosis"
                                    onChange={(event) => {
                                        setInsuranceDetails(event.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Button type="submit">Submit</Button>

                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}