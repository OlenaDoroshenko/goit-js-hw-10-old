import { refs } from './refs.js';

const { themeCheckbox, body } = refs;

themeCheckbox.addEventListener('change', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

window.onload = function () {
  if (localStorage.getItem('theme') === DARK) {
    themeCheckbox.checked = true;
    addDarktTheme();
  }
};

function changeTheme(e) {
  const currentTheme = localStorage.getItem('theme');

  if (!currentTheme || currentTheme === LIGHT) {
    addDarktTheme();
    localStorage.setItem('theme', DARK);
  }

  if (currentTheme === DARK) {
    addLightTheme();
    localStorage.setItem('theme', LIGHT);
  }
}

function addLightTheme() {
  body.classList.remove(DARK);
  body.classList.add(LIGHT);
}

function addDarktTheme() {
  body.classList.remove(LIGHT);
  body.classList.add(DARK);
}
