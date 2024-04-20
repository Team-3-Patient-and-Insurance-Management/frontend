import {useEffect, useState} from "react";
import InsuranceHeader from "../../components/InsuranceHeader/InsuranceHeader";
import "./InsurancePlans.css";
import myInsurancePlans from "../../contexts/getInsuranceProvidersPlans";

function InsurancePlans() {
    const [insurancePlans, setInsurancePlans] = useState([]);

    useEffect(() => {
        fetchInsurancePlans();
    }, []);

    const fetchInsurancePlans = async () => {
        
        try {
            const response = await myInsurancePlans();
            if (response.status !== 200) {
                console.error("Error fetching insurance plan data");
                setInsurancePlans([]);
            } else {
                const insurancePlans = response.data;
                setInsurancePlans(insurancePlans);
            }
        }
        catch (error) {
            setInsurancePlans([]);
            console.error("Error fetching insurance plan data", error);
        }
    }

    const displayInsurancePlans = () => {
        if (insurancePlans.length > 0) {
            <p>{insurancePlans.length} Insurance Plans</p>
            const insurancePlansContent = insurancePlans.map((plan, index) => (
                <div className="insurance-plan-card" key={index}>
                    <div className="insurance-plan-details">
                        <h3>{plan.planName}</h3>
                        <h4>{plan.description}</h4>
                        <p>Premium: {plan.premium}</p>
                        <p>Deductible: {plan.deductible}</p>
                        <p>Medical Coverage: {plan.medicalCoverage ? 'Yes' : 'No'}</p>
                        <p>Vision Coverage: {plan.visionCoverage ? 'Yes' : 'No'}</p>
                        <p>Dental Coverage: {plan.dentalCoverage ? 'Yes' : 'No'}</p>
                    </div>
                </div>
            ));
            return <div className="content">{insurancePlansContent}</div>;
        } else {
            return <div className="content"><p>You currently dont have any insurance plans</p></div>;
        }
    }

    return (
        <div className="insurance-page">
            <InsuranceHeader />
            <div className="title-container">
                <h2>My Insurance Plans</h2>
            </div>
            <div className="insurance-plan">
                <button>Add a New Insurance Plan</button>
            </div>
            <div className="insurance-content">
                {displayInsurancePlans()}
            </div>
        </div>
    );
}

export default InsurancePlans;
