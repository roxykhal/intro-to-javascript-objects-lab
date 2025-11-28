import pokemon from './data.js';

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
  collection: [],
}

//console.dir(pokemon, { maxArrayLength: null })

//Exercise 2
// console.log(game);
 
// Exercise 3
// 1. Add a new property to the `game` object. Let's call it "difficulty".
// 2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?

game.difficulty = "Hard";

// Exercise 4
// 1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.


const starterPokemon = pokemon.find(pokemonObject => pokemonObject.starter);
console.log(starterPokemon);

// 2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

game.party.push(starterPokemon);
console.log("The parties are", game.party);
// break;

//Another way of achieving this:

// for (let i = 0; i < pokemon.length; i++) {
//   if (pokemon[i].starter === true) {
//     starterPokemon = pokemon[i];
//     console.log(starterPokemon);
//     break;
//   }
// }


/// Exercise 5
//1. Choose three more Pokémon from the `pokemon` array and add them to your party.

const firstPokemon = pokemon.find(p => p.name === 'Ivysaur');
console.log(firstPokemon);
game.party.push(firstPokemon);

const secondPokemon = pokemon.find(p => p.name === 'Bulbasaur');
console.log(secondPokemon);
game.party.push(secondPokemon);

const thirdPokemon = pokemon.find(p => p.name === 'Persian');
console.log(thirdPokemon);
game.party.push(thirdPokemon);

//Another way of doing this:
// let ivysaur;

// for (let i = 0; i < pokemon.length; i++) {
//   if (pokemon[i].name === "Ivysaur") {
//     ivysaur = pokemon[i];
//     console.log(ivysaur);
//     break; // stop once Squirtle is found
//   }
// }

// game.party.push(ivysaur);
// console.log(ivysaur);

// let pokemonEkans;

// for(let i = 0; i < pokemon.length; i++) {
//   if(pokemon[i].name === "Ekans") {
//   pokemonEkans = pokemon[i];
//   console.log(pokemonEkans);
//   break;
//   }
// }

// game.party.push(pokemonEkans);
// console.log(pokemonEkans);

// let pokemonOddish;

// for(let i = 0; i < pokemon.length; i++) {
//   if(pokemon[i].name === "Oddish") {
//   pokemonOddish = pokemon[i];
//   console.log(pokemonOddish);
//   break;
//   }
// }

// game.party.push(pokemonOddish);
// console.log(pokemonOddish);


//2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

const type = pokemon.filter(p => p.type === 'electric' && p.name === 'Pikachu');
console.log("Type and name of pokemon is:", type);

//Exercise 6 - Set the `completed` property to true for gyms with a difficulty below 3.

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

//console.log("new array is", game.gyms);

 //7. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one. - bit confused on this one.

game.party.splice(0, 1, 'IvySaur');

//console.log(game.party[0]);


//Exercise 8 - Print the name of each Pokémon in your party - Party is an array in the object, pokemon is the placeholder for the current element.

//array.forEach(function)(element, index, array) {

game.party.forEach(Pokemon => 
  console.log(Pokemon.name));

 //Exercise 9 - Print out all the start pokemon from the pokemon array

pokemon.forEach(p => {
  if(p.starter === true) {
    console.log(p.name);
  }
});


//10 - Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
//Accept an object as a parameter called `pokemonObj`
//Add the `pokemonObj` to the `game.party` array.
//not return anything

// game.catchPokemon = (pokemonObj) => {
//   game.party.push(pokemonObj);
// };

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = (pokemonObj) => {
  // 1. Add the Pokémon to the party
  game.party.push(pokemonObj);

  // 2. Find the pokeball item in inventory
  const pokeballItem = game.items.find(item => item.name === "pokeball");

  // 3. Decrement the pokeballs
  pokeballItem.quantity--;
};

const pikachu = pokemon.find(p => p.name === "Pikachu");
game.catchPokemon(pikachu);


//For each item object in game.items, check if its name is 'pokeball'.”

console.log('here:',game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

game.gyms.forEach(p => {
  if(p.difficulty < 6) {
    p.completed = true;
  }
});

console.log('new completed it:', game.gyms);


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 

    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 

    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.

  - Log the value of `gymTally`.

  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = () => {

  const gymTally = {
    completed: 0,
    incomplete: 0
  }

for (let i = 0; i < game.gyms.length; i++) {
  if(game.gyms[i].completed === true) {
    gymTally.completed++;
} else {
  gymTally.incomplete++;
  
}}
console.log("new tally is:", gymTally);

};

game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = () => {
  return game.party.length;
};

console.log(game.partyCount());

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach(p => {
  if(p.difficulty < 8) {
    p.completed = true;
  }
});

console.log('updated:', game.gyms);

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log('logging entire object:', game);

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

game.party.sort((a, b) => b.hp - a.hp);

//console.log('updated hp:', game.party);

console.log("show me");
console.dir(game.party, { depth: null });

/*
Exercise 18

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:

  - Ensure that no more than six Pokemon can be in the party at any time. 
  
    Excess Pokemon should be placed in the `game.collection` array.

  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/



game.catchPokemon = (pokemonObj) => {

  const pokeballItem = game.items.find(i => i.name === 'pokeball');
  pokeballItem.quantity--;

  
  if(game.party.length < 6) {
    game.party.push(pokemonObj);
  } else {
    game.collection.push(pokemonObj);
  }

};

// const pikachu = pokemon.find(p => p.name === "Pikachu");
// game.catchPokemon(pikachu);

const Arbok = pokemon.find(p => p.name === "Arbok");
game.catchPokemon(Arbok);

const Weedle = pokemon.find(p => p.name === "Weedle");
game.catchPokemon(Weedle);

const Charmeleon = pokemon.find(p => p.name === "Charmeleon");
game.catchPokemon(Charmeleon);

console.log('collection:', game.collection);
console.log('party:', game.party);
console.log('pokeball number:', game.items)

// console.log(game.items);

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object,
and the method will look up the Pokemon from the data set for you.


The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, 
and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

game.catchPokemon = (name) => {

  // 1. Normalize input
  const normalizedName = name.toLowerCase();

  // 2. Find the Pokémon (not filter — find returns ONE object)
  const pokemonObj = pokemon.find(p => p.name.toLowerCase() === normalizedName);

  // 3. If it doesn't exist → return an error message
  if (!pokemonObj) {
    return `There is no Pokémon called "${name}"`;
  }
};

console.log(game.catchPokemon("dragons"));


/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

const pokemonByType = {};

for (let i = 0; i < pokemon.length; i++) {
  const p = pokemon[i];        // current Pokémon object
  const type = p.type;         // e.g. "grass", "fire", "water"

  // If this type doesn't exist yet in the object, create an empty array for it
  if (!pokemonByType[type]) {
    pokemonByType[type] = [];
  }

  // Add the current Pokémon to the correct array
  pokemonByType[type].push(p);
}

console.log(pokemonByType);
