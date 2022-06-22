import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavBar from "./components/NavBarPage/NavBar";
import {Home} from "./components/HomePage/Home";
import {LogIn} from "./components/AuthPages/LogIn";
import {Register} from "./components/AuthPages/Register";
import {Profile} from "./components/ProfilePage/Profile";
import {LogOut} from "./components/AuthPages/LogOut";
import {Files} from "./components/FilesPage/Files";
import {Upload} from "./components/UploadPage/Upload";
import {AccessDenied} from "./components/AccessDeniedPage/AccessDenied";
import {AdminPage} from "./components/AdminPage/AdminPage";
import {FILES, HOME, LOGIN, PROFILE, REGISTER, LOGOUT, UPLOAD, ACCESS_DENIED, ADMIN_PAGE} from "./consts/RoutePathes";

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
                        <Route exact path={UPLOAD} component={Upload}/>

                        <Route exact path={ADMIN_PAGE} component={AdminPage}/>

                        <Route exact path={ACCESS_DENIED} component={AccessDenied}/>
                        <Route path={LOGOUT} component={LogOut}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;
