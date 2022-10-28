import React from 'react';
import Banner from './components/Banner'
import Album from './components/Album'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <div>
          <h1>Welcome to My Photojournal</h1>
          <h3>Hummara Bashir</h3>
        </div>
        <Album />
      </header>
    </div>
  );
}

export default App;
