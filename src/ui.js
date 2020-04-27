import first from '../dist/images/first.jpeg';

const ui = ( () => {
  const root = document.getElementById('root');

  const main = document.createElement('DIV');
  main.className = 'container';
  main.style.background = first;
  console.log(main);

  root.appendChild(main);

  const upper = document.createElement('DIV');

  const lower = document.createElement('DIV');


  main.append(upper, lower);
})();

export default ui;