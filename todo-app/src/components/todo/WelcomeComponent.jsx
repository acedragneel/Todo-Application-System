import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/helloWorldService.js';

class WelcomeComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            welcomeMessage : ''
        }
         
        this.reteriveWelcomeMessage = this.reteriveWelcomeMessage.bind(this);
        this.handleSucessfulResponse = this.handleSucessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    reteriveWelcomeMessage() {
        //console.log("Hello World")
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSucessfulResponse(response))

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSucessfulResponse(response))

        HelloWorldService.executeHelloWorldPathService(this.props.match.params.name)
        .then(response => this.handleSucessfulResponse(response))
        .catch(error => this.handleError(error))

       }

    handleSucessfulResponse(response)
    {
        console.log(response)
        this.setState({
            welcomeMessage : response.data.name
        })
    }

    handleError(error)
    {
        console.log(error.response)
        let errorMessage = '';
        
        if(error.message)
             errorMessage += error.message

        if(error.response && error.response.data){
            errorMessage +=error.response.data.message
        }

        this.setState({
            welcomeMessage : errorMessage
        })
    }

    render() {
       return(       
       <div className="container">
           <h1>Welcome!</h1>
           <div>
               Welcome {this.props.match.params.name} to React js coding You can manage your todos <Link to="/todos">here</Link>
           </div>
           <div className="container">
               Click here to get a customized welcome message<br></br> 
               <button onClick={this.reteriveWelcomeMessage} className="btn btn-sm btn-success">Welcome Message</button>
           </div>
           <div className="container">
                {this.state.welcomeMessage}
           </div>
       </div>
       )
    }


}



export default WelcomeComponent