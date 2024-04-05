import { useState } from "react";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import { GoCheckCircleFill } from "react-icons/go";
import { SiIfixit } from "react-icons/si";
import "./FindAnInsurance.css";

export default function FindAnInsurance() {
    const [companyName, setCompanyName] = useState("");
    const [medicalIncluded, setMedicalIncluded] = useState(false);
    const [dentalIncluded, setDentalIncluded] = useState(false);
    const [visionIncluded, setVisionIncluded] = useState(false);

    const handleMedicalIncludedChange = () => {
        setMedicalIncluded(!medicalIncluded);
    };

    const handleDentalIncludedChange = () => {
        setDentalIncluded(!dentalIncluded);
    };

    const handleVisionIncludedChange = () => {
        setVisionIncluded(!visionIncluded);
    };

    return (
        <div className="findAnInsurance-page">
            <PatientHeader />
            <div className="search">
                <h2>Find an Insurance</h2>
                <form>
                    <div>
                        <div>
                            <label>Company Name:</label>
                            <input
                                type="text"
                                id="company-name"
                                placeholder="Company Name"
                                value={companyName}
                                onChange={(event) => setCompanyName(event.target.value)}
                            />
                        </div>
                        <div className="medical-included">
                            <input
                                type="checkbox"
                                checked={medicalIncluded}
                                onChange={handleMedicalIncludedChange}
                            />
                            <label>Medical Included</label>
                        </div>
                        <div className="dental-included">
                            <input
                                type="checkbox"
                                checked={dentalIncluded}
                                onChange={handleDentalIncludedChange}
                            />
                            <label>Dental Included</label>
                        </div>
                        <div className="vision-included">
                            <input
                                type="checkbox"
                                checked={visionIncluded}
                                onChange={handleVisionIncludedChange}
                            />
                            <label>Vision Included</label>
                        </div>
                    </div>
                    <input type="submit" value="SEARCH" />
                </form>
            </div>
            <div className="content">
                {/* <p>No palns match this search criteria.</p> */}
                <p>3 Plans</p>
                <div className="plans">
                    <div className="plan">
                        <h2>CareConnect360 Medical Insurance</h2>
                        <h3>Platinum HSA-GN Plan</h3>
                        <div className="plan-details-container">
                            <div className="plan-details">
                                <div>
                                    <p>PT.HSAGN-001</p>
                                    <p>Premium: $200.00</p>
                                    <p>Deductible: $1500.00</p>
                                </div>
                                <div>
                                    <span>
                                        <GoCheckCircleFill className="green" />
                                        <p>Medical</p>
                                    </span>
                                    <span>
                                        <GoCheckCircleFill className="green" />
                                        <p>Dental</p>
                                    </span>
                                    <span>
                                        <GoCheckCircleFill className="green" />
                                        <p>Vision</p>
                                    </span>
                                </div>
                            </div>
                            <button>CHOOSE</button>
                        </div>
                        <hr />
                    </div>
                    <div className="plan">
                        <h2>CareConnect360 Medical Insurance</h2>
                        <h3>Dental Only HSA-GN Plan</h3>
                        <div className="plan-details-container">
                            <div className="plan-details">
                                <div>
                                    <p>PT.HSAGN-002</p>
                                    <p>Premium: $100.00</p>
                                    <p>Deductible: $1000.00</p>
                                </div>
                                <div>
                                    <span>
                                        <SiIfixit className="red" />
                                        <p>Medical</p>
                                    </span>
                                    <span>
                                        <GoCheckCircleFill className="green" />
                                        <p>Dental</p>
                                    </span>
                                    <span>
                                        <SiIfixit className="red" />
                                        <p>Vision</p>
                                    </span>
                                </div>
                            </div>
                            <button>CHOOSE</button>
                        </div>
                        <hr />
                    </div>
                    <div className="plan">
                        <h2>CareConnect360 Medical Insurance</h2>
                        <h3>Ultra Premium Plan</h3>
                        <div className="plan-details-container">
                            <div className="plan-details">
                                <div>
                                    <p>HD-DSG-100</p>
                                    <p>Premium: $1200.00</p>
                                    <p>Deductible: $5000.00</p>
                                </div>
                                <div>
                                    <span>
                                        <GoCheckCircleFill className="green" />
                                        <p>Medical</p>
                                    </span>
                                    <span>
                                        <GoCheckCircleFill className="green" />
                                        <p>Dental</p>
                                    </span>
                                    <span>
                                        <GoCheckCircleFill className="green" />
                                        <p>Vision</p>
                                    </span>
                                </div>
                            </div>
                            <button>CHOOSE</button>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}