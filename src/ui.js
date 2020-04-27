import first from '../dist/images/first.jpeg';
import data from './data';

const ui = (() => {
  const renderPage = async() => {
    const root = document.getElementById('root');
    
    const upper = document.createElement('DIV');
    upper.className = 'row';
    upper.setAttribute('id', 'apiData');

    const date = Date.now().toString();
    const res = await data.getWeather('Accra');

    const {
      feels_like, temp, temp_min, temp_max,
    } = res.main;
    const { name } = res.name;
    console.log(res);
    
    upper.innerHTML = `
      <div class="col-sm-12">
        <div class="content">
          <span>${date}</span>
          <h3>${res.name}, ${res.sys.country} - ${temp} </h3>
          <div> ${res.weather[0].description}</div>
          <div>Feels like ${feels_like} </div>
          <div>Min ${temp_min} - Max ${temp_max} </div>
          <a href="" id="toggeleUnits">Change to C</a>
        </div>
      </div>
    `;

    const nav = document.createElement('NAV');
    nav.className = 'nav custom-nav';
    nav.innerText = 'Weather App';

    const main = document.createElement('DIV');
    main.className = 'container';
    main.style.backgroundImage = first;

    root.append(nav, main);

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
  };

  return {
    renderPage,
  };
})();

export default ui;