import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import Photography from './pages/Photography';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Router>
  );
}

export default App;
