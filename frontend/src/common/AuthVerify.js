import React from "react";
import {history} from '../helpers/history';

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};

const AuthVerify = (props) => {
    history.listen(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));

        if (user) {
            const decodedJwt = parseJwt(user.accessToken);

            if (decodedJwt.exp * 1000 < Date.now()) {
                props.logOut();
            }
        }
    });

    return <div/>;
};

export default AuthVerify;