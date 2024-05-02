const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
//app.use(express.urlencoded({ extended: true }))
app.use(cors())


let router=require('./routes')
app.use('/api',router)


app.listen(3000, () => {console.log('escuchando en puerto 3000')})

