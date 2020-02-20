import React, { Component } from 'react'

import FormField from "../../../sharedComponents/form";
import Button from "../../../sharedComponents/button"

class Income extends Component {
    render() {
        return (
            <div className="income">
                {/* expense field */}
                <div className="income-field">
                    {/* expense from */}
                    <div className="income-to">
                        <div style={{ width: "68.75%" }}>
                            <FormField
                                labelTitle="From"
                                className="income-account"
                            />
                        </div>
                        <div style={{ width: "31.25%", textAlign: "center" }}>
                            <FormField
                                type="number"
                                className="income-amount"
                            />
                        </div>
                    </div>
                    {/* expense tag */}
                    <div className="income-tag">
                        <div style={{ width: "68.75%" }}>
                            <FormField
                                labelTitle="Tags"
                                className="income-tags"
                            />
                        </div>
                        <div style={{ width: "31.25%", textAlign: "center" }}>
                            <FormField
                                type="date"
                                className="income-date"
                            />
                        </div>
                    </div>
                    {/* expense note */}
                    <div className="income-note">
                        <div style={{ width: "68.75%" }}>
                            <FormField
                                className="note"
                                placeholder="Note"
                            />
                        </div>
                        <div style={{ width: "31.25%", textAlign: "center" }}>
                            <Button
                                btnTitle="Add Income"
                                type="submit"
                                className="addIncome"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Income;