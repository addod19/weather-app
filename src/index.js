import data from './data';
import ui from './ui';


const controller = ((data, ui) => {
  let wD;
  ui.renderPage();
  const defaultWeather = async (city = 'Accra') => {
    try {
      const res = await data.getWeather(city);
      ui.renderData(res);
      wD = await res;
      return res;
    } catch (e) {
      console.log('sorry we could not find your city');
    }
    return {
      defaultWeather,
    };
  };

  const handleClick = (event) => {
    if (event.target.id === 'btnSearch') {
      const val = document.getElementById('search').value;
      const sData = data.getWeather(val);
      resetValue(val);
      ui.renderData(sData);
    }
  };

  const resetValue = (s) => {
    s = document.getElementById('search').value;
    s = '';
    return s;
  };

  document.getElementById('btnSearch').addEventListener('click', handleClick);
})(data, ui);
