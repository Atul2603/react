// src/Header.js
import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My App Header</h1>
      <nav>
        <ul style={navStyle}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0'
};

const navStyle = {
  listStyle: 'none',
  padding: 0
};

export default Header;
