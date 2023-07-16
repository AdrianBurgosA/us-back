var express = require('express')
var app = express()
var mongoose = require('mongoose')
const portParameter = 3003
const bodyParser = require('body-parser')
const EndPoints = require('./api/EndPoints')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/api",EndPoints)

const mongoURI = "mongodb+srv://admin:admin@cluster0.d57f9t5.mongodb.net/tienda?retryWrites=true&w=majority"

mongoose.connect(
    mongoURI,
    {useNewUrlParser: true},
    (err,res) => {
        err && console.log("Error conectando a la base de datos")
        app.listen(portParameter, () => {
            console.log(`Server is running at http://localhost:${portParameter}`)
        })
    }
)