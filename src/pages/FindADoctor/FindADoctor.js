import PatientHeader from "../../components/PatientHeader/PatientHeader";
import "./FindADoctor.css";

export default function FindADoctor() {
    return (
        <div className="findADoctor-page">
            <PatientHeader />
            <div className="content">
                <h2>Find a Dcotor</h2>
                <form>
                    <div className="form-inputs">
                        <div>
                            <label>Search by: Speciality or Doctor Name</label>
                            <input type="name" id="doctor-name" placeholder="Doctor Name" />
                        </div>
                        <div>
                            <label>Location</label>
                            <input type="text" id="location" placeholder="City, State, Zip" />
                        </div>
                        <div>
                            <label>COVID-19 Care</label>
                            <select>
                                <option disabled selected value="">COVID-19 Care</option>
                                <option>Yes</option>
                            </select>
                        </div>
                    </div>

                    <button>SEARCH</button>
                </form>
            </div>
        </div>
    );
}