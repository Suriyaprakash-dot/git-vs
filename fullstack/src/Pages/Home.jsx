import React from 'react'
import Welcome from '../Welcome'
import Skills from '../skills'
const Home = () => {
  return (
    <div>
        <h1>Home</h1>
          <Welcome name="Python"/>
     <Skills skills={['React','Node','Express','MongoDb']}/>
     <h1>MEN ARE BRAVE</h1>
    </div>
  )
}

export default Home