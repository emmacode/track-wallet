import React, { Component } from 'react'

import FormField from '../../sharedComponents/form';
import Button from "../../sharedComponents/button"

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                base_currency: {
                    value: "",
                    name: "currency"
                },
                account_name: {
                    value: "",
                    name: "accountName"
                },
                amount: {
                    value: "",
                    name: "accountAmount"
                }
            }
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        let newState = { ...this.state };
        newState.fields[name].value = value;
        this.setState(newState);
    }

    render() {
        const { base_currency, amount, account_name } = this.state.fields;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="account">
                            <form>
                                <h1 className="account-header">TrackWallet setup</h1>
                                <h6 className="setup-desc">Create an account you would like to keep track of.
                                It could be cash in your wallet, bank accounts, credit cards or even a loan to your friend
                            </h6>
                                <div className="account__detail">
                                    <div className="currency-option">
                                        <FormField
                                            type="select"
                                            labelTitle="base currency"
                                            className="base-currency"
                                            name="currency"
                                            onChange={this.handleChange}
                                            value={base_currency.value}
                                        />
                                    </div>
                                    <div className="account-name">
                                        <FormField
                                            className="account__detail-input"
                                            labelTitle="Name"
                                            name="accountName"
                                            onChange={this.handleChange}
                                            value={account_name.value}
                                        />
                                    </div>
                                    <div className="account__amount">
                                        <FormField
                                            type="number"
                                            labelTitle="Amount"
                                            placeholder="Balance"
                                            className="account__amount-input"
                                            name="accountAmount"
                                            onChange={this.handleChange}
                                            value={amount.value}
                                        />
                                    </div>
                                    <div className="account-save">
                                        <Button
                                            className="save-account"
                                            btnTitle="Save account"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}

export default Account;