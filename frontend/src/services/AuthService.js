import React from "react";

export const JWT_KEY = "JWT_KEY";
export const ROLE_USER = "ROLE_USER";

export const logout = () => {
    sessionStorage.clear();
};

export const saveJWT = (jwtResponse) => {
    sessionStorage.clear();
    sessionStorage.setItem(JWT_KEY, JSON.stringify(jwtResponse));
    // alert(String(getCurrentUserRole()) === String(ROLE_USER));
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

export const AuthVerify = () => {
    const jwt = JSON.parse(getJWT());
    if (jwt) {
        const decodedJwt = parseJwt(jwt.accessToken);
        if (decodedJwt.exp * 1000 < Date.now()) {
            logout();
        }
    }
};

export const getCurrentUserRole = () => {
    return JSON.parse(getJWT()).roles;
};