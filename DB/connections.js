const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlas Connected successfully with pfServer hehe");
}).catch((reason)=>{
    console.log(reason);
    console.log('MongoDB Connection failed!!');
})