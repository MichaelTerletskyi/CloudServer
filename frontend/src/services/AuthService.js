import React from "react";

export const JWT_KEY = "JWT_KEY";

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear()
};

export const saveJWT = (jwtResponse) => {
    localStorage.setItem(JWT_KEY, JSON.stringify(jwtResponse));
};

export const getJWT = () => {
    return localStorage.getItem(JWT_KEY);
};

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};

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
    return Boolean(localStorage.hasOwnProperty(JWT_KEY));
};