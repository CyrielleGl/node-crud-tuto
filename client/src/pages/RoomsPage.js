import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Rooms from '../components/Rooms'

const RoomsPage = () => {
    return (
        <Routes>
            <Route path='/' element={<Rooms />} />
            <Route path=':id' element={<h2>Room</h2>} />
        </Routes>
    )
}

export default RoomsPage