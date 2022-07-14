import axios from "axios";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const AUTH = process.env.REACT_APP_BACKEND_API_AUTH;
const SIGNIN = process.env.REACT_APP_BACKEND_API_SIGNIN;
const SIGNUP = process.env.REACT_APP_BACKEND_API_SIGNUP;

export const login = (username, password, rememberMe) => {
    let url = `${BACKEND_API}${AUTH}${SIGNIN}`;
    return axios
        .post(url, {
            username,
            password,
            rememberMe
        })
        .then((response) => {
            return response;
        });
};

export const register = (username, email, password, role) => {
    alert("username=" + username + ", email=" + email + ", password=" + password + ", role=" + role);
    let url = `${BACKEND_API}${AUTH}${SIGNUP}`;
    return axios.post(url, {
        username,
        email,
        password,
        role,
    }).then((response) => {
        return response;
    });
};
