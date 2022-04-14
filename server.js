//basic setup steps
//npm init
//npm i express dotenv morgan ejs method-override  
//touch .env .gitignore
//add node_modules and .env to gitignore
//add PORT=3000 to .env
//mkdir models views
//move pokedex.js to /models
//

require("dotenv").config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3001
const pokedex = require('./models/pokedex.js')
const pokemonCreator = require('./models/pokemonCreator.js')

//middleware goes here
app.use(express.urlencoded({
    extended: false
})) //parses the request out of the url into something express understands
app.use(morgan("tiny")) //morgan server logging
app.use("/static", express.static("public")) //enables use of public folders
app.use(methodOverride("_method"))

//middleware end

//listener
app.listen(PORT, () => {
    console.log(`Pokemon server port:${PORT}`)
})
//

//index
app.get("/pokedex", (req, res) => {
    res.render('index.ejs', {
        pokedex: pokedex
    })
})

// //new route
app.get('/pokedex/new', (req,res) => {
    res.render('new.ejs')
})

// //post route
app.post('/pokedex', (req, res) => {
    // console.log(req.body)
    req.body.readyToEat = !!req.body.readyToEat
    // console.log(req.body)
    pokedex.unshift(pokemonCreator(req.body))
    res.redirect("/pokedex")
})

//show
app.get("/pokedex/:id", (req, res) => {
    res.render('show.ejs', {
        pokemon: pokedex[req.params.id],
        id: req.params.id
    })
})

//new
app.get("/pokedex/new", (req, res) => {
    res.render("new.ejs")
})

//post route goes here



//delete goes here



//edit page
app.get("/pokedex/:id/edit", (req, res) => {
    //render edit.ejs
    res.render("edit.ejs", {
        pokemon: pokedex[req.params.id],
        id: req.params.id
    })
})

//update route for submit
app.put('/pokedex/:id', (req, res) => {
    pokedex[req.params.id] = pokemonCreator(req.body)
    res.redirect("/pokedex")
})