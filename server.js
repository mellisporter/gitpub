const express = require("express");
const app = express();
const port = 3000;

// we need to require the drinks data

const drinks = require("./models/drinks.js");

// we need to specify which variable (in case there were multiple)


app.listen(port, ()=>{
    console.log("Ready to Rumble")
})

app.get("/", function(req,res){
    res.send('Welcome to the Gitpub App!')
})

app.get("/drinks", function(req, res){
    // sets up index view and renders
    // css works -- confirmed!
    res.render("drinks_index.ejs")
})