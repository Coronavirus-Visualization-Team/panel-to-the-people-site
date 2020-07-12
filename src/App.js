import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Webinars from './Components/Webinars';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className = 'Welcome'>
     <Welcome id='Welcome'></Welcome>
     </div>
     <div className='Webinars'>
         <Webinars id='Webinars'></Webinars>
     </div> 
     <Footer id='Footer'></Footer>
    </div>
  );
}

export default App;
