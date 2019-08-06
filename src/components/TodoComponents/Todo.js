import React from 'react';


const Todo = props =>{
    // console.log('props in Todo', props)

    return (
        <div 
        className={`task ${props.data.completed ? 'completed' : ''}`}
        onClick= {()=> props.toggleTask(props.data.id)}>
            <p>{props.data.task}</p>
        </div>
    )
}

export default Todo;