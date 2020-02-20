import React, { Component } from 'react';

import Layout from "../../../sharedComponents/Layout";
import SignUp from "./signup";
import { authRequest } from "../../../store/authModule/saga";
import { isRequestActive } from "../../../utils/misc";
import "./signup.css"

class SignupComponent extends Component {
    render() {
        const { signupUser, request, auth } = this.props;
        return (
            <Layout {...this.props}>
                <SignUp
                    {...this.props}
                    signupUser={signupUser}
                    request={request}
                    auth={auth}
                    isLoading={
                        isRequestActive(
                            request.request,
                            authRequest.signupRequest
                        )
                    }
                />
            </Layout>
        )
    }
}

export default SignupComponent;