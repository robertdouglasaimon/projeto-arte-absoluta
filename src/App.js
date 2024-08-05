import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery'; 

import Nav from './Nav';
import Home from './Home/Home';
import About from './About/About';
import Arts from './Arts/Arts';
import Contact from './Contact/Contact';

window.$ = $;

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/arts" element={<Arts/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  )
};

export default App;
