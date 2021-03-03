import React, { Component } from 'react';
import  AuthenticationService from './AuthenticationService.js'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router';

class Header extends Component{
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href = "/" className="navbar-brand">TodoApp</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link  className="nav-link" to="/welcome/Ace">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>LogOut</Link></li>}
                    </ul>
                </nav>
            </header>

        )
    }
}

export default withRouter(Header)