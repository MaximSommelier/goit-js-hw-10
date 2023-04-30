import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from "./fetchCountries";

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));


function onSearch(evt) {
  evt.preventDefault();
  const name = evt.target.value.trim();
//   const { name, capital, population, flags, languages } =
//     evt.currentTarget.elements;
  fetchCountries()
    .then(data => console.log(data))
    .catch(error => console.log(error));
  console.dir(name);
}

function createLittleMarkup(arr) {
  const markup = arr
    .map(
      ({
        flags: { svg },
        name: { official },
      }) => `<div class="country">
      <img src="${svg}" alt="flag of ${official}">
      <h2 class="country-name">${official}</h2>
    </div>`
    )
    .join('');
    countryList.innerHTML = markup;
}

function createFullMarkup(arr) {
    const markup = arr
      .map(
        ({
          flags: { svg },
          name: { official },
        }) => `<div class="country">
        <img src="${svg}" alt="flag of ${svg}">
        <h2 class="country-name">${official}</h2>
        <ul>
          <li><span>Capital</span>${}</li>
          <li><span>Population</span>${}</li>
          <li><span>Languages</span>${}</li>
        </ul>
      </div>`
      )
      .join('');
      countryInfo.innerHTML = markup;
  }