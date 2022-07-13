import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {AuthVerify} from "./services/AuthService";
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
    AuthVerify();
    return (
        <>
            <Router>
                <NavBar/>
                <div className="pages">
                    <Routes>
                        <Route exact path={HOME} element={<Home/>}/>

                        <Route exact path={LOGIN} element={<LogIn/>}/>
                        <Route exact path={REGISTER} element={<Register/>}/>

                        <Route exact path={PROFILE} element={<Profile/>}/>
                        <Route exact path={FILES} element={<Files/>}/>
                        <Route exact path={UPLOAD} element={<Upload/>}/>

                        <Route exact path={ADMIN_PAGE} element={<AdminPage/>}/>

                        <Route exact path={ACCESS_DENIED} element={<AccessDenied/>}/>
                        <Route path={LOGOUT} element={<LogOut/>}/>
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default App;
