import React, { Component } from 'react';

import AdminAccount from "../AdminAccount"
import TransactionComponent from '../Transaction';
import Dashboard from '../Dashboard/Dashboard';

class Admin extends Component {
    state = {
        active: "dashboard"
    }

    // openNav = () => {
    //     document.getElementById("mySidenav").style.width = "250px";
    //     // document.getElementById("main").style.marginLeft = "150px";
    // }

    // closeNav = () => {
    //     document.getElementById("mySidenav").style.width = "0";
    //     document.getElementById("main").style.marginLeft = "0";
    // }
    render() {
        return (
            <>
                <aside id="mySidenav" className="sidenav">
                    <div className="sidenav__close-icon">
                        <i className="fas fa-times"></i>
                    </div>                        {/* <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a> */}
                    <ul className="sidebar__button">
                        {/* dashboard tab */}
                        <div>
                            <li className="sidelinks"
                                onClick={() => this.setState({ active: "dashboard" })}
                            // style={{
                            //     color:
                            //         this.state.active === "dashboard"
                            //             ? "#dd4f05"
                            //             : "#696f73"
                            // }}
                            >
                                Dashboard
                            </li>
                        </div>
                        {/* transaction tab */}
                        <div>
                            <li className="sidelinks"
                                onClick={() => this.setState({ active: "transaction" })}
                            // style={{
                            //     color:
                            //         this.state.active === "transaction"
                            //             ? "#dd4f05"
                            //             : "#696f73"
                            // }}
                            >
                                Transaction
                        </li>
                        </div>
                        {/* account tab */}
                        <div>
                            <li className="sidelinks"
                                onClick={() => this.setState({ active: "account" })}
                            // style={{
                            //     color:
                            //         this.state.active === "account"
                            //             ? "#dd4f05"
                            //             : "#696f73"
                            // }}
                            >
                                Account
                            </li>
                        </div>
                    </ul>
                </aside>
                {/* main */}
                <main id="main" className="main">
                    <div>
                        {/* first */}
                        {/* <div>
                            <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={this.openNav}>&#9776;</span>
                        </div> */}
                        {/* second  */}
                        <div>
                            {this.state.active === "dashboard" && (
                                <Dashboard />
                            )}
                            {this.state.active === "transaction" && (
                                <TransactionComponent />
                            )}
                            {this.state.active === "account" && (
                                <AdminAccount />
                            )}
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default Admin;