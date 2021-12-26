import './App.css';
import React from 'react'
import {Hls, plyr} from 'v8'

function App() {
  
  return (
    <div className="App" >

    <video preload="none" id="player" autoplay controls crossorigin></video>
  

    </div>
  );
}

export default App;
