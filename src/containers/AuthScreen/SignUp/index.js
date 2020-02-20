import React, { Component } from 'react'
import { connect } from "react-redux";

import { signupUser } from "../../../store/authModule/actions"
import SignupComponent from '../../../components/AuthScreen/signUp'

class SignupContainer extends Component {
    render() {
        const { signupUser, auth, request } = this.props;
        return (
            <>
                <SignupComponent
                    {...this.props}
                    signupUser={signupUser}
                    request={request || {}}
                    auth={auth}
                />
            </>
        )
    }
}

const mapStateToProps = ({ utils, auth }) => ({
    request: utils,
    auth
})

const mapDispatchToProps = {
    signupUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);