import React from "react";

export const JWT_KEY = "JWT_KEY";

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear()
};

export const saveJWT = (jwtResponse) => {
    if (jwtResponse !== null) {
        localStorage.setItem(JWT_KEY, JSON.stringify(jwtResponse));
    }
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
        // TODO Create special page in future for 5 seconds ~
        if (decodedJwt.exp * 1000 < Date.now()) {
            alert("Auth is expired!");
            logout();
        }
    } else {
        logout();
    }
};

export const isAuthenticated = () => {
    return Boolean(localStorage.hasOwnProperty(JWT_KEY));
};