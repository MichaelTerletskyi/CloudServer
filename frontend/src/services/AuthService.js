import React from "react";
import {ROLE_ADMIN, ROLE_USER} from "../consts/Roles";

export const JWT_KEY = "JWT_KEY";
export const NO_AUTHENTICATED = "NO_AUTHENTICATED";
export const AUTHENTICATED = "AUTHENTICATED";

export const logout = () => {
    sessionStorage.clear();
};

export const saveJWT = (jwtResponse) => {
    // TODO Don't forget to remove
    sessionStorage.clear();
    sessionStorage.setItem(JWT_KEY, JSON.stringify(jwtResponse));
};

export const getJWT = () => {
    return sessionStorage.getItem(JWT_KEY);
};

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};

// TODO Something with this later please
export const AuthVerify = () => {
    const jwt = JSON.parse(getJWT());
    if (jwt) {
        const decodedJwt = parseJwt(jwt.accessToken);
        if (decodedJwt.exp * 1000 < Date.now()) {
            logout();
        }
    }
};

export const isAuthenticated = () => {
    return Boolean(sessionStorage.hasOwnProperty(JWT_KEY));
};

export const getCurrentUserRole = () => {
    return isAuthenticated() ? JSON.parse(getJWT()).roles : NO_AUTHENTICATED;
};

export const isUser = () => {
    return String(getCurrentUserRole()) === ROLE_USER;
};

export const isAdmin = () => {
    return String(getCurrentUserRole()) === ROLE_ADMIN;
};