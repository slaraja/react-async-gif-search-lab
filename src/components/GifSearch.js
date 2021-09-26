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

    render() {
        return (
        <form>
            <label>Enter a Search Term:</label>
            <input type="text" search="search" />
            <input type="submit" value="Find Gifs"/>
        </form>
        )
    }
}

export default gifSearch
