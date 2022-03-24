export const getTest = (req, res) => {
    res.send({
        name: 'Hardcoders'
    })
}

export const postTest = (req, res) => {
    res.send(req.body)
}