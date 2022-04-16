//this function takes a req.body and transforms it into
//an object that is parseable the way that show.ejs needs,
//just like an object in the array pokedex.js

module.exports = function (body) {
  let newPoke = {
    misc: {},
    stats: {},
    damages: {},
  };
  newPoke.id = body.id;
  newPoke.name = body.name;
  newPoke.img = body.img;
  newPoke.misc.classification = body.classification;
  newPoke.type = body.type.split(", "); //returns the array
  newPoke.stats = {
    hp: body.hp,
    attack: body.attack,
    defense: body.defense,
    spattack: body.spattack,
    spdefense: body.spdefense,
    speed: body.speed,
  };
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
    steel: body.steel,
  };

  return newPoke;
};
