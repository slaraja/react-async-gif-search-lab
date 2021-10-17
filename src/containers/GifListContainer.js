import React from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
    
    constructor() {
        super()
        this.state = { 
            gifs: [] 
            // search: "",
        };
    }

    render() {
        return (
            <div id="container">
                <div>
                    < GifSearch />
                </div>
            </div>
        )
    }


//on a submit event, it should invoke the callback with the value of the text input
//callback function will query the API with the text the user has entered

    //responsible for fetching the data from Gifphy API
 handleSubmit () {
        e.preventDefault
        
        fetch ("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dJBhFwbnmoC8q1BPL1NXkhVc6JdFvmm6")
        .then((resp) => resp.json())
        .then((data) => {
            let gifImages = data.data.map(gif => gif.images.original.url)
            this.setState({
              gifs: gifImages
            })
        })
      }

    //   render() {
    //     return (
    //       <div>
    //         <GifSearch handleSearch={this.handleSearch}/>
    //         <GifList gifs={this.state.gifs}/>
    //       </div>
    //     )
    //   }
    }

export default GifListContainer
