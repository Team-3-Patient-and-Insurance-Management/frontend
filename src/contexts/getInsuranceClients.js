import axios from "axios";
import { API_URL } from "../services/config";

const getInsuranceClients = async () => {
    const response = await axios.get(`${API_URL}/getInsuranceClients`);
    return response;
}

export default getInsuranceClients;