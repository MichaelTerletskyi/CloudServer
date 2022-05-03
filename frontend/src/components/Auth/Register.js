import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import Select from 'react-select'

import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import {register} from "../../actions/auth";

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

const roleOptions = [
    {value: 'ROLE_USER', label: 'User'},
    {value: 'ROLE_ADMIN', label: 'Admin'}
];

export const Register = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [successful, setSuccessful] = useState(false);

    const {message} = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeRole = (e) => {
        const role = e.value;
        setRole(role);
    };

    function roleResolver(role) {
        let defaultRole = roleOptions[0].value;
        return role.length === 0 ? defaultRole : role;
    }

    const handleRegister = (e) => {
        e.preventDefault();
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(username, email, password, roleResolver(role)))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    if (successful) {
        setTimeout(function () {
            window.location.reload();
            window.location.href = '/login';
        }, 3000);
    }

    return (
        <>
            <div className="bg-register"/>
            <div className="bg-register bg2"/>
            <div className="bg-register bg3"/>

            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <Form className="login100-form validate-form" onSubmit={handleRegister} ref={form}>
                            <span className="login100-form-title p-b-49">Register</span>


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

                            <div role="register-alert" className={"register-alert-msg"}>
                                <a>&nbsp;{message && (username.length < 2 || username.length > 32) ? "Minimum 2 characters are required" : ""}</a>
                            </div>


                            <div className="wrap-input100 validate-input m-b-23" data-validate="Email is required">
                                <span className="label-input100">Email</span>
                                <input className="input100"
                                       type="text"
                                       name="email"
                                       min={3}
                                       max={254}
                                       placeholder="Type your email"
                                       value={email}
                                       onChange={onChangeEmail}
                                />
                                <span className="focus-input100" data-symbol="&#xf171;"/>
                            </div>

                            <div role="register-alert" className={"register-alert-msg"}>
                                <a>&nbsp;{message && (!isEmail(email)) ? "Email is invalid" : ""}</a>
                            </div>


                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input className="input100"
                                       type="password"
                                       name="pass"
                                       min={8}
                                       max={32}
                                       placeholder="Type your password"
                                       value={password}
                                       onChange={onChangePassword}
                                />
                                <span className="focus-input100" data-symbol="&#xf190;"/>
                            </div>

                            <div role="register-alert" className={"register-alert-msg"}>
                                <a>&nbsp;{message && (password.length < 8 || password.length > 32) ? "Minimum 8 characters are required" : ""}</a>
                            </div>


                            <div className="validate-input ">
                                <span className="label-input100">Role</span>
                                <Select
                                    options={roleOptions}
                                    defaultValue={roleOptions[0]}
                                    onChange={onChangeRole}
                                />
                                <span className="focus-input100" data-symbol="&#xf2a3;"/>
                            </div>


                            <div className="container-login100-form-btn p-t-25">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"/>
                                    <button type="submit" className="login100-form-btn">Sign up</button>
                                </div>
                            </div>

                            <div role="register-alert"
                                 className={successful ? "register-success-msg" : "register-alert-msg"}>
                                <a>&nbsp;{message}</a>
                            </div>

                            <p className="forgot-password text-right">
                                Already registered <a href="/login">log in?</a>
                            </p>


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
                        </Form>
                    </div>
                </div>
            </div>

            <div id="dropDownSelect1"/>
        </>
    );
};