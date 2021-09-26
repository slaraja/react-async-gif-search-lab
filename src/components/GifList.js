//receives data of first three gifs from gifListContainer

import React from "react";
import GifListContainer from './containers/GifListContainer.js'

//a presentational component
//receives data from its props and renders html given the input data

class gifList extends React.Component {
    
    renders() {
    <ul>
        <li>gif.props[0]</li>
        <li>gif.props[1]</li>
        <li>gif.props[2]</li>
    </ul>
    }


}