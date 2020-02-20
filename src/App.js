import React from 'react';
import Toolbar from './component/Toolbar';
import Home from './component/Home';
import Experience from './component/Experience';
import Inscription from './component/Inscription';
import Contact from './component/Contact';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />
        <Home />
        <Experience />
        <Inscription />
        <Contact />
      </header>
    </div>
  );
}

export default App;
