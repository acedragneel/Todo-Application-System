import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js';
import moment from 'moment';
    
class ListTodosComponent extends Component{

    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            todos : [],
            message : null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount()
    {
        if(this.state.id === -1)
        {
            return
        }
        console.log('componentDidMount')
        let username = AuthenticationService.getLoggedinUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(response => {
            this.setState({
                todos: response.data
            })
        })

    }

    deleteTodoClicked(id)
    {
        let username = AuthenticationService.getLoggedinUserName()
        //console.log(username)
        TodoDataService.deleteTodo(username,id)
        .then(response=>{
            this.setState({
                message : `Delete of todo ${id} Successful` 
            })
            this.refreshTodos();
        })
    }

    updateTodoClicked(id)
    {
        let username = AuthenticationService.getLoggedinUserName()
        this.props.history.push(`/todos/${id}`)
    }

    addTodoClicked()
    {
        let username = AuthenticationService.getLoggedinUserName()
        this.props.history.push(`/todos/-1`)
    }

    refreshTodos()
    {       
        let username = AuthenticationService.getLoggedinUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(response => {
            this.setState({
                todos: response.data
            })
        }) 
    }

    render() {
        console.log('render')
        return(
        <div>
            <h1>Todos</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container"> 
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Target Date</th>
                        <th>Is Completed</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map (
                            todo =>
                            <tr key ={todo.id}>
                                <td>{todo.description}</td>
                                <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                <td>{todo.done.toString()}</td>  
                                <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>  
                                <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>                            
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="row">
                <button className= "btn btn-success" onClick={this.addTodoClicked}>Add</button>
            </div>
            </div>
        </div> 
        ) 
    }
}

export default ListTodosComponent