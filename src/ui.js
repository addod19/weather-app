import first from '../dist/images/first.jpeg';
import data from './data';

const ui = ( () => {
  const renderPage = () => {
    const root = document.getElementById('root');

    const nav = document.createElement('NAV');
    nav.className = 'nav custom-nav';
    nav.innerText = 'Weather App';

    const main = document.createElement('DIV');
    main.className = 'container';
    main.style.backgroundImage = first;
    console.log(main);

    root.append(nav, main);

    const upper = document.createElement('DIV');
    upper.className = 'row col-12';
    upper.setAttribute('id', 'apiData');

    const lower = document.createElement('DIV');
    lower.className = 'row col-12';

    const searchInput = document.createElement('INPUT');
    searchInput.setAttribute('placeholder', 'enter city');
    searchInput.setAttribute('id', 'search');
    searchInput.className = 'form-control';

    const searchBtn = document.createElement('button');
    searchBtn.className = 'btn btn-primary form-control mt-4';
    searchBtn.innerText = 'Search';
    searchBtn.setAttribute('id', 'btnSearch');

    lower.append(searchInput, searchBtn);


    main.append(upper, lower);
  }

  const renderData = (weather, unit = 'F') => {
    let { feels_like, temp, min_temp, max_temp } = Promise ;
    const { name } = Promise;
    const getData = () => {
      console.log('heyyyyyyy');
      // data.getWeather('Accra');
    }
    // document.getElementById('btnSearch').addEventListener('click', getData);

    return getData;
  }

  return {
    renderPage,
    renderData,
  }
})();

export default ui;