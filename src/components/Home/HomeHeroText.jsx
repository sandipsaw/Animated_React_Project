import React from 'react'
import video from '../../video/83c745cf.mp4'

const HomeHeroText = () => {
  return (
    <div className='font-[laus-300] text-white text-center pt-4'>
      <div className='text-[9.5vw] uppercase leading-[8vw]'>L'étincelle</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>qui<div className='h-[7vw] -mt-3 w-[16vw] rounded-full overflow-hidden'><video className=' rounded-4xl' autoPlay muted loop src={video}/></div>génère</div>
      <div className='text-[9.5vw] uppercase leading-[8vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText