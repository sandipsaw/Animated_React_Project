import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Agence from '../pages/Agence'
import Projects from '../pages/Projects'

const Mainroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/agence' element={<Agence />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </div>
    )
}

export default Mainroutes