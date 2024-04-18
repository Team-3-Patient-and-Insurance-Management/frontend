import axios from "axios";
import { API_URL } from "../services/config";

const getDoctorRatings = async () => {
        const response = await axios.get(`${API_URL}doctorRatings`);
        return response;
}

export default getDoctorRatings;