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

// TODO https://stackoverflow.com/questions/62384395/protected-route-with-react-router-v6
const App = () => {
    AuthVerify();
    return (
        <>
            <Router>
                <NavBar/>
                <div className="pages">
                    <Routes>
                        {/*ALL NO_AUTHENTICATED*/}
                        <Route exact path={HOME}  element={<Home/> } />
                        <Route exact path={LOGIN} element={<LogIn/>}/>
                        <Route exact path={REGISTER} element={<Register/>}/>

                        {/*USER AUTHENTICATED*/}
                        <Route exact path={PROFILE} element={<Profile/>} />
                        <Route exact path={FILES} element={<Files/>}/>
                        <Route exact path={UPLOAD} element={<Upload/>}/>

                        {/*ADMIN AUTHENTICATED*/}
                        <Route exact path={ADMIN_PAGE} element={<AdminPage/>}/>

                        {/*ALL AUTHENTICATED*/}
                        <Route exact path={ACCESS_DENIED} element={<AccessDenied/>}/>
                        <Route path={LOGOUT} element={<LogOut/>}/>

                        {/*TODO Create NotFoundRoute*/}
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default App;
