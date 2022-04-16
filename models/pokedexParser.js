//I wanted to parse the important parts out of the pokedex.js as an exercise.
//this is how I did it:

//requires filesystem package to be able to write file at the end
const fs = require("fs");
//os utilities
const { devNull } = require("os");

//this is the original bloated pokedex
const pokedex = require("./pokedex.js");

//an empty array for our new pokedex
let pokedexLite = [];

//iterate over the original array, push manipulated objects to the new array
for (let pokemon of pokedex) {
  pokedexLite.push(pokemonParser(pokemon));
}

//this is the function that actually "extracts" the 
//relevant data from an individual pokemon object
function pokemonParser(oldPokemon) {
  //temp newPokemon
  let newPokemon = {
    //putting these keys empthy/null in the right order 
    //ensures the output keys in the same order as the original
    id: null,
    name: null,
    img: null,
    type: null,
    misc: {},
    stats: {},
    damages: {},
  };
  //copy stuff over
  newPokemon.id = oldPokemon.id;
  newPokemon.name = oldPokemon.name;
  newPokemon.img = oldPokemon.img;
  newPokemon.misc.classification = oldPokemon.misc.classification;
  newPokemon.type = oldPokemon.type;
  newPokemon.stats = oldPokemon.stats;
  newPokemon.damages = oldPokemon.damages;
  //return to push to array
  return newPokemon;
}

//writes the whole thing to a file when its done looping
fs.writeFileSync("pokedex_lite_demo.js", JSON.stringify(pokedexLite));

//note:
//this will output pokedex_lite_demo.js
//pokedex_lite_demo.js will work just fine for the exercise if you add a 
// module.exports = 
//at the beginning, 

//but...
//the file will be (visually) an absolute mess

//to format it nicely, do this...
// npm i prettier --save-dev
//then add this to scripts in package .json: 
// "pretty": "prettier --write \"./**/*.{js,jsx,json}\""
//then run prettier using:
// npm run pretty
//once you are done: 
// npm uninstall prettier
//dont forget to remove the "pretty" script 
//from package.json 
//(though you don't have to, it serves no purpose once you uninstall prettier)
// -r
