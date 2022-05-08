import React, {useState} from "react";
import {ADMIN} from "../../consts/StorageEntities";
import {ACCESS_DENIED} from "../../consts/RoutePathes";

export const AdminPage = () => {
    const [permissionCheck] = useState(sessionStorage.hasOwnProperty(ADMIN));

    if (!permissionCheck) {
        window.location.href = ACCESS_DENIED;
    }

    return (
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Admin Page</h1>
        </>
    );
};
