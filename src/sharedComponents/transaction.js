import React from 'react'

const Transaction = function (props) {
    const {
        transactionDate,
        transactionAccount,
        transactionDesc,
        transactionAmount
    } = props;

    return (
        <>
            <div className="transaction-details">
                <div className="transaction-date">
                    10/02/2020
            </div>
                <div className="transaction-account">
                    Afolabi Moyinoluwa Emmanuel
            </div>
                <div className="transaction-desc">
                    Laptop keyboard fix
            </div>
                <div className="transaction-amount">
                    #23000
            </div>
            </div>
        </>
    )
}

export default Transaction;