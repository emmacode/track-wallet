import React, { Component } from 'react'

import Transaction from "../../../sharedComponents/transaction"
import "./transaction.css"

class TransactionComponent extends Component {
    render() {
        return (
            <div className="transaction-body">
                <div className="transaction">
                    {/* transaction  */}
                    <Transaction />
                </div>
            </div>
        )
    }
}

export default TransactionComponent;