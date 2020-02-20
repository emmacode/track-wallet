import React, { Component } from 'react';
import { connect } from "react-redux";

import { signinUser } from "../../../store/authModule/actions"
import SigninComponent from '../../../components/AuthScreen/signIn'

class SigninContainer extends Component {
    render() {
        const { signinUser, request, requestStatus } = this.props;
        return (
            <>
                <SigninComponent
                    {...this.props}
                    signinUser={signinUser}
                    requestStatus={requestStatus}
                    request={request}
                />
            </>
        )
    }
}

const mapStateToProps = ({ utils, auth }) => ({
    requestStatus: auth.requestStatus,
    request: utils
});
const mapDispatchToProps = {
    signinUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);