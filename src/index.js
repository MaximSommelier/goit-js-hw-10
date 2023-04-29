import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
// const BASE_URL = 'https://restcountries.com/v3.1';
// const ENDPOINT = '/all?fields=name,capital,population,flags,languages';
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
const nameSearch = evt.target.value.trim();
const littleList = document.querySelector('.country-list');

function onSearch(evt) {
  evt.preventDefault();
  const { name, capital, population, flags, languages } =
    evt.currentTarget.elements;
  fetchCountries()
    .then(data => console.log(data))
    .catch(error => console.log(error));
  console.dir(name);
}

function fetchCountries(name) {
  const URL = `https://restcountries.com/v3.1/${name}?fields=name,capital,population,flags,languages`;
  return fetch(URL).then(resp => {
    if (!resp.ok) {
      throw new error(resp.statusText);
    }
    return resp.json();
  });
}

function createLittleMarkup(arr) {
  return arr
    .map(
      ({
        flags: { svg },
        name: { official },
      }) => `<li><img src="${svg}" alt="${official}">
    <p>${official}</p>
  </li>`
    )
    .join('');
    
}
