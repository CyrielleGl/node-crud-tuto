import express from 'express'
import { getTest, postTest, addRoom } from '../controllers/roomControllers.js'
import { catchErrors } from '../helpers.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello les Hardcoders')
})

router.get('/test', getTest)

router.post('/test', postTest)

router.post('/room', catchErrors(addRoom))

export default router