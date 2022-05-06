import axios from "axios";
import {USER} from "../consts/StorageEntities"
import {AUTH_API_URL, DATA_API_URL} from "../consts/APIUrls";


const register = (username, email, password, role) => {
    return axios.post(AUTH_API_URL + "/signup", {
        username,
        email,
        password,
        role,
    });
};

const login = (username, password) => {
    return axios
        .post(AUTH_API_URL + "/signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                sessionStorage.setItem(USER, JSON.stringify(response.data));
                fetchUserFiles(JSON.parse(sessionStorage.getItem(USER)).id);
            }
            return response.data;
        });
};

const fetchUserFiles = (id) => {
    axios
        .get(DATA_API_URL + "/get/all/files/by/user/id=" + id)
        .then((response) => {
            response.data.forEach(file => {
                sessionStorage.setItem(JSON.parse(JSON.stringify(file)).originalFilename, JSON.stringify(file));
            });
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