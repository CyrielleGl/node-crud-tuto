import RoomModel from '../models/roomModel.js'

// GET ALL
export const getRooms = async (req, res) => {
    const rooms = await RoomModel.find({})
    res.send(rooms)
}

// GET ONE
export const getRoom = async (req, res) => {
    const rooms = await RoomModel.find({_id : req.params.id})
    res.send(rooms[0])
}

// ADD ONE
export const addRoom = async (req, res) => {
    const room = new RoomModel(req.body)
    await room.save()
    res.send(room)
}

// UPDATE
export const updateRoom = async (req, res) => {
    const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body)
    await room.save()
    res.send(room)
}

// DELETE
export const deleteRoom = async (req, res) => {
    const room = await RoomModel.findByIdAndDelete(req.params.id)
    if (!room) {
        res.status(404).send('Aucune chambre trouvée.')
    }
    res.status(200).send()
}

