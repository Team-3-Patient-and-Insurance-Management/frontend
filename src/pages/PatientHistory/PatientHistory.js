import userPlaceholder from "../../assets/images/user-placeholder.png";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import "./PatientHistory.css";

export default function PatientHistory() {
    return (
        <div className="patient-history-page">
            <PatientHeader />
            <div className="content">
                <div className="header">
                    <img src={userPlaceholder} alt="User Placeholder" />
                    <h1>Jack Patient</h1>
                </div>
                <h2>Personal Information</h2>
                <div>
                    <p><strong>Name:</strong> Jack Patient</p>
                    <p><strong>Email:</strong> jrjoliet@iu.edu</p>
                    <p><strong>Phone:</strong> 123456998</p>
                    <p><strong>Birthdate:</strong> 2000-01-01</p>
                    <p><strong>Sex:</strong> Male</p>
                </div>
                <h2>Behavioral Information</h2>
                <div>
                    <p><strong>Smoke:</strong> NO</p>
                    <p><strong>Drink:</strong> YES - 2 times per week</p>
                    <p><strong>Caffeine:</strong> YES - 7 times per week</p>
                </div>
                <h2>Insurance Information</h2>
                <div>
                    <p><strong>Company:</strong> CareConnect360 Medical Insurance</p>
                    <p><strong>Plan:</strong> Special Deal Plan</p>
                    <p><strong>Policy Number:</strong> LKJSKG-01</p>
                    <p><strong>Premium:</strong> $300.00</p>
                    <p><strong>Deductible:</strong> $1000.00</p>
                    <p><strong>Medical:</strong> YES</p>
                    <p><strong>Dental:</strong> YES</p>
                    <p><strong>Vision:</strong> YES</p>
                </div>
            </div>
        </div>
    );
}