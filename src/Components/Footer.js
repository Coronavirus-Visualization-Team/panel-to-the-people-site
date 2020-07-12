import React from 'react'
import Logo from '../Assets/image-4.png'
import Facebook from '../Assets/image-5.png'
import Twitter from '../Assets/image-6.png'
import Instagram from '../Assets/image-7.png'
import '../Components/Footer.css'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Logo'>
            <img  className ='Logo'src={Logo}></img>
            <p>© COPYRIGHT 2020 Panel to the people, all rights reserved.</p>
            </div>
            <div className = 'Socials'>
            <img src={Facebook}></img>
            <img src={Twitter}></img>
            <a href='http://instagram.com/paneltothepeople/'><img src={Instagram} /></a>
            </div>
        </div>
       
    )
}
export default Footer;