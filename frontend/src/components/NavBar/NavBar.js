import React, {useState} from "react";
import "./navbar-menu/css/style.css"
import {NavBarLogOut} from "././NavBarLogOut";
import {NavBarLogIn} from "./NavBarLogIn";
import {NavBarRegister} from "./NavBarRegister";
import {NavBarProfile} from "./NavBarProfile";
import {NavBarFiles} from "./NavBarFiles";
import {NavBarUpload} from "./NavBarUpload";
import {NavBarAdminPage} from "./NavBarAdminPage";
import {ADMIN, USER} from "../../consts/StorageEntities";

function NavBar() {
    const [isLoggedAsUser] = useState(sessionStorage.hasOwnProperty(USER));
    const [isLoggedAsAdmin] = useState(sessionStorage.hasOwnProperty(ADMIN));

    return (
        <>
            <header className="site-navbar site-navbar-target" role="banner">
                <div className="container">
                    <div className="row align-items-center position-relative">

                        <div className="col-3">
                            <div className="site-logo">
                                <a href="/" className="font-weight-bold">
                                    <h6 id="cloud-server-logo-background">Cloud Server</h6>
                                </a>
                            </div>
                        </div>

                        <div className="col-9  text-right">
                            <span className="d-inline-block d-lg-none">
                                <a href="/" className="text-primary site-menu-toggle js-menu-toggle py-5">
                                    <span className="icon-menu h3 text-white"/>
                                </a>
                            </span>

                            <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav ml-auto">
                                    {
                                        (!isLoggedAsAdmin && !isLoggedAsUser) ? (
                                            <>
                                                <>
                                                    <NavBarLogIn/>
                                                    <NavBarRegister/>
                                                </>
                                            </>
                                        ) : (
                                            <>

                                            </>
                                        )
                                    }
                                    {
                                        isLoggedAsUser ? (
                                            <>
                                                <NavBarProfile/>
                                                <NavBarFiles/>
                                                <NavBarUpload/>
                                                <NavBarLogOut/>

                                            </>
                                        ) : (
                                            <>

                                            </>
                                        )
                                    }
                                    {
                                        isLoggedAsAdmin ? (
                                            <>
                                                <NavBarAdminPage/>
                                                <NavBarLogOut/>
                                            </>
                                        ) : (
                                            <>

                                            </>
                                        )

                                    }
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;