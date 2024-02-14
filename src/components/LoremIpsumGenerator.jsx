// src/LoremIpsumGenerator.js
import React, { useState } from 'react';

const LoremIpsumGenerator = () => {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [paragraphs, setParagraphs] = useState('');

  const generateLoremIpsum = () => {
    fetch(`https://baconipsum.com/api/?type=all-meat&paras=${numParagraphs}`)
      .then(response => response.json())
      .then(data => setParagraphs(data.join('\n\n')))
      .catch(error => console.error('Error fetching lorem ipsum:', error));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paragraphs);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      generateLoremIpsum();
    }
  };

  const clearContent = () => {
    setNumParagraphs(1);
    setParagraphs('');
  };

  return (
    <div>
      <label htmlFor="numParagraphs">Number of Paragraphs:</label>
      <input
        type="number"
        id="numParagraphs"
        value={numParagraphs}
        onChange={e => setNumParagraphs(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={generateLoremIpsum} onKeyPress={handleKeyPress}>
        Generate
      </button>
      <button onClick={copyToClipboard} onKeyPress={handleKeyPress}>
        Copy to Clipboard
      </button>
      <button onClick={clearContent}>
        Clear
      </button>
      <div className="paragraphs">{paragraphs}</div>
    </div>
  );
};

export default LoremIpsumGenerator;
