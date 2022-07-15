import React, {useRef, useState} from "react";
import {register} from "./../../repository/UserRepository";
import {validateEmail, validatePassword, validateUsername} from "../../services/validation/AuthValidation";
import Select from 'react-select'

import {LOGIN} from "../../consts/RoutePathes";

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

const roleOptions = [
    {value: 'ROLE_USER', label: 'User'},
    {value: 'ROLE_ADMIN', label: 'Admin'}
];

export const Register = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [successfully, setSuccessfully] = useState(false);
    const [messages, setMessages] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: ""
    });

    const InputChange = (e) => {
        const {name, value} = e.target;
        setFormData((preData) => {
            return {
                ...preData,
                [name]: value
            }
        })
    };

    const onChangeRole = (e) => {
        let defaultRole = roleOptions[0].value;
        formData.role = (e.value === 0 ? defaultRole : e.value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        let username = formData.username;
        let email = formData.email;
        let password = formData.password;
        let roles = formData.role;

        if (validateUsername(username) && validateEmail(email) && validatePassword(password)) {
            await register(username, email, password, roles)
                .then(response => {
                    let success = response.data.successful;
                    let msg = response.data.message;

                    setSuccessfully(success);
                    setMessages(msg);
                    setTimeout(() => {
                        window.location.href = LOGIN;
                    }, success ? 500 : 5000);
                });
        }
    };

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
                                       value={formData.username}
                                       onChange={InputChange}
                                />
                                <span className="focus-input100" data-symbol="&#xf206;"/>
                            </div>

                            <div role="register-alert" className={"register-alert-msg"}>
                                <a>&nbsp;{validateUsername(formData.username) ? "" : "Minimum 2 characters are required"}</a>
                            </div>


                            <div className="wrap-input100 validate-input m-b-23" data-validate="Email is required">
                                <span className="label-input100">Email</span>
                                <input className="input100"
                                       type="email"
                                       name="email"
                                       min={8}
                                       max={254}
                                       placeholder="Type your email"
                                       value={formData.email}
                                       onChange={InputChange}
                                />
                                <span className="focus-input100" data-symbol="&#xf171;"/>
                            </div>

                            <div role="register-alert" className={"register-alert-msg"}>
                                <a>&nbsp;{validateEmail(formData.email) ? "" : "Email is invalid"}</a>
                            </div>


                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input className="input100"
                                       type="password"
                                       name="password"
                                       min={8}
                                       max={32}
                                       placeholder="Type your password"
                                       value={formData.password}
                                       onChange={InputChange}
                                />
                                <span className="focus-input100" data-symbol="&#xf190;"/>
                            </div>

                            <div role="register-alert" className={"register-alert-msg"}>
                                <a>&nbsp;{validatePassword(formData.password) ? "" : "Minimum 8 characters are required"}</a>
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
                                 className={successfully ? "register-success-msg" : "register-alert-msg"}>
                                <a>&nbsp;{messages}</a>
                            </div>

                            <p className="forgot-password text-right">
                                Already registered <a href={LOGIN}>log in?</a>
                            </p>

                            <CheckButton style={{display: "none"}} ref={checkBtn}/>

                            {/*<div className="txt1 text-center p-t-25 p-b-20">*/}
                            {/*    <span>Or Sign Up Using</span>*/}
                            {/*</div>*/}

                            {/*<div className="flex-c-m">*/}
                            {/*    <a href="#" className="login100-social-item bg1">*/}
                            {/*        <i className="fa fa-facebook"/>*/}
                            {/*    </a>*/}
                            {/*    <a href="#" className="login100-social-item bg2">*/}
                            {/*        <i className="fa fa-twitter"/>*/}
                            {/*    </a>*/}
                            {/*    <a href="#" className="login100-social-item bg3">*/}
                            {/*        <i className="fa fa-google"/>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </Form>
                    </div>
                </div>
            </div>

            <div id="dropDownSelect1"/>
        </>
    );
};