const express = require("express");
const app = express();
const port = 3000;

// we need to require the drinks data

const drinks = require("./models/drinks.js");

// have to require the food data as well

const food = require("./models/food.js");

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
    res.render("drinks_index.ejs" , {
        // set up allDrinks as an object as the second parameter to pull this data
        allDrinks: drinks
    })
})

// set up similar page for food
app.get("/food", function (req, res){
    res.render("food_index.ejs", {
        allFood: food
    })
})
        

// set up new route for drinks/id
// used as show page

app.get("/drinks/:id", function(req, res){
    res.render("drinks_show.ejs", {
        // need to add parameter here so that the show page can access the name and other data
        drink: drinks[req.params.id]
    })
})

app.get("/food/:foodId", function (req, res){
    res.render("food_show.ejs", {
      foodItem: food[req.params.id]  
    })
})

// playing around with nidex parameters
// app.get("/drinks/:indexOfDrinksArray", function(req, res){
//     res.send(drinks[req.params.indexOfDrinksArray].name.toUpperCase())
// })