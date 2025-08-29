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
