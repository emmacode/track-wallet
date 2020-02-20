import React, { Component } from 'react';
import { Link } from "react-router-dom";

import wallet1 from "../../assets/wallet1.svg";

class Home extends Component {
    render() {
        return (
            <div className="container-fluid home__banner">
                <div className="row">
                    <div className="col-md-6 home__banner-text">
                        <h1>
                            <strong>
                                We are working together to build a
                                PWA wallet tracker to monitor your daily expenditure
                        </strong>
                        </h1>
                        <button className="btn btn-primary btn-large getStarted__button"><Link to="/signin">Find out more</Link></button>
                    </div>
                    <div className="col-md-6 home__banner-icon">
                        <div className="home__banner-icon">
                            <img class="img-fluid" src={wallet1} alt="wallet icon" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;   