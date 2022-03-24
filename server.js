import express from "express"
import routes from "./routes/routes.js"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port ${PORT}`)
})