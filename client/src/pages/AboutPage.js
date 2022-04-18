import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../components/About'


const AboutPage = () => {
    return (
        <Routes>
            <Route path='/' element={<About />} />
        </Routes>
    )
}

export default AboutPage