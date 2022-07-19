import axios from "axios";
import authHeader from "../services/AuthHeader";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const AUTH = process.env.REACT_APP_BACKEND_API_AUTH;
const SIGNIN = process.env.REACT_APP_BACKEND_API_SIGNIN;
const SIGNUP = process.env.REACT_APP_BACKEND_API_SIGNUP;
const USERS = process.env.REACT_APP_BACKEND_API_USERS;
const GET_USER_METADATA = process.env.REACT_APP_BACKEND_API_GET_USER_METADATA;

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

export const userMetadata = (id) => {
    let url = `${BACKEND_API}${USERS}${GET_USER_METADATA}${id}`;
    return axios.get(url, {headers: authHeader()})
        .then((response) => {
            return response;
        });
};
