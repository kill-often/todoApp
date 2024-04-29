import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';

function Navbar() {
  return (
    <>
      <div>

        <div className="navbar bg-base-100">
 
 
  <div className="navbar-end">
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</a><Login />
  </div>
</div>
      </div>
    </>
  )
}

export default Navbar
