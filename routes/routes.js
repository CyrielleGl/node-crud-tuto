import express from 'express'
import { addRoom, getRooms, getRoom, updateRoom, deleteRoom } from '../controllers/roomControllers.js'
import { catchErrors } from '../helpers.js'

import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const router = express.Router()

router.get('/api/rooms', catchErrors(getRooms))

router.get('/api/rooms/:id', catchErrors(getRoom))

router.post('/api/rooms', catchErrors(addRoom))

router.patch('/api/rooms/:id', catchErrors(updateRoom))

router.delete('/api/rooms/:id', catchErrors(deleteRoom))

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

export default router