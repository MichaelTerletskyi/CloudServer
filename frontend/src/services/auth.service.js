import axios from "axios";
const AUTH_API_URL = "http://localhost:8080/rest/api/auth";
const DATA_API_URL = "http://localhost:8080/rest/api/data";

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
                sessionStorage.setItem("user", JSON.stringify(response.data));
                fetchUserFiles(JSON.parse(sessionStorage.getItem("user")).id);
            }
            return response.data;
        });
};

const fetchUserFiles = (id) => {
    axios
        .get(DATA_API_URL + "/get/all/files/by/user/id=" + id)
        .then((response) => {
            sessionStorage.setItem("user_files", JSON.stringify(response.data));
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