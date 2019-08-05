import React from 'react';


class TodoForm extends React.Component {
    constructor(props){
        super();
        this.state = {
            task: ''
        };
        console.log(this.state)
        console.log('props', props)
        
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.data(this.state.task)
    }



    render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <input 
                type="text"
                value={this.state.task}
                name="task"
                onChange={this.handleChange}
            />
            <button className="add-btn">Add task</button>
        </form>
    )
    }
}

export default TodoForm;