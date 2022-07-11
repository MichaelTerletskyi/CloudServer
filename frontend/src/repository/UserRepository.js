import axios from "axios";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const AUTH = process.env.REACT_APP_BACKEND_API_AUTH;
const SIGNIN = process.env.REACT_APP_BACKEND_API_SIGNIN;
const SIGNUP = process.env.REACT_APP_BACKEND_API_SIGNUP;

export const login = (username, password) => {
    let url = `${BACKEND_API}${AUTH}${SIGNIN}`;
    return axios
        .post(url, {
            username,
            password,
        })
        .then((response) => {
            return response;
        });
};

export const register = (username, email, password, role) => {
    let url = `${BACKEND_API}${AUTH}${SIGNUP}`;
    return axios.post(url, {
        username,
        email,
        password,
        role,
    });
};
