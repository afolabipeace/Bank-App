const express = require('express')
const app = express();
app.use(express.json())
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const router = require('./routers/router')

app.use(cors())
const PORT = process.env.PORT || 4100
app.use(express.static(__dirname + '/assets'))
app.use(express.json())
mongoose.set('strictQuery',true);
mongoose.connect(process.env.URI).then(res=>{
    console.log('Mongoose connected successfully')
}).catch(err=>{
    console.log('Error occured'+err)
})

app.use('/',router)
app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})