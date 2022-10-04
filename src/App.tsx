import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='ice-cream-wars-container'>
        <AdDesigner></AdDesigner>
        <Votes></Votes>
      </div>
    </div>
  );
}

export default App;
