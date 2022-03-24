import express from 'express'
import { getTest, postTest } from '../controllers/roomControllers.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello les Hardcoders')
})

router.get('/test', getTest)

router.post('/test', postTest)

export default router