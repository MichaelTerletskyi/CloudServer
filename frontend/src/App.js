import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import {Home} from "./components/Home/Home";
import {LogIn} from "./components/Auth/LogIn";
import {Register} from "./components/Auth/Register";
import {Profile} from "./components/Profile/Profile";
import {LogOut} from "./components/Auth/LogOut";
import {Files} from "./components/Files/Files";
import {FILES, HOME, LOGIN, PROFILE, REGISTER, LOGOUT} from "./consts/RoutePathes";

const App = () => {
    return (
        <>
            <Router>
                <NavBar/>
                <div className="pages">
                    <Switch>
                        <Route exact path={HOME} component={Home}/>
                        <Route exact path={LOGIN} component={LogIn}/>
                        <Route exact path={REGISTER} component={Register}/>
                        <Route exact path={PROFILE} component={Profile}/>
                        <Route exact path={FILES} component={Files}/>
                        <Route path={LOGOUT} component={LogOut}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;
