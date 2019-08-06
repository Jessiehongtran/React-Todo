import React from 'react';


class Search extends React.Component {
    constructor(props){
        super();
        this.state = {
            task: ''
        };
        // console.log('state', this.state)
        console.log('props in Search', props)
        
    }
    
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // if(e.target.value !== ""){
        //     console.log('input', e.target.value)
        //     console.log('this', this.props)
        //     const match = this.props.data.find(data => {return data.task === e.target.value })
        //     console.log('match', match)
        //     return match}
        // else {
        //     return this.props
        // }
        
    }

  render(){
    console.log('state', this.state)
    return (
        <div>
            <input 
            type="text" 
            name="task"
            value={this.state.task}
            className="input" 
            onChange= {this.handleChange} 
            placeholder="Search..." />
        </div>
    )
}
}

export default Search;