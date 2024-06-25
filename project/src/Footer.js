// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2024 My App, Inc. All Rights Reserved.</p>
    </footer>
  );
}

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%'
};

export default Footer;
