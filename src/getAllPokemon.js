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
var _a, _b;
const fetchPokemon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = yield response.json();
        if (data.id < 1 || data.id > 151) {
            throw new Error('This pokemon doesn\'t exists in the pokedex !');
        }
        else {
            createPokemon({ pokemon: data });
        }
    }
    catch (err) {
        const pokedex = document.querySelector('#pokedex');
        const empty = document.createElement('p');
        empty.textContent = 'This pokemon doesn\'t exists in the pokedex !';
        empty.classList.add('pokedex-empty');
        pokedex.append(empty);
    }
});
const fetchPokemons = (all) => __awaiter(void 0, void 0, void 0, function* () {
    all = 151;
    for (let i = 1; i <= all; i++) {
        yield fetchPokemon(i);
    }
});
const createPokemon = ({ pokemon }) => {
    const pokedex = document.querySelector('#pokedex');
    const card = document.createElement('a');
    card.classList.add('pokemon-block');
    card.href = `pokemon.html?id=${pokemon.id}`;
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
    card.append(spriteContainer, id, name);
    pokedex === null || pokedex === void 0 ? void 0 : pokedex.appendChild(card);
};
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetchPokemons(151);
}), false);
(_a = document.querySelector('.search-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const search = document.querySelector('#search');
    const pokemonName = search.value;
    if (pokemonName !== '') {
        let pokedex = document.querySelector('#pokedex');
        pokedex.remove();
        const main = document.querySelector('main');
        pokedex = document.createElement('div');
        pokedex.id = 'pokedex';
        main.appendChild(pokedex);
        search.value = '';
        return yield fetchPokemon(pokemonName);
    }
}));
(_b = document.querySelector('.search-reload')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    window.location.reload();
}));
