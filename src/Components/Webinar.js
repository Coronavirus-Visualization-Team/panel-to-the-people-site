import React from 'react'
import './Webinar.css'
const Webinar = (props) => {
    return(
        <div className ='Card'> 
        <p> 
        {props.date}
        </p>
        <h2>
            {props.title}
        </h2>
        <p>
            {props.description}
        </p>
        <p>
            <a href={props.link}>Sign up for this webinar!</a>
        </p>
        </div>
    )
  
}
export default Webinar;