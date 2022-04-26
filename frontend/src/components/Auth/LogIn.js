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


export const LogIn = (props) => {
    const required = (value) => {
        if (!value) {
            return (
                <div className="alert alert-danger" role="alert">
                    This field is required!
                </div>
            );
        }
    };

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

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(username, password))
                .then(() => {
                    setSuccessful(true);
                    props.history.push("/");
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        return <Redirect to="/"/>;
    }

    return (
        <>
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
                                       placeholder="Type your username"
                                       required={true}
                                       minLength={2}
                                       maxLength={32}
                                       value={username}
                                       onChange={onChangeUsername}
                                />
                                <span className="focus-input100" data-symbol="&#xf206;"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input className="input100"
                                       type="password"
                                       name="pass"
                                       placeholder="Type your password"
                                       required={true}
                                       minLength={8}
                                       maxLength={32}
                                       value={password}
                                       onChange={onChangePassword}
                                />
                                <span className="focus-input100" data-symbol="&#xf190;"/>
                            </div>

                            <div className="text-right p-t-8 p-b-31">
                                <a href="#">Forgot password?</a>
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"/>
                                    <button type="submit" className="login100-form-btn" disabled={loading}>Sign in</button>
                                </div>
                            </div>

                            {message && (
                                <div className="form-group">
                                    <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                        {message}
                                    </div>
                                </div>
                            )}

                            <CheckButton style={{display: "none"}} ref={checkBtn}/>

                            <div className="txt1 text-center p-t-54 p-b-20">
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

                            <div className="flex-col-c p-t-155">
                                <span className="txt1 p-b-17">Or Sign Up Using</span>
                                <a href={"/register"} className="txt2">Sign Up</a>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>

            <div id="dropDownSelect1"/>
        </>
    );
};