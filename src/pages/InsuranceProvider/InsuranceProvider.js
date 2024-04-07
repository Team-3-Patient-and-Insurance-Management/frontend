import { Link } from "react-router-dom";
import InsuranceHeader from "../../components/InsuranceHeader/InsuranceHeader";
import "./InsuranceProvider.css";

export default function InsuranceProvider() {
    return (
        <div className="insurance-page">
            <InsuranceHeader />
            <div className="insurance-content">
                <h1 className="insurance-welcome">Hello Insurance Provider</h1>
                <div className="covid-19-precautions">
                    <h2>Key Recommendations to Prevent COVID-19</h2>
                    <hr />
                    <ul>
                        <ol>
                            <li>
                                Don't forget hand hygiene! Wash with soap and water or use sanitizer regularly.
                            </li>
                            <li>
                                Cover your coughs and sneezes with your elbow or a disposable tissue.</li>
                            <li>
                                Maintain a safe distance from individuals who are sneezing, coughing, or experiencing a fever.
                            </li>
                            <li>
                                Wash food, cutlery, and shared objects before sharing.
                            </li>
                            <li>
                                Wear a mask when you're around others, especially in crowded indoor spaces.
                            </li>
                        </ol>
                    </ul>
                    <h3>FEELING SICK? GET A COVID-19 TEST RIGHT AWAY IF YOU HAVE SYMPTOMS!</h3>
                    <p>If you test positive or think you might have COVID-19, isolate yourself for two weeks.</p>
                </div>
                <div className="insurance-services">
                    <div className="browse-insurance-plans">
                        <h2>Search Insurance Plans</h2>
                        <hr />
                        <p>Want to browse your insurance plans? Compare your different plans here!</p>
                        <Link to="/insurance/plans">
                            <button>Browse Plans</button>
                        </Link>
                    </div>
                    <div className="find-an-insurance">
                        <h2>Find an Insurance</h2>
                        <hr />
                        <p>CareConnect360 simplifies your healthcare experience. Compare different plans here.</p>
                        <Link to="/patient/insurance">
                            <button>SEARCH PLANS</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}