import {getJWT, isAuthenticated} from "./AuthService";
import {userMetadata} from "../repositoryAPI/UserRepository";
import {ROLE_ADMIN, ROLE_USER} from "../consts/Roles";

export const USER_METADATA_KEY = "USER_METADATA_KEY";
export const NO_AUTHENTICATED = "NO_AUTHENTICATED";

export const fetchUserMetadata = () => {
    if (isAuthenticated() && isUser()) {
        let id = JSON.parse(getJWT()).id;
        userMetadata(id).then(response => {
            saveUserMetadata(response.data);
        });
    }
};

export const saveUserMetadata = (data) => {
    sessionStorage.setItem(USER_METADATA_KEY, JSON.stringify(data));
};

export const getUserMetadata = () => {
    if (sessionStorage.hasOwnProperty(USER_METADATA_KEY)) {
        return sessionStorage.getItem(USER_METADATA_KEY);
    }
};

export const getCurrentUserUsername = () => {
    return JSON.parse(getJWT()).username;
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