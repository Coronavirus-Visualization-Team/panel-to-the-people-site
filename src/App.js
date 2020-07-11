import React from 'react';
import './App.css';
import Content from './Content';
import background from './Assets/background.png'
import logo from './Assets/image-2.png'
import Learn from './Learn_more'

function App() {
  return (
    <div className="App">
      <img src={logo} alt='' className='pttp' /> 
      <img src={background} alt='' className='img'/>
      <Content /> 
      <Learn></Learn>
    </div>
  );
}

export default App;
