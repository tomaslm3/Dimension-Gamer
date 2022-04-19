import Home from '../../components/home/Home';
import { Route, Routes } from 'react-router-dom'
import Catalogo from '../../components/Catalogo/Catalogo';
import NavBar from '../../components/NavBar/NavBar';
import {DataContext} from '../../components/dataContext/DataContext';
import React, { useEffect, useState } from 'react';
import axios from 'axios';




function App() {
  const [ state , setState] = useState( [] );
  
  useEffect(() => {
    
    const getData = async () => {
      let { data } = await axios.get('http://localhost:8000/games');
      return data;
    }
    
    getData().then( games => setState( games ) );
    
  }, [])

  return (
    <DataContext.Provider value={state}>
      <>
        
        <NavBar />
        <Routes>
          <Route exact path='*' element={<Home/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
        </Routes>
    
      </>
    </DataContext.Provider>
  );
}

export default App; 
