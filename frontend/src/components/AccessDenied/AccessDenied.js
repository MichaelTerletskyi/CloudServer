import React, {useState} from "react";
import "./style.css";
import {USER} from "../../consts/StorageEntities";
import {PROFILE} from "../../consts/RoutePathes";

export const AccessDenied = () => {
    const [isLoggedIn] = useState(sessionStorage.hasOwnProperty(USER));

    if (isLoggedIn) {
        window.location.href = PROFILE;
    }

    return (
        <h1 id="access-denied-page">Access Denied</h1>
    )
};