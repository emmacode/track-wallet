import React, { Component } from 'react'

import FormField from "../../../sharedComponents/form";
import Button from "../../../sharedComponents/button"

class Expense extends Component {
    render() {
        return (
            <div className="expense">
                {/* expense field */}
                <div className="expense-field">
                    {/* expense from */}
                    <div className="expense-from">
                        <div style={{ width: "68.75%" }}>
                            <FormField
                                labelTitle="From"
                                className="expense-account"
                            />
                        </div>
                        <div style={{ width: "31.25%", textAlign: "center" }}>
                            <FormField
                                type="number"
                                className="expense-amount"
                            />
                        </div>
                    </div>
                    {/* expense tag */}
                    <div className="expense-tag">
                        <div style={{ width: "68.75%" }}>
                            <FormField
                                labelTitle="Tags"
                                className="expense-tags"
                            />
                        </div>
                        <div style={{ width: "31.25%", textAlign: "center" }}>
                            <FormField
                                type="date"
                                className="expense-date"
                            />
                        </div>
                    </div>
                    {/* expense note */}
                    <div className="expense-note">
                        <div style={{ width: "68.75%" }}>
                            <FormField
                                className="note"
                                placeholder="Note"
                            />
                        </div>
                        <div style={{ width: "31.25%", textAlign: "center" }}>
                            <Button
                                btnTitle="Add Expense"
                                type="submit"
                                className="addExpense"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Expense