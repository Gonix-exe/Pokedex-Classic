"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchOnePokemon = () => __awaiter(void 0, void 0, void 0, function* () {
    const params = new URLSearchParams(document.location.search);
    const id = Number(params.get('id'));
    if (id >= 1 && id <= 151) {
        const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = yield response.json();
        createOnePokemon({ pokemon: data });
    }
    else {
        const pokedex = document.querySelector('#pokedex');
        const empty = document.createElement('p');
        empty.textContent = 'This pokemon doesn\'t exists in the pokedex !';
        empty.classList.add('pokedex-empty');
        pokedex.append(empty);
    }
});
const createOnePokemon = ({ pokemon }) => {
    const pokedex = document.querySelector('#pokedex');
    const card = document.createElement('article');
    card.classList.add('pokemon-block');
    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('pokemon-image-container');
    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;
    sprite.alt = pokemon.name;
    spriteContainer.appendChild(sprite);
    const id = document.createElement('p');
    id.classList.add('pokemon-id');
    id.textContent = `#${pokemon.id.toString().padStart(3, String(0))}`;
    const name = document.createElement('p');
    name.classList.add('pokemon-name');
    name.textContent = pokemon.name;
    const types = document.createElement('p');
    types.classList.add('pokemon-types');
    types.textContent = `Main type: ${pokemon.types[0].type.name}`;
    const abilities = document.createElement('p');
    abilities.classList.add('pokemon-abilities');
    abilities.textContent = `Main ability: ${pokemon.abilities[0].ability.name}`;
    const height = document.createElement('p');
    height.classList.add('pokemon-height');
    height.textContent = `Height: ${pokemon.height}`;
    const weight = document.createElement('p');
    weight.classList.add('pokemon-weight');
    weight.textContent = `Weight: ${pokemon.weight}`;
    card.append(spriteContainer, id, name, types, abilities, height, weight);
    pokedex.appendChild(card);
    createNavigationPokemon();
};
fetchOnePokemon();
