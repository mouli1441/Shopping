import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import { Routes , Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
