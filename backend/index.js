const express = require('express')
const cors = require("cors")
const connectToMongo = require('./db.js')
const app = express()

app.use(express.json())
app.use(cors())
connectToMongo()

const port = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.status(200).json("hello world")
})

app.use("/api/auth", require('./Routes/Auth.js'))

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})