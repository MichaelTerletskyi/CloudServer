import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import "./css/LogInAndRegister.css";
import {login} from "../../actions/auth";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

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
        <div className="outer">
            <div className="inner">

                <Form onSubmit={handleLogin} ref={form}>
                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
                    </div>

                    {/*<div className="form-group">*/}
                    {/*    <div className="custom-control custom-checkbox">*/}
                    {/*        <input type="checkbox" className="custom-control-input" id="customCheck1"/>*/}
                    {/*        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <button type="submit" className="btn btn-dark btn-lg btn-block" disabled={loading}>Sign in</button>

                    {/*<p className="forgot-password text-right">*/}
                    {/*    Forgot <a
                     href="#">password?</a>*/}
                    {/*</p>*/}

                    {message && (
                        <div className="form-group">
                            <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                {message}
                            </div>
                        </div>
                    )}

                    <CheckButton style={{display: "none"}} ref={checkBtn}/>
                </Form>

            </div>
        </div>
    );
};