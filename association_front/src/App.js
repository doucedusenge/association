import React from 'react'
import Cotisation from './Components/Cotisation/Cotisation'
import Home from './Components/Home/Home'
import Membre from './Components/Membre/Membre'
import Nav from './Components/Nav/Nav'
import './index.js'

const App = () => {
  return (
    <div>
    <div className='container'></div>
      <div className='barre'></div>
      <Nav/> 
      <Home/>
      <Membre/>
      <Cotisation/>
    </div>
  )
}

export default App