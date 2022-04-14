# Pokedex Project

### Note about styling: 
On the main page, the individual GameBoy Colors on each tile for the Pokemon pics are PNG files that I created by cropping a photo of a GameBoy.

The files are `gbc0.png` through `gbc5.png`

The little gameboy screens on each one are actually sections with opacity at 0, where you can see 'through' the PNG. The individual pokemon pics display behind them. You can see how the GBCs overlap the pokemon pics a little bit, I wanted that so it would be obvious how the elements are stacked for each tile.

There is a chunk of code in `index.ejs` that effectively randomly chooses the Gameboy for each Pokemon when populating the page.

Also I must say I am proud of a bit of magic called `pokemonCreator`, a function that takes `req.body` as a parameter and transforms it into an object formatted in the same way as one of the pokemon in the source data. You can find that in `/models/pokemonCreator.js`

Thanks for reading!

R

![pokedex](https://github.com/AreteCore/pokedex-pokemon-manager/blob/master/public/pokedex.png?raw=true)
