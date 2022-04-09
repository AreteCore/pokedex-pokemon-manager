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

//middleware goes here
app.use(express.urlencoded({
    extended:false
})) //parses the request out of the url into something express understands
app.use(morgan("tiny")) //morgan server logging
app.use("/static", express.static("public")) //enables use of public folders

//middleware end

//listener
app.listen(PORT, () => {
    console.log(`Pokemon server port:${PORT}`)
})
//

//index
app.get("/pokemon", (req,res) => {
    res.render('index.ejs', {
        pokedex: pokedex
    })
})