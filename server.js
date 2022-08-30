const express = require("express");
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("Ready to Rumble")
})

app.get("/", function(req,res){
    res.send('Welcome to the Gitpub App!')
})