import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import './components/TodoComponents/Todo.css';
import TodoForm from "./components/TodoComponents/TodoForm"

const TodoData = [
  {
    task: 'Grocery shopping',
    id: 123,
    completed: false
  },
  {
    task: 'Finish Lambda Sprint',
    id: 1234,
    completed: false
  },
  {
    task: 'Gardening',
    id: 12345,
    completed: true
  }
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {
      name: 'Hong',
      Todo : TodoData
    }
    console.log(this.state)
  }
  
  toggleTask = id => {
    console.log('id',id);

    this.setState({
      Todo: this.state.Todo.map(task => {
        if (task.id === id) {
          return {
            ...task,

            completed: !task.completed
          }
        }
        else {
          return task;
        }
      }
       
    )
  })
  }
  
  clearCompleted = (test)=> {
    console.log(test)

    this.setState({
      Todo: this.state.Todo.filter(task => !task.completed)
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to {this.state.name}'s Todo App!</h2>
        <TodoList 
        data = {this.state.Todo} 
        toggleTask = {this.toggleTask}
        clearCompleted = {this.clearCompleted}
        />
        <TodoForm />
      </div>
    );
  }
}

export default App;
