import data from './data';
import ui from './ui';
// console.log("is the file running?");

const controller = ((data, ui) => {
  let wD;
  const units = 'F';
  const toggleUnits = (s) => units == 'F' ? 'imperial' : 'metric';
  const searchVal = document.getElementById('search');

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
    if (event.target.id === 'btnSearch') {
      const val = document.getElementById('search').value;
      const unit = 'F';
      const sData = data.getWeather(val, unit);
      // console.log(sData);
      resetValue(val);
      ui.renderData(sData);
    } else if (event.target.id === 'toggeleUnits'){
        units = unit === 'F' ? 'C' : 'F';
        defaultWeather(wD.name, toggleUnits(units));
    }
  };

  const resetValue = (s) => {
    s = document.getElementById('search').value;
    s = '';
    return s;
  };

  defaultWeather();


  
  // document.getElementById('btnSearch').addEventListener('click', handleClick);
})(data, ui);
