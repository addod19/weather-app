import first from '../dist/images/first.jpeg';

const ui = ( () => {
  const root = document.getElementById('root');

  const nav = document.createElement('NAV');
  nav.className = 'nav custom-nav';
  nav.innerText = 'Weather App';

  const main = document.createElement('DIV');
  main.className = 'container';
  main.style.background = first;
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
})();

export default ui;