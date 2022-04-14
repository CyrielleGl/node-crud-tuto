import React, { useState, useEffect } from 'react'

const Rooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await window.fetch('/api/rooms')
            const json = await data.json()
            setRooms(json)
        }

        fetchData()
    }, [])
    return (
        <>
            {rooms.map(room => (
                <h2 key={room._id}>{room.name}</h2>
            ))}
        </>
    )
}

export default Rooms