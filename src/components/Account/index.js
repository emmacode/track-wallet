import React, { Component } from 'react'

import Layout from "../../sharedComponents/Layout"
import Account from "./account"
import "./account.css"

class AccountComponent extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <Account />
            </Layout>
        )
    }
}

export default AccountComponent;