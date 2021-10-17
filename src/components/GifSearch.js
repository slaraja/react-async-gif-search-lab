//receives a submitHandler function from gifListContainer
//renders a form that receives user input for Gifphy search
//text input should be controlled component
//that stores the value of input in its component state
//and renders the DOM accordingly

//should receive a callback prop from its parent
//on a submit event, it should invoke the callback with the value of the text input
//callback function will query the API with th etext the user has entered

import React from 'react'
import GifListContainer from '../containers/GifListContainer'


class gifSearch extends React.Component {

    state = {
        input: ""
    }

    //use an arrow function to be able to access and bind "this"
    //then we can call function
    handleFormChange = (e) => {
        const input = e.target.input
        const value = e.target.value

        this.setState({
            [input]: value
        }, () => console.log(this.state))
        // keep track of what the user typed in 
    }

    render() {
        return (
        <div>
        <form onSubmit={this.props.handleSubmit}>
            <label>Enter a Search Term:</label>
            <input type="text" input="input" onChange={this.handleFormChange} value={this.state.input}/>
            <input type="submit" value="Find Gifs"/>
        </form>
        </div>
        )
    }
}



export default gifSearch
