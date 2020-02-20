import React, { Component } from 'react'

import "./signin.css"
import SignIn from './signin'
import Layout from '../../../sharedComponents/Layout';
import { authRequest } from "../../../store/authModule/saga";
import { isRequestActive } from "../../../utils/misc"

class SigninComponent extends Component {
    render() {
        const { signinUser, request, requestStatus } = this.props;
        return (
            <Layout {...this.props}>
                <SignIn
                    signinUser={signinUser}
                    request={request}
                    requestStatus={requestStatus}
                    isLoading={isRequestActive(request.request, authRequest.loginRequest)}
                />
            </Layout>
        )
    }
}

export default SigninComponent;