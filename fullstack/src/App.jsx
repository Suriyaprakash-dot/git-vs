import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome'
import Skills from './skills'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
//import './App.css'

import Form from './hooks/Form'
import Effect from './hooks/Effect'
import Reducer from './hooks/Reducer'
import State from './hooks/State'

function App() {
 

return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/State' element={<State/>}/>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/Effect' element={<Effect/>}/>
      <Route path='/Reducer' element={<Reducer/>}/>
    </Routes>
    
        
    </>
  )
}

export default App
