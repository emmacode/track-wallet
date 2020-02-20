import React, { Component } from 'react'
import Header from './Header'

class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <Header />
                <div>
                    {children}
                </div>
            </div>
        )
    }

}

export default Layout;