import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/About/About';
import WhatWeDo from './Pages/WhatWeDo/WhatWeDo';
import VisionMision from './Pages/VisionMision/VisionMision';
import Contact from './Pages/Contact/Contact';
import Volunteer from './Pages/Volunteer/Volunteer';
import Teams from './Pages/Teams/Teams';
// import Navbar from './Components/Navbar/Navbar';
// import Contact from './Pages/Contact/Contact';

function App() {
  

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="whatwedo" element={<WhatWeDo />} />
          <Route path="visionmision" element={<VisionMision />} />
          <Route path="contact" element={<Contact />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="teams " element={<Teams />} />
        </Routes>
      </BrowserRouter>

     
    </main>
  );
}

export default App;
