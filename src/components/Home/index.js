import React, { Component } from 'react';
import Layout from '../../sharedComponents/Layout';

import Home from "./Home"

import "./home.css";

class HomeComponent extends Component {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <Home />
                </Layout>
            </>
        )
    }
}

export default HomeComponent;