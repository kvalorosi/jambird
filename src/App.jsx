import { useState } from 'react'

import './App.css'
import Navb from './components/Navb'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Order from './views/Order'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './views/About'
import Events from './views/Events'
import Cart from './views/Cart'


function App() {
  

  return (
    <>
    <Navb />
    <Routes>
    <Route children path='/' element={<Home />} />
    <Route children path='/order' element={<Order />} />
    <Route children path='/about' element={<About />} />
    <Route children path='/events' element={<Events />} />
    <Route children path='/cart' element={<Cart />} />

    </Routes>

     
    </>
  )
}

export default App;
