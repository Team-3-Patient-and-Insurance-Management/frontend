import {useState} from "react";
import {GoCheckCircleFill} from "react-icons/go";
import {SiIfixit} from "react-icons/si";
import clientImage from "../../assets/images/client.jpg";
import clientImage2 from "../../assets/images/client2.jpg";
import InsuranceHeader from "../../components/InsuranceHeader/InsuranceHeader";
import Appointment from "../../components/Appointment/Appointment";
import "./InsuranceClients.css";

export default function InsuranceClients() {
    const [speciality, setSpeciality] = useState("");
    const [clientName, setclientName] = useState("");
    const [covid19Care, setCovid19Care] = useState(false);



    return (
        <div className="insuranceClients-page">
            <InsuranceHeader/>
            <div className="content">
                {/* <p>No clients match this search criteria.</p> */}
                <p className = "header">My Client Page</p>
                <div className="clients">

                    <div className="client">
                        <img src={clientImage} alt="client"/>
                        <div className="client-details">
                            <h1>Jake Frazier</h1>
                            <div className="client-plan">
                                <p>CareConnectSilver</p>
                                <ul>
                                    <li>Premium: $2500</li>
                                    <li>Deductible: $50</li>
                                </ul>
                            </div>
                        </div>
                        <div className="client-coverage">
                            <span>
                                <GoCheckCircleFill className="green"/>
                                <p>Medical Coverage</p>
                            </span>
                            <span>
                                <SiIfixit className="red"/>
                                <p>Dental Coverage</p>
                            </span>
                            <span>
                                <SiIfixit className="red"/>
                                <p>Vision Coverage</p>
                            </span>
                        </div>
                    </div>

                    <div className="client">
                        <img src={clientImage2} alt="client"/>
                        <div className="client-details">
                            <h1>Steven Adams</h1>
                            <div className="client-plan">
                                <p>CareConnectPlatinum</p>
                                <ul>
                                    <li>Premium: $5000</li>
                                    <li>Deductible: $250</li>
                                </ul>
                            </div>
                        </div>
                        <div className="client-coverage">
                            <span>
                                <GoCheckCircleFill className="green"/>
                                <p>Medical Coverage</p>
                            </span>
                            <span>
                                <GoCheckCircleFill className="green"/>
                                <p>Dental Coverage</p>
                            </span>
                            <span>
                                <GoCheckCircleFill className="green"/>
                                <p>Vision Coverage</p>
                            </span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}