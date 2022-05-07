import axios from "axios";
import {USER} from "../consts/StorageEntities"
import {AUTH_API_URL, DATA_API_URL, GET_ALL_FILES_METADATA_BY_USER_ID, SIGNIN, SIGNUP} from "../consts/APIUrls";


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
                sessionStorage.setItem(USER, JSON.stringify(response.data));
                fetchUserFiles(JSON.parse(sessionStorage.getItem(USER)).id);
            }
            return response.data;
        });
};

const fetchUserFiles = (id) => {
    axios
        .get(DATA_API_URL + GET_ALL_FILES_METADATA_BY_USER_ID + id)
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