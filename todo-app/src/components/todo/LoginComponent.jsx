import React, { Component } from 'react';
import  AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{

    constructor(props) {
        super(props)
        this.state = {
            username : 'Ace',
            password : '',
            hasLoginFailed : false,
            showSuccessMessage : false
        }

        //this.handleUserNameChange = this.handleUserNameChange.bind(this)    
        //this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        //console.log(event.target.value);
        //controlled Component
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }

    loginClicked() {
        /*//this can be done at backend
        if(this.state.username === 'Ace' && this.state.password === 'dummy'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSuccessMessage : true})
            //this.setState({hasLoginFailed : false})
        }           
        else
        {
            this.setState({showSuccessMessage : false})
            this.setState({hasLoginFailed : true})
        }           
        //console.log(this.state)*/

        /*AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
        .then(
            () =>  {
                AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
                this.props.history.push(`/welcome/${this.state.username}`)
            }
        ).catch( () => {
            this.setState({showSuccessMessage : false})
            this.setState({hasLoginFailed : true})
        }
        )*/

        AuthenticationService.executeJwtAuthenticationService(this.state.username,this.state.password)
        .then((response) =>  {
                AuthenticationService.registerJwtSuccessfullLogin(this.state.username,response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }
        ).catch( () => {
            this.setState({showSuccessMessage : false})
            this.setState({hasLoginFailed : true})
        }
        )
    }

    render() {
        return(
            <div className="LoginComponent">
            <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {/*{this.state.showSuccessMessage && <div>Login SuccessFul</div>}*/}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" onChange={this.handleChange}/>
                    <button className = "btn "onClick={this.loginClicked}>Login</button>
                </div>
            </div>          
        );
    }

    /*handleUserNameChange(event) {
        //console.log(event.target.value);
        //controlled Component
        this.setState(
            {
                username : event.target.value
            }
        )
    }

    handlePasswordChange(event) {
        //console.log(event.target.value);
        this.setState(
            {
                password : event.target.value
            }
        )
    }*/

    
}

function ShowInvalidCredentials(props) {
    if(props.hasLoginFailed === true){
        return <div>Invalid Credentials</div>
    }else{
        return <div>Login SuccessFul</div>
    }

}

export default LoginComponent