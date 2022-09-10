
import React, { Component } from 'react';
import FirstComponent from "./components/learning_examples/FirstComponent";
import SecondComponent from "./components/learning_examples/SecondComponent";
import ThirdComponent from "./components/learning_examples/ThirdComponent";
import Counter from "./components/counter/counter";
import TodoApp from "./components/todo/TodoApp";
import logo from './logo.svg';
import './App.css';
import './bootstarp.css'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*(Counter/>*/}
        {/*console.log(Hello)*/}
        <TodoApp/>
      </div>  
    );
  }
}

class LearningComponents extends Component{
  render(){
    return (
    <div className="LearningComponents">
      My Hello World!!! Got the Man with Plan Right Here
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
    </div>
    )
  }
}

export default App;
