import React from 'react'
import video from '../../video/83c745cf.mp4'
const Video = () => {
  return (
    <div className='w-screen h-screen'>
         <video className='w-screen h-screen object-cover' autoPlay loop muted src={video} alt='hero'/>
    </div>
  )
}

export default Video

