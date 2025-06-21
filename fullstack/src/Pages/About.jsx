//import React from 'react'
import State from '../hooks/state'
import {Link} from "react-router-dom"
import { UserContext } from '../hooks/UserContext'
import { useContext } from 'react'
//import React,{useContext} from 'react'

const About = () => {
  const name=useContext(UserContext)
  return (
    <div>
      <h1>HEY! {name}</h1>
       <Link to='/State'>UseState Example</Link>
       <br/>
       <Link to='/Form'>Controlled Form</Link>
       <br/>
       <Link to='/Effect'>Use effect</Link>
       <br />
       <Link to='/Reducer'>Reducer</Link>
        
    </div>
  )
}

export default About