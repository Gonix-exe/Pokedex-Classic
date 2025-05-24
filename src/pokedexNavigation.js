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
const createNavigationPokemon = () => __awaiter(void 0, void 0, void 0, function* () {
    const card = document.querySelector('.pokemon-block');
    const arrowLeft = document.createElement('i');
    arrowLeft.classList.add('fas', 'fa-arrow-circle-left');
    const arrowRight = document.createElement('i');
    arrowRight.classList.add('fas', 'fa-arrow-circle-right');
    card.append(arrowLeft, arrowRight);
    const params = new URLSearchParams(document.location.search);
    let id = Number(params.get('id'));
    if (id === 1) {
        arrowLeft.style.visibility = 'hidden';
        arrowLeft.style.pointerEvents = 'none';
    }
    if (id === 151) {
        arrowRight.style.visibility = 'hidden';
        arrowRight.style.pointerEvents = 'none';
    }
    arrowLeft.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        id = Number(params.get('id')) - 1;
        if (id >= 1) {
            card.style.opacity = '0';
            card.style.transition = 'opacity 1000ms ease-in-out';
            setTimeout(() => {
                window.location.href = 'pokemon.html?id=' + id;
            }, 1000);
        }
    }));
    arrowRight.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        id = Number(params.get('id')) + 1;
        if (id <= 151) {
            card.style.opacity = '0';
            card.style.transition = 'opacity 1000ms ease-in-out';
            setTimeout(() => {
                window.location.href = 'pokemon.html?id=' + id;
            }, 1000);
        }
    }));
});
