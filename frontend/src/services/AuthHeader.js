import {getJWT} from "./AuthService";

export default function authHeader() {
    const jwtResponse = JSON.parse(getJWT());
    return jwtResponse && jwtResponse.accessToken ? {Authorization: "Bearer " + jwtResponse.accessToken} : {};
}