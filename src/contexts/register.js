import axios from "axios";
import { API_URL } from "../services/config";

const register = (userData) => {
    return axios.post(
        API_URL + "signup",
        {
            userid: userData.userid,
            firstname: userData.firstName,
            lastName: userData.lastName,
            role: userData.role,
            gender: userData.gender,
            phoneNumber: userData.phoneNumber,
            dateOfBirth: userData.dateOfBirth,
            address: userData.address,
            country: userData.country,
            state: userData.state,
            city: userData.city,
            pincode: userData.pincode,
            doctorLic: userData.role === 'doctor' ? userData.doctorlic : undefined,
            company: userData.role === 'insuranceProvider' ? userData.company : undefined,
            companyLic: userData.role === 'insuranceProvider' ? userData.companylic : undefined,
        },
        {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        }
    );
};

export default register;