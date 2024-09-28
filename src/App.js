// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from './Components/Weather';
import Forecast from './Components/Forecast';
import './App.css';

function App() {
  return (
        <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/forecast" element={<Forecast />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
