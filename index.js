const dotenv = require('dotenv')
const express = require("express")

const app = express();

const PORT = 3000

app.get("/",(req,res)=>{
    res.send("Welcome to my site");
})

app.listen(process.env.PORT,()=>console.log(`Server running on port ${PORT}`))