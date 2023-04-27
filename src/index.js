import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const URL1 = 'https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages';
const URL2 = 'https://restcountries.com/v3.1/name/{name}';

function fetchCountries(){
fetch(URL1).then(resp => {if
    (!resp.ok){
throw new error(resp.statusText)
    }
    return resp.json()
}).then()
.catch(error)
};
fetchCountries()
// document.addEventListener(
//     "input",
//     _.debounce(() => {
     
//     }, 300)
//   );