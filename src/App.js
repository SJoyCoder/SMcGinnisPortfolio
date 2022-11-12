import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              <Route 
                path="/"
                element={<About />}
              />
              <Route 
                path="/projects"
                element={<Projects />}
              />
              <Route 
                path="/resume"
                element={<Resume />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
