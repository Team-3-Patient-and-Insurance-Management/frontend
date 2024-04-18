import axios from "axios";
import { API_URL } from "../services/config";

const getUser = async () => {
    try {
        const response = await axios.get(`${API_URL}getUser`);
        return response.data; // Assuming the response contains user data
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // You can handle the error as per your application's requirements
    }
}

export default getUser;