import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.returnMain = this.returnMain.bind(this);
    }

    returnMain() {
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><button className="btn navbar-brand" >Employee Management App</button></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent