import React from 'react';
import Home from '../../components/home/Home';
import { Route, Routes } from 'react-router-dom'
import Catalogo from '../../components/Catalogo/Catalogo';
import NavBar from '../../components/NavBar/NavBar';
import Cart from '../../components/Cart/Cart';

function App() {
  return (
      <>
        
        <NavBar />
        <Routes>
          <Route exact path='*' element={<Home/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        
      </>
  );
}

export default App; 
