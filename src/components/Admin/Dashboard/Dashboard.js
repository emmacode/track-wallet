import React, { Component } from 'react'

import Expense from "./expense";
import Income from "./income"
import "./dashboard.css"

class Dashboard extends Component {
    state = {
        active: "expense"
    }
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-worth">
                    <div className="worth">
                        net worth
                        <span
                            style={{
                                color: "#21ba45"
                            }}
                        >
                            1,000,000
                        </span>
                    </div>
                    <div className="bank-account">
                        <div>
                            <h3 className="text-center">Bank Account</h3>
                            <hr />
                        </div>
                        {/* account details */}
                        <div className="account-detail">
                            {/* bank detail */}
                            <div className="bank-detail">
                                <div className="account-name">Afolabi Moyinoluwa Emmanuel</div>
                                <div className="balance">1,000,000</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-transaction">
                    <div className="new-transc">New Transaction</div>
                    <div className="transaction-table">
                        <div className="tab_button">
                            {/* Expense tab */}
                            <div>
                                <button className="tablinks"
                                    onClick={() => this.setState({ active: "expense" })}
                                    style={{
                                        borderColor: "#696f73",
                                        outline: "none",
                                        color:
                                            this.state.active === "expense"
                                                ? "#ffffff"
                                                : "#dd4f05"
                                        ,
                                        backgroundColor:
                                            this.state.active === "expense"
                                                ? "#dd4f05"
                                                : "#ffffff"
                                    }}
                                >
                                    Expense
                                </button>
                            </div>
                            {/* Income tab */}
                            <div>
                                <button className="tablinks"
                                    style={{
                                        borderColor: "#696f73",
                                        outline: "none",
                                        color:
                                            this.state.active === "income"
                                                ? "#ffffff"
                                                : "#dd4f05"
                                        ,
                                        backgroundColor:
                                            this.state.active === "income"
                                                ? "#dd4f05"
                                                : "#ffffff"
                                    }}
                                    onClick={() => this.setState({ active: "income" })}
                                >
                                    Income
                                </button>
                            </div>
                        </div>
                        {this.state.active === "expense" && (
                            <Expense />
                        )}
                        {this.state.active === "income" && (
                            <Income />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;