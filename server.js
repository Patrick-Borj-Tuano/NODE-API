const express = require('express');
const app = express()

//ROUTES
app.get('/',(req,res) => {
    res.send('Hello NODE API')
})

app.listen (3000, ()=>{
    console.log("NODE API is running")
})


