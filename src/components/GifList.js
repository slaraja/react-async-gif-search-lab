import React from "react";

//a presentational component
//receives data from its props and renders html given the input data

class gifList extends React.Component {
     
    render() {
        return (
            <ul>
                {this.props.gifs.map((gif,idx )=> <li key={idx}><img src={gif} alt="search"/></li>)}
{/* 
        <li>gif.props[0]</li>
        <li>gif.props[1]</li>
        <li>gif.props[2]</li> */}
    </ul>
        )    
    }
}

export default gifList
