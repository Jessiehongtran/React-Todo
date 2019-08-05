import React from 'react';


const Todo = props =>{
    console.log('props in Todo', props)

    return (
        <div onClick= {()=> props.toggleTask(props.data.id)}>
            <p>{props.data.task}</p>
        </div>
    )
}

export default Todo;