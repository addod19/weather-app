import data from './data';
import ui from './ui';


const controller = ((data, ui) => {
  let wD;
  ui.renderPage();
  //   ui.renderData();
  const defaultWeather = async (city = 'Accra') => {
    try {
      const res = await data.getWeather('Accra');
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
    //   console.log(event.target.id === 'btnSearch');
    if (event.target.id === 'btnSearch') {
      const val = document.getElementById('search').value;


      const sData = data.getWeather(val);
      resetValue(val);
    //   console.log(sData);
      // console.log(ui.renderData('Accra', 'F').getData);

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
