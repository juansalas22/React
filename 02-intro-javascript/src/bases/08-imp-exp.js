import heroes, { owners } from "../data/heroes";

//const getHeroeById = (id) => {
//    return heroes.find( heroe => heroe.id === id);
//}

export const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);

//find and filter method

//console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner);

//console.log(getHeroeByOwner('DC'));