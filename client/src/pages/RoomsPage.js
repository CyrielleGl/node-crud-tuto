import React from 'react'
import { Routes, Route } from 'react-router-dom'

const RoomsPage = () => {
    return (
        <Routes>
            <Route path='/' element={<h2>Rooms</h2>} />
            <Route path=':id' element={<h2>Room</h2>} />
        </Routes>
    )
}

export default RoomsPage