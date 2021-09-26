import menu from './menu.json';
import dishCardTemp from '../template/dish-card.hbs';
import { refs } from './refs.js';
const { list } = refs;


const dishCardsMarkup = dishCardTemp(menu);
list.insertAdjacentHTML('beforeend', dishCardsMarkup);
