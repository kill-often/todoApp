import React from 'react'
import Home from './home/Home';
import {Routes, Route} from "react-router-dom"
import Signup from './components/Signup';
// import Login from './components/Login'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
   {/* <Home /> */}
   {/* <Login /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signup' element={<Signup />}/>
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
    </>
  )
}

export default App
