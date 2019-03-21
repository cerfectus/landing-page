const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

//traer las rutas
const items = require("./routes/api/item")

//MIDDLEWARE
app.use(bodyParser.json())

//DB config
const DB = require("./config/keys").mongoURI

mongoose.connect(DB)
.then(()=> console.log("db is connected"))
.catch(err => console.log("error"))

//use routes

app.use("api/items", items)

const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`)
})