import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from '../components/Contact'


const ContactPage = () => {
    return (
        <Routes>
            <Route path='/' element={<Contact />} />
        </Routes>
    )
}

export default ContactPage