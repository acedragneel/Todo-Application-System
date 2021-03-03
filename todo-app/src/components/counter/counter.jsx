import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './counter.css'
/*
function Counter() {
        return(
            <div className="Counter">
                <button onClick={increment}>+1</button>
                <span className="count">0</span>
            </div>
        );
}better to make it component as it complexitity increases*/

class Counter extends Component{

    constructor() {
        super();

        this.state = {
            counter : 0,
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="App">
              <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod= {this.decrement}/>
              <CounterButton by = {5} incrementMethod = {this.increment} decrementMethod= {this.decrement}/>
              <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod= {this.decrement} />
              <span className="count">{this.state.counter}</span>
              <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>  
          );
    }

    reset()
    {
        this.setState(
            () => {
                return {counter : 0}
            }
        )
    }

    increment(by){
        this.setState(
           (prevState) => {
            return {counter : prevState.counter + by}
        }
        );
    }

    decrement(by){
        this.setState(
            (prevState) => {
                return {counter : prevState.counter - by}
            }
        )
    }

}

class CounterButton extends Component{

    //Define the inital state in a Constructor
    //state=>counter 0 ++
    /*constructor() {
        //super needs to be always called in the javascript
        super();

        //bind the increment to this class so it can access the state
        //with Arrow funtions there is no need for binding
        //this.increment = this.increment.bind(this);
        //this.decrement = this.decrement.bind(this);
    }*/

    //Arrow functions
    //render = () =>{

    render (){
        //const style =  {fontSize : "50px",padding: "15px 30px"};
        return(
            <div className="Counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }

    //increment(){
        //Update state - counter++
        //Do not mutate state directly. Use setState()  react/no-direct-mutation-state
        //this.state.counter++;
        //this.setState({
        //    counter : this.state.counter + this.props.by
        //});
        //state is merged with the existing state
        //console.log(increment);

    //    this.props.incrementMethod(this.props.by);      
    //}

    //decrement()
    //{
        //this.props.decrementMethod(this.props.by);
    //}
}
/*
this is global and local is in the above class
local is called with this.increment
global it is just increment
function increment()
{
    console.log(increment);
}*/

//default value for the prop
CounterButton.defaultProps = {
    by: 1
}

CounterButton.protoTypes={
    by : PropTypes.number
}

export default Counter