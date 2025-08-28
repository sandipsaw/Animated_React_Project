import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='text-2xl'>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/agence' >Agence</NavLink>
        <NavLink to='/projects' >Projects</NavLink>

    </div>
  )
}

export default Nav
{/* <video src="https://player.vimeo.com/progressive_redirect/playback/899938964/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=6a2cb0320d09d02dcfdfa2ad504c89a510e6d93d55e9060b1b55d680fa2e2be9" muted="" playsinline="" loop="" data-monitor="source" data-home="video" poster="uploads/vlcsnap-2021-04-21-16h11m49s996.jpg"></video> */}