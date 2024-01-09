import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './pages/Map'
import NotFound from './pages/NotFound'
import Menu from './pages/Menu';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={Map} />
          <Route path='/Menu' Component={Menu} />
          <Route path='/Settings' Component={Settings} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
