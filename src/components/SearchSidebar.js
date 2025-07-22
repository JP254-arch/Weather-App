import React, { useState } from 'react';
import './SearchSidebar.css';

function SearchSidebar({ isOpen, onSearch, closeSidebar }) {
  const [input, setInput] = useState('');

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeSidebar}>×</button>
      <h3>Search City</h3>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="City name"
      />
      <button onClick={() => { onSearch(input); closeSidebar(); }}>Search</button>
    </div>
  );
}

export default SearchSidebar;
