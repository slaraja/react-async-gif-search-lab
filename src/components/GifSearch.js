//receives a submitHandler function from gifListContainer
//renders a form that receives user input for Gifphy search
//text input should be controlled component
//that stores the value of input in its component state
//and renders the DOM accordingly

//should receive a callback prop from its parent
//on a submit event, it should invoke the callback with the value of the text input
//callback function will query the API with th etext the user has entered

import React from 'react'


class gifSearch extends React.Component {

    state = {
        input: ""
    }

    handleOnChange = (e) => {
        this.setState({
          input: e.target.value
        })
      }
    
      handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.input)
        this.setState({input: ""})
      }
    
      render() {
        return (
          <form onSubmit={this.handleOnSubmit}>
            <label htmlFor="search">Enter a Search Term</label>
            <input type="text" name="search" id="search" onChange={this.handleOnChange} value={this.state.gifSearh}/>
            <input type="submit" value="Find Gifs" />
          </form>
        )
      }
    }



export default gifSearch
