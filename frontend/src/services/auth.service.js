import axios from "axios";
import {AUTH_API_URL, SIGNIN, SIGNUP} from "../consts/APIUrls";
import {roleHandler} from "./dataHandler";


const register = (username, email, password, role) => {
    return axios.post(AUTH_API_URL + SIGNUP, {
        username,
        email,
        password,
        role,
    });
};

const login = (username, password) => {
    return axios
        .post(AUTH_API_URL + SIGNIN, {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                roleHandler(response.data);
            }
            return response.data;
        });
};

const logout = () => {
    sessionStorage.clear();
};

export default {
    register,
    login,
    logout,
};