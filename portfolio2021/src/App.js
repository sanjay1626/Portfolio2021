import React from 'react';
import './App.css';


import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
function App() {
  return (
   
          <div className="App">
            
              
                <Home />
                <About />
                <Resume />
                <Portfolio />
          </div>
   
  );
}

export default App;
