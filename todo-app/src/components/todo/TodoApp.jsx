import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import UpdateComponent from './UpdateComponent';

class TodoApp extends Component{
    render() {
        return (
            <div className="TodoApp">               
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component = {LoginComponent}/>
                        <Route path="/login" component = {LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component = {WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos/:id" component={UpdateComponent}/>
                        <AuthenticatedRoute path="/todos" component = {ListTodosComponent}/>
                        <Route path="/logout" component = {LogoutComponent}/>
                        <Route component = {ErrorComponent}/>
                    </Switch>
                    <Footer/>
                </Router>
                
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

export default TodoApp
