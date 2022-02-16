import "./App.css";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./components/Pages/Home";

import {Contact} from "./components/Pages/Contact";
import React from "react";

function App() {
    return (
        <>
            <Router>
                <NavBar/>
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
