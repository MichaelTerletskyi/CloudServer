import {USER} from "../consts/StorageEntities";

export default function authHeader() {
    const user = JSON.parse(sessionStorage.getItem(USER));
    return user && user.accessToken ? {Authorization: "Security " + user.accessToken} : {};
}