import RoomModel from '../models/roomModel.js'

export const getTest = (req, res) => {
    res.send({
        name: 'Hardcoders'
    })
}

export const postTest = (req, res) => {
    res.send(req.body)
}

export const addRoom = async (req, res) => {
    const room = new RoomModel(req.body)
    await room.save()
    res.send(room)
}