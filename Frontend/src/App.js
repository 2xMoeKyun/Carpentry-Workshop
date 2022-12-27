import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart';
// import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';

function App() {
  var [data, setData] = useState(null) 
  useEffect(() => {
    fetch('/api')
    .then(response => response.json())
    .then(response => setData(response.message))
  },[])

  return (
     <BrowserRouter>
      <div className="App">
        {/* проверка запроса в бэкенд*/}
          {/* <h1>{!data ? "Loading.." : data}</h1> */}
          <Header />
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/product' element={<Product/>} exact />
          <Route path='/cart' element={<Cart/>} exact />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;