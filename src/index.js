import data from './data';
import ui from './ui';

const controller = ((data, ui) => {
  let wD;
  const units = 'F';
  const toggleUnits = (s) => units == 'F' ? 'imperial' : 'metric';
  const searchVal = document.getElementById('searchInput');

  const defaultWeather = async (city = 'Accra', unit = 'imperial') => {
    try {
      const result = await data.getWeather(city, unit);
      wD = await result;
      ui.renderPage(result);
      return result;
    } catch (e) {
      console.log('sorry we could not find your city');
    }
   
  };

  defaultWeather();

  const handleClick = (event) => {
    if (event.target.id === 'searchBtn') {  
      const val = document.getElementById('searchInput').value;
      const unit = 'F';
      const sData = data.getWeather(val, unit);
      console.log(sData);
      resetValue(val);
      ui.renderPage(sData);
    } else if (event.target.id === 'toggeleUnits'){
        units = unit === 'F' ? 'C' : 'F';
        defaultWeather(wD.name, toggleUnits(units));
    } else if (searchVal.value) {
        defaultWeather(searchVal.value, toggleUnits(units));
    } else {
      console.log('Please enter name of city!!!');
    }
  };

  const myKeyPress = (event) => {
    if (searchVal.value && event.which == 13) {
      defaultWeather(searchVal.value, toggleUnits(units));
    }
  }

  const resetValue = (s) => {
    s = document.getElementById('searchInput').value;
    s = '';
    return s;
  };

  defaultWeather();

  
  
  searchVal.addEventListener('click', handleClick);
  searchVal.addEventListener('click', myKeyPress);
  document.getElementById('searchBtn').addEventListener('click', handleClick);
})(data, ui);
