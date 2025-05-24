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
const fetchOnePokemonDescription = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = new URLSearchParams(document.location.search);
        const id = Number(params.get('id'));
        const response = yield fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        const data = yield response.json();
        if (id < 1 || id > 151) {
            throw new Error('');
        }
        else {
            createOnePokemonDescription({ pokemonDescription: data });
        }
    }
    catch (err) {
        const pokedex = document.querySelector('#pokedex');
        const empty = document.createElement('p');
        empty.textContent = '';
        empty.classList.add('pokedex-empty');
        pokedex.append(empty);
    }
});
const createOnePokemonDescription = ({ pokemonDescription }) => {
    const article = document.querySelector('article');
    const description = document.createElement('p');
    description.classList.add('pokemon-description');
    description.textContent = `Description: This pokemon, ${pokemonDescription.flavor_text_entries[1].flavor_text}`;
    description.style.color = pokemonDescription.color.name;
    const habitat = document.createElement('p');
    habitat.classList.add('pokemon-habitat');
    habitat.textContent = `Habitat: ${pokemonDescription.habitat.name}`;
    habitat.style.color = pokemonDescription.color.name;
    const growthRate = document.createElement('p');
    growthRate.classList.add('pokemon-growthrate');
    growthRate.textContent = `Growth rate: ${pokemonDescription.growth_rate.name}`;
    const evolvedFrom = document.createElement('p');
    evolvedFrom.classList.add('pokemon-evolutions');
    evolvedFrom.textContent = pokemonDescription.evolves_from_species ?
        `Evolves form from: ${pokemonDescription.evolves_from_species.name}` : 'Not evolved form';
    article.append(description, habitat, growthRate, evolvedFrom);
};
fetchOnePokemonDescription();
