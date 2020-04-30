const ui = (() => {
  const renderPage = (getData, unit = 'F') => {
    const root = document.getElementById('root');
    
    const {
      feels_like, temp, temp_min, temp_max,
    } = getData;
    const { name } = getData.name;
    const { main, description, icon} = getData[0].main;

    
    const nav = document.createElement('NAV');
    nav.className = 'nav custom-nav';
    nav.innerText = 'Weather App';
    
    const mainn = document.createElement('DIV');
    mainn.className = 'container';
    mainn.style.backgroundImage = first;

    root.append(nav, mainn);

    const upper = document.createElement('DIV');
    upper.className = 'row';
    upper.setAttribute('id', 'apiData');

    upper.innerHTML = `
    <div class="col-sm-12">
      <div class="content text-center">
        <span>${date.toString()} - ${icon} </span>
        <h3>${name}, ${data.sys.country} - ${Math.round(temp)} º${unit} </h3>
        <div>${description}</div>
        <div>Feels like ${feels_like} º${unit} </div>
        <div>Min ${Math.round(temp_min)} º${unit} - Max ${Math.round(temp_max)} º${unit}</div>
        <a href="" id="toggeleUnits">Change to º</a>
      </div>
    </div>
    `;

    const lower = document.createElement('DIV');
    lower.className = 'row col-12';

    const searchInput = document.createElement('INPUT');
    searchInput.setAttribute('placeholder', 'enter city');
    searchInput.setAttribute('id', 'search');
    searchInput.className = 'form-control w-60';

    const searchBtn = document.createElement('button');
    searchBtn.className = 'btn btn-primary form-control mt-4 w-60';
    searchBtn.innerText = 'Search';
    searchBtn.setAttribute('id', 'btnSearch');

    lower.append(searchInput, searchBtn);


    mainn.append(upper, lower);
  };

  return {
    renderPage,
  };
})();

export default ui;