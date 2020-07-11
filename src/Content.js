import React, { Component } from 'react'
import './Content.css'
import Aux from './Aux'

// home page content 
class Content extends Component {

  render() {
    return(
      <Aux>
        <div className='text'>
          <div class="fade-in">
            <h1>Hello, </h1>
            <h1>America!</h1>
          </div>
          <p>We're organizing Panel to the People: America in Crisis, </p>
            <p> a series of zoom webinars to help shine light on trending issues in our society.</p>
        </div>
        </Aux>
    )
  }
}

export default Content;