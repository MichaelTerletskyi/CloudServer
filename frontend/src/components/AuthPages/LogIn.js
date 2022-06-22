import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {login} from "../../actions/auth";

import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/iconic/css/material-design-iconic-font.min.css";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/animsition/css/animsition.min.css";
import "./vendor/select2/select2.min.css";
import "./vendor/daterangepicker/daterangepicker.css";
import "./css/util.css";
import "./css/main.css";
import "./style.css"
import {ADMIN, USER} from "../../consts/StorageEntities";
import {ACCESS_DENIED, HOME, REGISTER} from "../../consts/RoutePathes";

export const LogIn = (props) => {
    const [isLoggedAsUser] = useState(sessionStorage.hasOwnProperty(USER));
    const [isLoggedAsAdmin] = useState(sessionStorage.hasOwnProperty(ADMIN));

    if(isLoggedAsUser || isLoggedAsAdmin) {
        window.location.href = ACCESS_DENIED;
    }

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const {isLoggedIn} = useSelector(state => state.auth);
    const {message} = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(username, password))
                .then(() => {
                    setSuccessful(true);
                    props.history.push(HOME);
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn && successful) {
        return <Redirect to={HOME}/>;
    }

    return (
        <>
            <div className="bg-login"/>
            <div className="bg-login bg2"/>
            <div className="bg-login bg3"/>
            {/*<div className="content">*/}
            {/*    <h1>Sliding Diagonals Background Effect</h1>*/}
            {/*</div>*/}

            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <Form className="login100-form validate-form" onSubmit={handleLogin} ref={form}>
                            <span className="login100-form-title p-b-49">Login</span>


                            <div className="wrap-input100 validate-input m-b-23" data-validate="Username is required">
                                <span className="label-input100">Username</span>
                                <input className="input100"
                                       type="text"
                                       name="username"
                                       min={2}
                                       max={32}
                                       placeholder="Type your username"
                                       value={username}
                                       onChange={onChangeUsername}
                                />
                                <span className="focus-input100" data-symbol="&#xf206;"/>
                            </div>

                            <div role="login-alert" className={"login-alert-msg"}>
                                <a>&nbsp;{message && (username.length < 2 || username.length > 32) ? "Minimum 2 characters are required" : ""}</a>
                            </div>


                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input className="input100"
                                       type="password"
                                       name="pass"
                                       min={3}
                                       max={254}
                                       placeholder="Type your password"
                                       value={password}
                                       onChange={onChangePassword}
                                />
                                <span className="focus-input100" data-symbol="&#xf190;"/>
                            </div>

                            <div role="login-alert" className={"login-alert-msg"}>
                                <a>&nbsp;{message && (password.length < 8 || password.length > 32) ? "Minimum 8 characters are required" : ""}</a>
                            </div>


                            <div className="text-right p-t-8 p-b-31">
                                <a href="#">Forgot password?</a>
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"/>
                                    <button type="submit" className="login100-form-btn" disabled={loading}>Sign in
                                    </button>
                                </div>
                            </div>

                            <div role="login-alert" className={"login-alert-msg"}>
                                <a>&nbsp;{message}</a>
                            </div>

                            <CheckButton style={{display: "none"}} ref={checkBtn}/>


                            <div className="txt1 text-center p-t-25 p-b-20">
                                <span>Or Sign Up Using</span>
                            </div>

                            <div className="flex-c-m">
                                <a href="#" className="login100-social-item bg1">
                                    <i className="fa fa-facebook"/>
                                </a>
                                <a href="#" className="login100-social-item bg2">
                                    <i className="fa fa-twitter"/>
                                </a>
                                <a href="#" className="login100-social-item bg3">
                                    <i className="fa fa-google"/>
                                </a>
                            </div>


                            <div className="flex-col-c p-t-25">
                                <span className="txt1 p-b-17">Or Sign Up Using</span>
                                <a href={REGISTER} className="txt2">Sign Up</a>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>

            <div id="dropDownSelect1"/>
        </>
    );
};