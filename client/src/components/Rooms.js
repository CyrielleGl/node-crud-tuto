import React, { useState, useEffect } from 'react'
import RoomCard from './RoomCard'
import NewRoomForm from './NewRoomForm'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

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
                <Link key={room._id} to={room._id}>
                    <RoomCard room={room} />
                </Link>
            ))}
            <div style={{ width: 300, margin: '1rem' }}>
                <Card>
                    <h2 style={{textAlign: 'center', marginBottom: '1.2rem'}}>Ajouter une chambre</h2>
                    <NewRoomForm />
                </Card>
            </div>

        </>
    )
}

export default Rooms