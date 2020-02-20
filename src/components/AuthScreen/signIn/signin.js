import React, { Component } from 'react';

import signin from "../../../assets/signin.svg";
import FormField from "../../../sharedComponents/form";
import Button from "../../../sharedComponents/button"

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                email: {
                    value: "",
                    name: "email"
                },
                password: {
                    value: "",
                    name: "password"
                }
            }
        }
    }

    _handleChange = e => {
        const { name, value } = e.target;
        let newState = { ...this.state };
        newState.fields[name].value = value;
        this.setState(newState)
    }

    handleLogin = e => {
        e.preventDefault()

        var fields = this.state.fields;
        var data = {};
        for (var key in fields) {
            data[key] = fields[key].value
        }
        this.props.signinUser({ data, history: this.props.history })
    }

    render() {
        const { isLoading } = this.props;
        const { email, password } = this.state.fields
        return (
            <div className="container signin">
                <div className="row">
                    <div className="col-md-6 signin-form">
                        <form method="post" onSubmit={this.handleLogin}>
                            <div className="signin__email">
                                <FormField
                                    type="email"
                                    name="email"
                                    onChange={this._handleChange}
                                    value={email.value}
                                    placeholder="name@piedpiper.com"
                                    labelTitle="Email"
                                    className="signin__email-input"
                                />
                            </div>
                            <div className="signin__password">
                                <FormField
                                    onChange={this._handleChange}
                                    value={password.value}
                                    type="password"
                                    name="password"
                                    labelTitle="Password"
                                    className="signin__password-input"
                                />
                            </div>
                            <div className="signin__button">
                                <Button
                                    className="login-button"
                                    btnTitle="Login"
                                    type="submit"
                                    isLoading={isLoading}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 text-center signin-icon">
                        <img src={signin} alt="signin icon" className="img-fluid" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn