import { Link } from "react-router-dom";
import InsuranceHeader from "../../components/InsuranceHeader/InsuranceHeader";
import "./InsuranceProvider.css";
import Chart from "chart.js/auto";
import {useEffect, useRef} from "react";

export default function InsuranceProvider() {
    const chartRef = useRef(null);

    useEffect(() => {
        let myChart = null; // Initialize chart variable

        if (chartRef.current) {
            const ctx = chartRef.current.getContext("2d");

            // Destroy existing chart if it exists
            if (myChart) {
                myChart.destroy();
            }

            // Create new chart
            myChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["CareConnectSilver", "CareConnectGold", "CareConnectPlatinum"],
                    datasets: [{
                        label: "Number of Clients",
                        data: [12, 19, 3, 5, 2, 3], // Hardcoded data for demonstration
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Cleanup function to destroy chart when component unmounts
        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, [chartRef.current]);


    return (
        <div className="insurance-page">
            <InsuranceHeader/>
            <div className="insurance-content">
                <h1 className="insurance-welcome">Hello Insurance Provider</h1>
                <div className="covid-19-precautions">
                    <h2>Key Recommendations to Prevent COVID-19</h2>
                    <hr/>
                    {/*<ul>*/}
                    {/*    <ol>*/}
                    {/*        <li>*/}
                    {/*            Don't forget hand hygiene! Wash with soap and water or use sanitizer regularly.*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            Cover your coughs and sneezes with your elbow or a disposable tissue.*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            Maintain a safe distance from individuals who are sneezing, coughing, or experiencing a*/}
                    {/*            fever.*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            Wash food, cutlery, and shared objects before sharing.*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            Wear a mask when you're around others, especially in crowded indoor spaces.*/}
                    {/*        </li>*/}
                    {/*    </ol>*/}
                    {/*</ul>*/}
                    <h3>FEELING SICK? GET A COVID-19 TEST RIGHT AWAY IF YOU HAVE SYMPTOMS!</h3>
                    <p>If you test positive or think you might have COVID-19, isolate yourself for two weeks.</p>
                </div>
                <div className="insurance-services">
                    <div className="browse-insurance-plans">
                        <h2>View Client List</h2>
                        <hr/>
                        <p>Want to see all of your clients' plans? Look at them all here!</p>
                        <Link to="/insurance/clients">
                            <button>Browse Plans</button>
                        </Link>
                    </div>
                    <div className="find-an-insurance">
                        <h2>View Insurance Plans</h2>
                        <hr/>
                        <p>CareConnect360 has a large variety of insurance plans. Compare them all here!</p>
                        <Link to="/insurance/plans">
                            <button>SEARCH PLANS</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{marginBottom: '75px'}}></div>
            <canvas ref={chartRef} style={{width: '10px', height: '40px'}}></canvas>
        </div>
    );
}