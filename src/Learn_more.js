import React, { Component } from 'react';
import arrow from './Assets/image-3.png'
import './Learn_more.css'

const Learn = () => {
    return(
        <div className='learn'>
        <p>Learn more</p>
        <img src={arrow} alt='' className = 'arrow' />
        </div>

    )
}
export default Learn;