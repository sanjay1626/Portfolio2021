import React from 'react';
import './App.css';


import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
   
          <div className ="App">
            
              
                <Home />
                <About />
                <Resume />
                <Portfolio />
                <Contact />
                <Footer />
          </div>
   
  );
}

export default App;
