import React from 'react'
import background from '../Assets/background.png'

// home page content 


const Welcome = () => {
  return(
     <div>
     <img src={background} alt='' className='img'/>
      <div className='text'>
        <div class="fade-in">
          <h1>Hello, </h1>
          <h1>America!</h1>
        </div>
        <p>We're organizing Panel to the People: America in Crisis, </p>
          <p> a series of zoom webinars to help shine light on trending issues in our society.</p>
      </div>
      </div>
  )
}

export default Welcome;