import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./components/Pages/Home";
import {Contact} from "./components/Pages/Contact";
import {LogOut} from "./components/Pages/LogOut";
import {LogIn} from "./components/Pages/LogIn";
import {Register} from "./components/Pages/Register";

// https://react-select.com/home

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
                        <Route path="/contact" component={Contact}/>
                        <Route path="/logout" component={LogOut}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;
