import axios from "axios";
import {ADMIN, IP_DETAILS, USER} from "../consts/StorageEntities";
import {DATA_API_URL, GET_ALL_FILES_METADATA_BY_USER_ID, IP_ASK_URL} from "../consts/APIUrls";
import {ROLE_ADMIN, ROLE_USER} from "../consts/Roles";

export function userDataHandler(data) {
    let role = JSON.parse(JSON.stringify(data.roles));

    if (role == ROLE_USER) {
        sessionStorage.setItem(USER, JSON.stringify(data));
        fetchUserFiles(JSON.parse(sessionStorage.getItem(USER)).id).then(r => {
            console.log(JSON.stringify(r))
        });
        fetchIpDetails().then(r => {
            console.log(JSON.stringify(r))
        });
    }
    if (role == ROLE_ADMIN) {
        sessionStorage.setItem(ADMIN, JSON.stringify(data));
    }
}

async function fetchUserFiles(id) {
    axios.get(DATA_API_URL + GET_ALL_FILES_METADATA_BY_USER_ID + id)
        .then((response) => {
            response.data.forEach(file => {
                sessionStorage.setItem(JSON.parse(JSON.stringify(file)).originalFilename, JSON.stringify(file));
            });
        });

}

async function fetchIpDetails() {
    axios.get(IP_ASK_URL).then((res) => {
        alert(JSON.stringify(res.data));
        sessionStorage.setItem(IP_DETAILS, JSON.stringify(res.data));
    });
}