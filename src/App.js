import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery'; 

import Nav from './Componentes/Nav';
import Home from './Componentes/Home/Home';
import About from './Componentes/About/About';
import Arts from './Componentes/Arts/Arts';
import Contact from './Componentes/Contact/Contact';
import Rodape from './Componentes/Rodape';
import ScrollButtons from './Componentes/ScrollButtons';

window.$ = $;

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <ScrollButtons/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/arts" element={<Arts/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Rodape/>
      </div>
    </Router>
  )
};

export default App;
