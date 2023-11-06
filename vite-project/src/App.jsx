import { useState } from 'react'
import './App.css'
import Signup from './Pages/Signup';
import Login from "./Pages/Login";
import Home from "./Pages/Home"
import {Route, Routes} from "react-router-dom"

function App() {
  

  return (
    <>
    
       {/* <Login/>
    <Signup/> */}
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    
    </>
  )
}

export default App
