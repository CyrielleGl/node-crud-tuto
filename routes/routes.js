import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello les Hardcoders')
})

export default router