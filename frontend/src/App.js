import React, {useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Router} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";

import {logout} from "./actions/auth";
import {clearMessage} from "./actions/message";

import {history} from "./helpers/history";

import EventBus from "./common/EventBus";
import NavBarPanel from "./components/NavBarPanel";

const App = () => {
    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage());
        });
    }, [dispatch]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);

    return (
        <Router history={history}>
            <div>




                {/*<nav className="navbar navbar-expand navbar-dark bg-dark">*/}
                {/*        <Link to={"/"} className="navbar-brand">*/}
                {/*            Main*/}
                {/*        </Link>*/}
                {/*        <div className="navbar-nav mr-auto">*/}
                {/*            <li className="nav-item">*/}
                {/*                <Link to={"/home"} className="nav-link">*/}
                {/*                    Home*/}
                {/*                </Link>*/}
                {/*            </li>*/}

                {/*            {isAdmin && (*/}
                {/*                <li className="nav-item">*/}
                {/*                    <Link to={"/admin"} className="nav-link">*/}
                {/*                        Admin Board*/}
                {/*                    </Link>*/}
                {/*                </li>*/}
                {/*            )}*/}

                {/*            {currentUser && (*/}
                {/*                <li className="nav-item">*/}
                {/*                    <Link to={"/user"} className="nav-link">*/}
                {/*                        User Board*/}
                {/*                    </Link>*/}
                {/*                </li>*/}
                {/*            )}*/}
                {/*        </div>*/}

                {/*    {currentUser ? (*/}
                {/*        <div className="navbar-nav ml-auto">*/}
                {/*            <li className="nav-item">*/}
                {/*                <Link to={"/profile"} className="nav-link">*/}
                {/*                    {currentUser.username} ABC*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li className="nav-item">*/}
                {/*                <a href="/logOut" className="nav-link" onClick={logOut}>*/}
                {/*                    LogOut ABC*/}
                {/*                </a>*/}
                {/*            </li>*/}
                {/*        </div>*/}
                {/*    ) : (*/}
                {/*        <div className="navbar-nav ml-auto">*/}
                {/*            <li className="nav-item">*/}
                {/*                <Link to={"/login"} className="nav-link">*/}
                {/*                    Login (In)*/}
                {/*                </Link>*/}
                {/*            </li>*/}

                {/*            <li className="nav-item">*/}
                {/*                <Link to={"/register"} className="nav-link">*/}
                {/*                    Sign Up (Registered)*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</nav>*/}


                <NavBarPanel/>

                {
                    <h1>{JSON.stringify(currentUser)}</h1>
                }
            </div>
        </Router>
    );
};

export default App;