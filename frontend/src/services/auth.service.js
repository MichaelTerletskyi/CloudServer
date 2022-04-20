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
                fetchFiles(response.data.id);
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

// https://learn.javascript.ru/localstorage // localStorage.hasOwnProperty(key)
const fetchFiles = (id) => {
    axios.get(DATA_API_URL + "/get/all/files/by/user/id=" + id)
        .then((response) => {
            response.data.forEach(file => {
                localStorage.setItem(JSON.parse(JSON.stringify(file)).originalFilename, JSON.stringify(file));
            });
        });
};

const logout = () => {
    localStorage.clear();
};

export default {
    register,
    login,
    logout,
};