import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const BASE_URL = 'https://restcountries.com/v3.1';
const ENDPOINT = '/all?fields=name,capital,population,flags,languages';
const input = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

document.addEventListener('input', debounce(onSearch,DEBOUNCE_DELAY));

function onSearch(evt){
    evt.preventDefault();
console.dir(evt.target);
    // const name = evt.target.value.trim();
}

function fetchCountries(){
    const URL = `${BASE_URL}${ENDPOINT}`;
    return fetch(URL).then(resp => {if
    (!resp.ok){
throw new error(resp.statusText)
    }
    return resp.json()
})
};

fetchCountries().then(data => console.log(data)).catch(error =>console.log(error))


