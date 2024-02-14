import React from 'react';
import './index.css';
import bacon from "./assets/bacon.png"
import LoremIpsumGenerator from './components/LoremIpsumGenerator';

function App() {
  return (
    <div className="container">
     <img src={bacon} alt="picture of bacon" className='bacon' /> 
      <h1>Bacon Ipsum Generator</h1>
      <LoremIpsumGenerator />
    </div>
  );
}

export default App;