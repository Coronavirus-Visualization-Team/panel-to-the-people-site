import React from 'react'
import './Webinars.css'
import Webinar from './Webinar'
import America_in_Crisis from '../Webinar_Content /America_in_Crisis'
import A_Breath_of_Fresh_Air from '../Webinar_Content /A_Breath_of_Fresh_Air'
import Students_Pandemic from '../Webinar_Content /Students_in_Pandemic'
import Video from './Video'
import Thumbnail_1 from '../Assets/hqdefault.jpg'

const Webinars = () => {
    return (
       <div className= 'Grid'>
         <Webinar link='https://tiny.css/P2TP' description = {America_in_Crisis} title='America in Crisis' date='July 2nd, 2020'></Webinar>
         <Video thumbnail={Thumbnail_1} link='https://www.youtube.com/watch?v=yVX6cYD6hXw'></Video>
         <Webinar link='https://tiny.css/P2TP' description = {A_Breath_of_Fresh_Air} title='A Breath of Fresh Air' date= 'July 9th, 2020'></Webinar>
         <Webinar link='https://harvard.zoom.us/webinar/register/WN_3u4_oD5qSp2IvlsRplbiow' description = {Students_Pandemic} title='Students in the Pandemic' date='July 16th, 2020'></Webinar>
        </div>
    )
}

export default Webinars;