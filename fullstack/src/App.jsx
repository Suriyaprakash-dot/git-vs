import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Welcome from './Welcome';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

// HOOK components
import Form from './hooks/Form';
import Effect from './hooks/Effect';
import Reducer from './hooks/Reducer';
import State from './hooks/state';
import Skills from './skills';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/state' element={<State />} />
        <Route path='/form' element={<Form />} />
        <Route path='/effect' element={<Effect />} />
        <Route path='/reducer' element={<Reducer />} />
      </Routes>
    </>
  );
}

export default App;
