import React from "react";
import {logout} from "../../actions/auth";
import {useSelector} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";
import {HOME} from "../../consts/RoutePathes";

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
            <Redirect to={HOME}/>
        </div>
    );
};