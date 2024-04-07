import {useEffect, useState} from "react";
import InsuranceHeader from "../../components/InsuranceHeader/InsuranceHeader";
import "./InsurancePlans.css";

function InsurancePlans() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        // Fetch insurance plans from your backend API
        fetchInsurancePlans();
    }, []);

    const fetchInsurancePlans = async () => {
        try {
            // Assuming your backend API endpoint to fetch insurance plans is '/api/insurance/plans'
            const response = await fetch("/api/insurance/plans");
            if (!response.ok) {
                throw new Error("Failed to fetch insurance plans");
            }
            const data = await response.json();
            setPlans(data);
        } catch (error) {
            console.error("Error fetching insurance plans:", error.message);
        }
    };

    return (
        <div className="insurance-plans-page">
            <InsuranceHeader />
            <div className="plans-container">
                <h2>Insurance Plans</h2>
                {plans.length === 0 ? (
                    <p>No plans available</p>
                ) : (
                    <div className="plans">
                        {plans.map((plan) => (
                            <div className="plan" key={plan.planId}>
                                <h3>{plan.name}</h3>
                                <p>{plan.insuranceCompany}</p>
                                <p>Premium: ${plan.premium}</p>
                                <p>Deductible: ${plan.deductible}</p>
                                <div className="coverage-details">
                                    {plan.medicalCoverage && <span className="medical">Medical</span>}
                                    {plan.dentalCoverage && <span className="dental">Dental</span>}
                                    {plan.visionCoverage && <span className="vision">Vision</span>}
                                </div>
                                <button>Choose</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InsurancePlans;
