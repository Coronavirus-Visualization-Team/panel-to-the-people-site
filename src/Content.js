import React, { Component } from 'react'
import './Content.css'
import Aux from './Aux'
import  {ReactTypeformEmbed}  from 'react-typeform-embed'
import Popup from './Popup'

// home page content 
class Content extends Component {
  constructor(props) {
    super(props)
    this.openFormHandeler = this.openFormHandeler.bind(this)
  }

  // Handler to open the form
  openFormHandeler() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return(
      <Aux>
        <div className='text'>
          <div class="fade-in">
            <h1>Panel to the People</h1>
          </div>
          <p>We're organizing Panel to the People: America in Crisis, a zoom webinar tentatively scheduled for July 9th at 8PM EST.
             </p>
          <Popup></Popup>
        </div>
        </Aux>
    )
  }
}

export default Content;