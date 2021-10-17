import React from 'react'
import { render, unstable_renderSubtreeIntoContainer } from 'react-dom'
import GifListContainer from '../containers/GifListContainer'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer/>
    </div>
  )
}

// return GifListContainer

// function render () {
//   return (
//     <div>
//     </div>
//   )
// }

export default App
