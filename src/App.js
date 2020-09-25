import React from 'react';
import './App.css';
import ddd  from './oik.png'
import ReactPlayer from 'react-player'

function App() {
  return (
  <>
  <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
    <h1 className="title red">Your Name here</h1>
    <br />
    <img src={ddd} style={{widht:"200px",height:"200px"}} />
    <br />
    <img src="./thenameoftheimage" style={{widht:"200px",height:"200px"}} />
  </div>
  <ReactPlayer className="qwert" width="320" height="240"    controls url='https://youtu.be/7sDY4m8KNLc' />

  </>
  );
}

export default App;
