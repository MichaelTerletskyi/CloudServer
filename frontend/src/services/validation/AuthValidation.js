import {isEmail} from "validator";

export function validateUsername(username) {
    return username.length >= 2 && username.length <= 32;
}

export function validatePassword(password) {
    return password.length >= 8 && password.length <= 32;
}

export function validateEmail(email) {
    return Boolean(isEmail(email))
}