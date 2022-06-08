
import React from 'react';
import Login from './view/login';
import Home from './view/home';
import Perfil from './view/perfil'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/perfil" element={<Perfil/>}/>

      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
