import {useEffect, useState} from "react";
import InsuranceHeader from "../../components/InsuranceHeader/InsuranceHeader";
import "./InsuranceClients.css";
import ClientCard from "./ClientCard";
import getInsuranceClients from "../../contexts/getInsuranceClients";

export default function InsuranceClients() {
    // const [speciality, setSpeciality] = useState("");
    // const [clientName, setclientName] = useState("");
    // const [covid19Care, setCovid19Care] = useState(false);
    const [clients, setClients] = useState([
        {
            name: "Jake Frazier",
            plan: "CareConnectSilver",
            premium: 2500,
            deductible: 50,
            medicalCoverage: true,
            dentalCoverage: false,
            visionCoverage: false,
        },
        {
            name: "Steven Adams",
            plan: "CareConnectPlatinum",
            premium: 5000,
            deductible: 250,
            medicalCoverage: true,
            dentalCoverage: true,
            visionCoverage: true,
        }]);
    //
    //
    //
    // return (
    //     <div className="insuranceClients-page">
    //         <InsuranceHeader/>
    //         <div className="content">
    //             {/* <p>No clients match this search criteria.</p> */}
    //             <p className = "header">My Client Page</p>
    //             <div className="clients">
    //
    //                 <div className="client">
    //                     <img src={clientImage} alt="client"/>
    //                     <div className="client-details">
    //                         <h1>Jake Frazier</h1>
    //                         <div className="client-plan">
    //                             <p>CareConnectSilver</p>
    //                             <ul>
    //                                 <li>Premium: $2500</li>
    //                                 <li>Deductible: $50</li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                     <div className="client-coverage">
    //                         <span>
    //                             <GoCheckCircleFill className="green"/>
    //                             <p>Medical Coverage</p>
    //                         </span>
    //                         <span>
    //                             <SiIfixit className="red"/>
    //                             <p>Dental Coverage</p>
    //                         </span>
    //                         <span>
    //                             <SiIfixit className="red"/>
    //                             <p>Vision Coverage</p>
    //                         </span>
    //                     </div>
    //                 </div>
    //
    //                 <div className="client">
    //                     <img src={clientImage2} alt="client"/>
    //                     <div className="client-details">
    //                         <h1>Steven Adams</h1>
    //                         <div className="client-plan">
    //                             <p>CareConnectPlatinum</p>
    //                             <ul>
    //                                 <li>Premium: $5000</li>
    //                                 <li>Deductible: $250</li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                     <div className="client-coverage">
    //                         <span>
    //                             <GoCheckCircleFill className="green"/>
    //                             <p>Medical Coverage</p>
    //                         </span>
    //                         <span>
    //                             <GoCheckCircleFill className="green"/>
    //                             <p>Dental Coverage</p>
    //                         </span>
    //                         <span>
    //                             <GoCheckCircleFill className="green"/>
    //                             <p>Vision Coverage</p>
    //                         </span>
    //                     </div>
    //                  </div>
    //
    //
    //             </div>
    //         </div>
    //     </div>

    const fetchClients = async () => {
        try {
            const response = await getInsuranceClients();
            console.log("RESPONSE:")
            console.log(response);
            const clients = response.data;
            console.log(clients);
            setClients(clients);
        } catch (error) {
            setClients([]);
            console.error("Error fetching clients data", error);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);


    const displayClients = () => {
        return clients.map((client, index) => {
            return (
                <ClientCard
                    key={index}
                    clientName={client.name}
                    plan={client.plan}
                    premium={client.premium}
                    deductible={client.deductible}
                    medicalCoverage={client.medicalCoverage}
                    dentalCoverage={client.dentalCoverage}
                    visionCoverage={client.visionCoverage}
                />
            );
        });
    };

    return (
        <div className="insuranceClients-page">
            <InsuranceHeader/>
            <div className="content">
                <p className="header">My Clients</p>
                <div className="clients">
                    {displayClients()}
                </div>
            </div>
        </div>
    );
}