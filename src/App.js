
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContairner';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';








function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <NavBar />

        <Routes>
          <Route exact path='/' element={<ItemListContainer saludo="Greetings, soy una prop" />} />
          <Route exact path='/categoria/:CategoryID' element={<ItemListContainer saludo="Greetings, soy una prop" />} />
          <Route exact path='/detail/:ID' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
