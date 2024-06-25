// src/App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={mainStyle}>
        <h2>Welcome to My App</h2>
        <p>This is the main content area.</p>
        <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum "pain itself" </p>
      </main>
      <Footer />
    </div>
  );
}





























const mainStyle = {
  padding: '20px',
  minHeight: '80vh'
};

export default App;
