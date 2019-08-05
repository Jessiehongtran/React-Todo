import React from 'react';


const Todo = props =>{
    console.log('props in Todo', props)

    return (
        <div>
            <p>{props.data.task}</p>
        </div>
    )
}

export default Todo;