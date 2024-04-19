import React, { useState } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Calendar } from "@progress/kendo-react-dateinputs";
import './BookAppointment.css';
import PatientHeader from '../../components/PatientHeader/PatientHeader';
import { Modal, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
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


export default function BookAppointment(props) {
    const { doctorUid } = useParams();
    const [bookingDate, setBookingDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [bookingTimes, setBookingTimes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [experiencedSymptoms, setExperiencedSymptoms] = useState('No');
    const [closePhysicalContact, setClosePhysicalContact] = useState('No');
    const [positiveCovid90Days, setPositiveCovid90Days] = useState('No');
    const [selfMonitor, setSelfMonitor] = useState('No');
    const [wantCovidTest, setWantCovidTest] = useState('Yes');

    const handleSubmit = (event) => {
        event.preventDefault();
        const surveyResults = {
            experiencedSymptoms,
            closePhysicalContact,
            positiveCovid90Days,
            selfMonitor,
            wantCovidTest
        };
        console.log(surveyResults);

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
            <PatientHeader />
            <div className="book-appointment-container">
                <div className="booking-header">Book Doctor Slot
                    <div className="doctor-info">This is where the doctor info would go
                    </div>
                </div>
                <Calendar value={bookingDate} min={today} onChange={onDateChange} />

                {bookingDate && (
                    <div className="time-slots-container">
                        {bookingTimes.map((time, index) => (
                            <button
                                key={index}
                                className={`time-slot-button ${selectedTimeSlot === time ? 'selected' : ''}`}
                                onClick={() => setSelectedTimeSlot(time)}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                )}

                {bookingDate && selectedTimeSlot && (
                    <div className="selected-slot-info">
                        <div className="bookingtime">
                            Selected slot: {bookingDate.toDateString()} at {selectedTimeSlot}</div>
                        <Button className='mt-4' onClick={handleBookSlot}>Book the slot</Button>
                    </div>
                )}
                <Modal show={showModal} fullscreen={true} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Covid-19 Symptom Check</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group >
                                <Form.Label>Have you experienced any COVID-19 symptoms recently?</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="experiencedSymptoms"
                                    id="experiencedSymptomsYes"
                                    onChange={() => setExperiencedSymptoms('Yes')}
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="experiencedSymptoms"
                                    id="experiencedSymptomsNo"
                                    onChange={() => setExperiencedSymptoms('No')}
                                    defaultChecked
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Have you been in close physical contact with someone who has COVID-19?</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="closePhysicalContact"
                                    id="closePhysicalContactYes"
                                    onChange={() => setClosePhysicalContact('Yes')}
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="closePhysicalContact"
                                    id="closePhysicalContactNo"
                                    onChange={() => setClosePhysicalContact('No')}
                                    defaultChecked
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Have you had a positive COVID-19 test in the last 90 days?</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="positiveCovid90Days"
                                    id="positiveCovid90DaysYes"
                                    onChange={() => setPositiveCovid90Days('Yes')}
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="positiveCovid90Days"
                                    id="positiveCovid90DaysNo"
                                    onChange={() => setPositiveCovid90Days('No')}
                                    defaultChecked
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Has a public health or medical professional told you to self-monitor or self-quarantine because of COVID-19?</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="selfMonitor"
                                    id="selfMonitorYes"
                                    onChange={() => setSelfMonitor('Yes')}
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="selfMonitor"
                                    id="selfMonitorNo"
                                    onChange={() => setSelfMonitor('No')}
                                    defaultChecked
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Would you like a COVID-19 test?</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="wantCovidTest"
                                    id="wantCovidTestYes"
                                    onChange={() => setWantCovidTest('Yes')}
                                    defaultChecked
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="wantCovidTest"
                                    id="wantCovidTestNo"
                                    onChange={() => setWantCovidTest('No')}

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
