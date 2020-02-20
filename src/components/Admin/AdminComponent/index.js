import React, { Component } from 'react';

import "./admin.css";
import Admin from "./admin"
import Footer from "../../../sharedComponents/footer"

class AdminComponent extends Component {

    render() {
        return (
            <div className="grid-container">
                <div className="menu-icon">
                    <i className="fas fa-bars"></i>
                </div>
                <header className="header">
                    <div className="header__dashboard">Dashboard</div>
                    <div className="header__face">Afolabi Moyinoluwa Emmanuel</div>
                </header>
                <Admin />
                <footer className="footer">
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default AdminComponent;