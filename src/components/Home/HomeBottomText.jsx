import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='text-[7vw] uppercase text-white font-[laus-500] flex justify-center items-center gap-5'>
      <Link className='border-3 rounded-full px-7 leading-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/projects' >Projets</Link>
      <Link className='border-3 rounded-full px-7 leading-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/agence' >Agence</Link>
    </div>
  )
}

export default HomeBottomText