import data from './data';
import ui from './ui';


const controller = ( (data, ui) => {

//   const weatherData;
//   const unit = 'F';
//   const btn = document.getElementById('btnSearch').value;
//   btn.addEventListener('click', console.log('you clicked btn'));
//   data.getWeather('Accra');
  const defaultWeather = async (city = 'Accra') => {
    try {
      const res = await data.getWeather('Accra');
      console.log(res);
    }catch(e) {
      console.log('sorry we could not find your city');
    }
    return {
        defaultWeather,
    }

  }
  console.log('hi it is me');
  data('Accra');
})(data, ui);
