import React from "react";
import {logout} from "../../actions/auth";
import {useSelector} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";

export const LogOut = () => {
    const {isLoggedIn} = useSelector(state => state.auth);

    const handleLogOut = () => {
        logout();
        if (isLoggedIn) {
            window.location.reload();
        }
    };

    return (
        <div>
            <a onClick={handleLogOut()}/>
            <Redirect to='/'/>
        </div>
    );
};