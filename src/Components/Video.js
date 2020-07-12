import React from 'react'
import ReactPlayer from 'react-player'

const Video = (props) => {
  return(
// Render a YouTube video player
<ReactPlayer url={props.link}  controls = {true} width = '240px' height = '240px' style={{float: 'right'}}/>
  )
  

}

export default Video;