//loads .env file contents into process.env
require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connections')

//express
const pfServer = express()


//use cors in server
pfServer.use(cors())

//json parser
pfServer.use(express.json())

//use router
// pfServer.use(router)
pfServer.use(router)

// available file / folder from server to other apps
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

//to host pfserver
pfServer.listen(PORT,()=>{
    console.log(`Project Fair server started at port: ${PORT}`);
})

//to resolve get http request to http://localhost:3000/
pfServer.get('/',(req,res)=>{
    res.send("<h1> hhh waiting for clint req</h1>") 
})
