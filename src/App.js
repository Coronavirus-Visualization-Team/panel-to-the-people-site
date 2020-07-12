import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Webinar from './Components/Webinars';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className = 'Welcome'>
     <Welcome id='Welcome'></Welcome>
     </div>
     <div className='Webinars'>
         <Webinar id='Webinar'></Webinar>
     </div> 
    </div>
  );
}

export default App;
