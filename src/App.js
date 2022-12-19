import React from 'react';
import Home from './components/Home'
import Product from './components/Product'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/product' element={<Product/>} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;