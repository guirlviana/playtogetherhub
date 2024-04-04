import { type Game, games } from "../games";

const searchForGame = (nameSearched: string): null | Game => {
  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const nameFormatted = game.name.replace(/\s+/g, "");
    const nameSearchedFormatted = nameSearched.replace(/\s+/g, "");

    if (nameFormatted.includes(nameSearchedFormatted)) {
      return game;
    }
  }

  return null;
};

console.log(searchForGame("Mine"));
