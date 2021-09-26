import React from 'react'
import GifSearch from './components/GifSearch.js'

class GiftListContainer extends React.Component {
    
    constructor() {
        this.state = { 
        gifs: [] 
        };
    }

    render() {

        return (
            <div id="gif-list-container">
                <div>
                    < gifSearch />
                </div>
            </div>
        )
    }

    //on a submit event, it should invoke the callback with the value of the text input
//callback function will query the API with the text the user has entered
    submitHandler() {

    }

    //responsible for fetching the data from Gifphy API
    componentDidMount() {

        fetch ("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dJBhFwbnmoC8q1BPL1NXkhVc6JdFvmm6")
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({
                const firstThree = gif.slice(0, 3),
                //grab first 3 gifs from resp
                gif: firstThree
            })
        })
    }
}

export default GiftListContainer
