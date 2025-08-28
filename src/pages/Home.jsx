import React from 'react'
import Video from '../components/Home/Video'
import HomeBottomText from '../components/Home/HomeBottomText'
import HomeHeroText from '../components/Home/HomeHeroText'
const Home = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='w-screen h-screen fixed '><Video /></div>
      <div className='w-screen h-screen relative flex-col flex justify-between'>
        <HomeHeroText />
        <HomeBottomText/>
      </div>
    </div>

  )
}

export default Home