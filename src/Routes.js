import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import history from "./utils/@history";

import HomeContainer from "./containers/HomeContainer";
import SigninContainer from "./containers/AuthScreen/SignIn";
import SignupContainer from "./containers/AuthScreen/SignUp"
import AccountContainer from "./containers/AccountContainer";
import AdminContainer from "./containers/AdminContainer"

class Routes extends PureComponent {
    render() {
        return (
            <>
                <Router history={history}>
                    <Switch>
                        <Route path="/" component={HomeContainer} exact />
                        <Route path="/signin" component={SigninContainer} exact />
                        <Route path="/signup" component={SignupContainer} exact />
                        <Route path="/account" component={AccountContainer} exact />
                        <Route path="/user" component={AdminContainer} exact />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Routes;