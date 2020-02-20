import React, { Component } from 'react'

import "./AdminAccount.css"

class AdminAccount extends Component {
    render() {
        return (
            <div className="bankAccount-body">
                <div className="bankAccount-details">
                    {/* head */}
                    <div className="bankAccount-head">
                        <div>Bank Account</div>
                        <div style={{ color: "#21ba45" }}>1,000,000</div>
                    </div>
                    {/* names */}
                    <div className="bankAccount-column">
                        <div className="bankDistr">
                            <div className="bankName">Afolabi Moyinoluwa Emmanuel</div>
                            <div className="accountAmount">1,000,000</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminAccount