import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UseCallback } from './pages'
import Home from './pages/Home';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>} exact />
      <Route path='/UseCallback' element={<UseCallback/>}/>
    </Routes>
    </div>
  )
}

export default App