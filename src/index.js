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
  const name = evt.target.value.trim();
  if (!name){
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";
    return
  }

  evt.preventDefault();

  fetchCountries(name)
    // .then(data => console.log(data))
    .then(searchCountries(arr))
    .catch(error => console.log(error));
  console.log(name);
}

function searchCountries(arr){
  const amountCountries = arr.length;
  if (amountCountries === 1) {
    return createFullMarkup(countries)
  } else if (amountCountries >1 && amountCountries <= 10){
    return createShortMarkup(countries)
  }
  Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
}

function createShortMarkup(countries) {
  const markup = arr
    .map(
      ({
        flags: { svg },
        name: { official },
      }) => `<div class="country">
      <img src="${svg}" width="50" height="25" alt="flag of ${official}">
      <h2 class="country-name">${official}</h2>
    </div>`
    )
    .join('');
    countryList.innerHTML = markup;
}

function createFullMarkup(countries) {
    const markup = arr
      .map(
        ({
          flags: { svg },
          name: { official },
          capital,
          languages,
          population,
        }) => `<div class="country">
        <img src="${svg}" width="50" height="25" alt="flag of ${svg}">
        <h2 class="country-name">${official}</h2>
        <ul class="info-country">
          <li><span>Capital</span>: ${capital}</li>
          <li><span>Population</span>: ${population}</li>
          <li><span>Languages</span>: ${Object.values(languages)}</li>
        </ul>
      </div>`
      )
      .join('');
      countryInfo.innerHTML = markup;
  }