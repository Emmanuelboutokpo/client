import React from 'react';
import './App.css';
import List from './component/lists/List';
import {Routes, Route } from 'react-router-dom';
import Single from './component/single/Single';

const App = () => (
  <div>
     <Routes>
       <Route exact path='/' element={<List />} /> 
       <Route exact path='/post/:id' element={<Single/>} />
      </Routes>  
  </div>
);

export default App;
