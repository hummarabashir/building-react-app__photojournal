import React from 'react';
import Banner from './components/Banner'
// import PhotoEntry from './components/PhotoEntry'
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
          {/* <PhotoEntry src="photo1.png" location="Location" caption="Caption" /> */}
          <Album />
        </div>
      </header>
    </div>
  );
}

export default App;
