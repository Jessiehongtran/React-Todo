import React from 'react';

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
  
  
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>I am ready</div>
      </div>
    );
  }
}

export default App;
