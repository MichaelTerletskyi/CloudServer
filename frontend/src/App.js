import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {LogOut} from "./components/Auth/LogOut";
import {LogIn} from "./components/Auth/LogIn";
import {Register} from "./components/Auth/Register";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    return (
        <>
            <Router>
                <NavBar/>
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={LogIn}/>
                        <Route exact path="/register" component={Register}/>
                        <Route path="/logout" component={LogOut}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;
