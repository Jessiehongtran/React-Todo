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
    completed: false
  },
  {
    task: 'Cleaning room',
    id: 123456,
    completed: true
  },
  {
    task: 'Dog care',
    id: 1234567,
    completed: false
  },
  {
    task: 'Reading book',
    id: 12345678,
    completed: false
  },
  {
    task: 'Coding',
    id: 123456789,
    completed: false
  },
  {
    task: 'Go to bank',
    id: 1234567890,
    completed: false
  },
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {
      name: 'Hong',
      Todo : TodoData, 
      searchValue : '',
      filteredList: [],
      searching:false
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
       
    ),
      filteredList: this.state.filteredList.map(task => {
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
      Todo: this.state.Todo.filter(task => !task.completed),
      filteredList: this.state.filteredList.filter(task => !task.completed)
    })
    
  }



  addTask =(taskName)=>{
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      Todo: [...this.state.Todo, newTask]
    })

  }

  handleSearchChange = (e) => { 
    // this.setState({
    //     [e.target.name]: e.target.value
    // })
    console.log('length', this.state.searchValue.length)
    if(this.state.searchValue.length > 0) {
      let filtered = this.state.Todo.filter(todo => todo.task.toLowerCase().includes(e.target.value.toLowerCase()))
      this.setState({
        searchValue: e.target.value,
        filteredList: filtered
      })
    } else {
      const filtered = []
      this.setState({
        searchValue: e.target.value,
        filteredList: filtered
      })
    }
    // console.log('filered todos', filtered)
    
  }


  render() {
    console.log('state complete', this.state)
    return (
      <div>
        <h1>Welcome to {this.state.name}'s Todo App!</h1>
        <div class="search">
            <input 
            type="text" 
            name="task"
            value={this.state.searchValue}
            className="input" 
            onChange= {this.handleSearchChange} 
            placeholder="Search..." />
        </div>
        <TodoList 
        data = {this.state.filteredList.length >= 1 ? this.state.filteredList : this.state.Todo} 
        toggleTask = {this.toggleTask}
        clearCompleted = {this.clearCompleted}    
        
        />
        <TodoForm data={this.addTask}/>
        
        
      </div>
    );
  }
}

export default App;
