import { useState, useEffect } from 'react';
import { GoCheckCircleFill } from "react-icons/go";
import { Rating } from 'primereact/rating';
import { SiIfixit } from "react-icons/si";
import doctorImage from "../../assets/images/doctor.jpg";
import doctorImage2 from "../../assets/images/doctor2.jpg";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import Appointment from "../../components/Appointment/Appointment";
import "./FindADoctor.css";
import searchDoctors from "../../contexts/searchDoctors";


export default function FindADoctor() {
    const [speciality, setSpeciality] = useState("");
    const [doctorName, setDoctorName] = useState("");
    const [covid19Care, setCovid19Care] = useState(false);
    const [appointmentIsOpen, setAppointmentIsOpen] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);


    const handleCovid19CareChange = () => {
        setCovid19Care(!covid19Care);
    };

    const fetchDoctors = async () => {
       
            const searchData = {
                speciality: speciality,
                doctorName: doctorName,
                covid19Care: covid19Care
            };

            console.log(searchData); 

            try{
                const response = await searchDoctors(searchData); 
                if (response.status !== 200) {
                    console.error("Error fetching doctors data");
                    setDoctors([]);
                } else {
                    const doctors = response.data;
                    console.log(doctors);
                    setDoctors(doctors); 
                }
            }
            catch(error){
                setDoctors([]);
                console.error("Error fetching doctors data", error);
            }
    };

    const covidSupport = (support) => {
        if(support) {
            return <GoCheckCircleFill className="green" />
        } else {
            return <SiIfixit className="red" />
        }
    };

    useEffect(() => {
        fetchDoctors();
        displayDoctors();
    }, []);

    const displayDoctors = () => {
        if (doctors.length > 0) {
                <p>{doctors.length} Doctors</p>
                const doctorsContent = doctors.map((doctor, index) => (
                    <div className="doctors" key={index}>
                        <div className="doctor">
                            <img src={doctorImage} alt="Doctor" />
                            <div className="doctor-details">
                                <h1>{doctor.fullName}</h1>
                                <div className="doctor-rating">
                                    <Rating value={1} readOnly cancel={false} className="rating" />
                                    <p>(1)</p>
                                </div>
                                <div className="doctor-address">
                                    <p>{doctor.streetAddress}</p>
                                    <p>{doctor.city}, {doctor.country} {doctor.zipCode}</p>
                                </div>
                            </div>
                            <div className="doctor-speciality">
                                <span>
                                    {covidSupport(doctor.supportCovid)}
                                    <p>COVID-19 care</p>
                                </span>
                                <ul>
                                    {doctor.specialization}
                                </ul>
                                <button className="book-online-btn" onClick={() => setAppointmentIsOpen(true)}>BOOK ONLINE</button>
                                {appointmentIsOpen && <Appointment setAppointmentIsOpen={setAppointmentIsOpen} selectedDoctor={doctor} />}
                            </div>
                        </div>
                    </div>
                ));
                return <div className="content">{doctorsContent}</div>;
            } else {
                return <div className="content"><p>No doctors match this search criteria.</p></div>;
            }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        fetchDoctors();
    };

    return (
        <div className="findADoctor-page">
            <PatientHeader />
            <div className="search">
                <h2>Find a Doctor</h2>
                <form>
                    <div>
                        <div className="text-inputs">
                            <div>
                                <label>Speciality:</label>
                                <input
                                    type="text"
                                    id="speciality"
                                    placeholder="Speciality"
                                    value={speciality}
                                    onChange={(event) => setSpeciality(event.target.value)}
                                />
                            </div>
                            <div>
                                <label>Doctor Name:</label>
                                <input
                                    type="text"
                                    id="doctor-name"
                                    placeholder="Doctor Name"
                                    value={doctorName}
                                    onChange={(event) => setDoctorName(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="covid-19-care">
                            <input
                                type="checkbox"
                                checked={covid19Care}
                                onChange={handleCovid19CareChange}
                            />
                            <label>COVID-19 Care</label>
                        </div>
                    </div>
                    <input type="submit" value="SEARCH" onClick={handleSubmit} />
                </form>
            </div>
            
            {displayDoctors()}
            
        </div>
    );
}
