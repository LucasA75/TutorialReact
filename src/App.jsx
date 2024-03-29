import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UseCallback, UseState } from './pages'
import Home from './pages/Home';
import PruebaComponentes from './pages/PruebaComponentes';


const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>} exact />
      <Route path='/UseCallback' element={<UseCallback/>}/>
      <Route path='/UseState' element={<UseState/>}/>
      <Route path='/Prueba' element={<PruebaComponentes/>}/>
    </Routes>
    </div>
  )
}

export default App