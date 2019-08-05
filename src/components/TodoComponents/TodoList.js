// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from "./Todo"

const TodoList = props => {
    console.log('props in TodoList', props)

    return (
        <div>
            {props.data.map(task => (
                <Todo key={task.id} data={task} toggleTask={props.toggleTask}/>
            ))}
            <button>Clear Completed</button>
        </div>
        

    )
}


export default TodoList;