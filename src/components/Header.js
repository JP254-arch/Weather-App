import React from 'react';
import './Header.css';

function Header({ toggleSidebar }) {
  return (
    <div className="header">
      <div className="menu-icon" onClick={toggleSidebar}>
        &#x25A3;
      </div>
    </div>
  );
}

export default Header;
