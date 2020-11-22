import React from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from "./Clock";
import  Model  from './component/videoModal'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock/>
        <p>
        Kelompok 36 <code>Fajrul</code> Gagah
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Model/>
      </header>
    </div>
  );
}

export default App;
