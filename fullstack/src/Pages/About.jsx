//import React from 'react'
import State from '../hooks/state'
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div>
       <Link to='/State'>UseState Example</Link>
       <br/>
       <Link to='/Form'>Controlled Form</Link>
       <br/>
       <Link to='/Effect'>Use effect</Link>
        
    </div>
  )
}

export default About