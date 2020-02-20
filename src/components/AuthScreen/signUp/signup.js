import React, { Component } from 'react';
import { Link } from "react-router-dom"

import FormField from "../../../sharedComponents/form";
import Button from "../../../sharedComponents/button";

class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: {
                    value: "",
                    name: "name"
                },
                email: {
                    value: "",
                    name: "Email"
                },
                password: {
                    value: "",
                    name: "password"
                }
            }
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        let newState = { ...this.state };
        newState.fields[name].value = value;
        this.setState(newState)
    }

    triggerSignup = e => {
        e.preventDefault();

        var fields = this.state.fields;
        var data = {};
        for (var key in fields) {
            data[key] = fields[key].value
        }
        this.props.signupUser({ data, history: this.props.history })
    }

    render() {
        const { isLoading } = this.props;
        const { name, email, password } = this.state.fields
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="signup">
                                <form onSubmit={this.triggerSignup}>
                                    <div className="signup__name">
                                        <FormField
                                            labelTitle="Full Name"
                                            placeholder="Richard Hendricks"
                                            className="signup__name-input"
                                            onChange={this.handleChange}
                                            name="name"
                                            required={true}
                                            value={name.value}
                                        />
                                    </div>
                                    <div className="signup__email">
                                        <FormField
                                            type="email"
                                            labelTitle="Email"
                                            placeholder="name@piedpiper.com"
                                            className="signup__email-input"
                                            onChange={this.handleChange}
                                            name="email"
                                            required={true}
                                            value={email.value}
                                        />
                                    </div>
                                    <div className="signup__password">
                                        <FormField
                                            type="password"
                                            labelTitle="Password"
                                            className="signup__pass-input"
                                            onChange={this.handleChange}
                                            name="password"
                                            value={password.value}
                                        />
                                    </div>
                                    <div className="signup-switch">Already have an account?
                                    <span><Link>login</Link></span>
                                    </div>
                                    <div className="signup__button">
                                        <Button
                                            btnTitle="Signup"
                                            type="submit"
                                            isLoading={isLoading}
                                            className="register-button"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default signUp;