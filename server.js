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
// app.get('/fruits/new', (req,res) => {
//     res.render('new.ejs')
// })

// //post route
// app.post('/fruits/', (req, res) => {
//     // console.log(req.body)
//     req.body.readyToEat = !!req.body.readyToEat
//     // console.log(req.body)
//     fruits.push(req.body)
//     console.log(fruits)
//     res.redirect("/fruits")
// })

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
    // res.send(req.body)
    function pokemonCreator(body) {
        let newPoke = {
            misc: {},
            stats: {},
            damages: {}
        }
        newPoke.id = body.id
        newPoke.name = body.name
        newPoke.img = body.img
        newPoke.misc.classification = body.classification
        newPoke.type = body.type.split(", ") //returns the array
        newPoke.stats = {
            hp: body.hp,
            attack: body.attack,
            defense: body.defense,
            spattack: body.spattack,
            spdefense: body.spdefense,
            speed: body.speed
        }
        newPoke.damages = {
            normal: body.normal,
            fire: body.fire,
            water: body.water,
            electric: body.electric,
            grass: body.grass,
            ice: body.ice,
            fight: body.fight,
            poison: body.poison,
            ground: body.ground,
            flying: body.flying,
            psychic: body.psychic,
            bug: body.bug,
            rock: body.rock,
            ghost: body.ghost,
            dragon: body.dragon,
            dark: body.dark,
            steel: body.steel
        }

        return newPoke
    }
    // res.send(pokemonCreator(req.body))
    pokedex[req.params.id] = pokemonCreator(req.body)
    res.redirect("/pokedex")
})

// {
    //0x     "name": "Charmeleon",
    //1x     "img": "http://img.pokemondb.net/artwork/charmeleon.jpg",
    //2x     "id": "005",
    //misc
    //3 x    "classification": "flame pokemon",
    //4     "type": "Fire",
    //stats
    //5     "hp": "58",
    //6     "attack": "64",
    //7     "defense": "58",
    //8     "spattack": "80",
    //9 "spdefense": "65",
    //10     "speed": "80",
    //damages
    //11     "normal": "1",
    //     "fire": "0.5",
    //     "water": "2",
    //     "electric": "1",
    //     "grass": "0.5",
    //     "ice": "0.5",
    //     "fight": "1",
    //     "poison": "1",
    //     "ground": "2",
    //     "flying": "1",
    //     "psychic": "1",
    //     "bug": "0.5",
    //     "rock": "2",
    //     "ghost": "1",
    //     "dragon": "1",
    //     "dark": "1",
    //  27   "steel": "0.5"
    //   }

    // {
    //     id: "001",
    //     name: "Bulbasaur",
    //     img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
    //     type: [
    //       "Grass",
    //       "Poison"
    //     ],
    //     stats: {
    //       hp: "45",
    //       attack: "49",
    //       defense: "49",
    //       spattack: "65",
    //       spdefense: "65",
    //       speed: "45"
    //     },
    //     damages: {
    //         normal: "1",
    //         fire: "2",
    //         water: "0.5",
    //         electric: "0.5",
    //         grass: "0.25",
    //         ice: "2",
    //         fight: "0.5",
    //         poison: "1",
    //         ground: "1",
    //         flying: "2",
    //         psychic: "2",
    //         bug: "1",
    //         rock: "1",
    //         ghost: "1",
    //         dragon: "1",
    //         dark: "1",
    //         steel: "1"
    //       },
    //       misc: {
    //           classification: "skidrowdian"
    //         },
    //     }