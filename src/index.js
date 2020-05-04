import data from './data';
import ui from './ui';

const controller = ((data, ui) => {
  let wD;
  let units = 'F';
  const toggleUnits = (s) => units == 'F' ? 'imperial' : 'metric';
  const searchVal = document.getElementById('searchInput');

  const defaultWeather = async (city = 'Accra', unit = 'imperial') => {
    try {
      const result = await data.getWeather(city, unit);
      ui.renderPage(result, units);
      wD = await result;
      return result;
    } catch (e) {
      console.log('sorry we could not find your city');
    }
   
  };

  const handleClick = (event) => {
    if (event.target.id === 'searchInput') {
      resetValue(searchVal);
    } else if (event.target.id === 'toggeleUnits'){
        event.peventDefault;
        console.log(wD.main);    
        units = units === 'F' ? 'C' : 'F';
        defaultWeather(wD.name, toggleUnits(units));
    } else if (searchVal.value) {
        defaultWeather(searchVal.value, toggleUnits(units));
        resetValue(searchVal);
    }
  };

  const myKeyPress = (event) => {
    if (searchVal.value && event.which == 13) {
      defaultWeather(searchVal.value, toggleUnits(units));
    }
  }

  const resetValue = (searchVal) => {
    searchVal.value = '';
  };

  defaultWeather();

  searchVal.addEventListener('click', handleClick);
  searchVal.addEventListener('click', myKeyPress);
  document.getElementById('searchBtn').addEventListener('click', handleClick);
  document.getElementById('toggeleUnits').addEventListener('click', handleClick);
})(data, ui);
