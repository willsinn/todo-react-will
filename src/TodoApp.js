import React, { Component } from 'react';
import TodoInputs from './Components/TodoInputs';

class TodoApp extends Component {


  render() {
    return (
      <div className="App">
        <TodoInputs />
      </div>
    );
  }
}

export default TodoApp;
