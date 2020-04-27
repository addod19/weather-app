import data from './data';
import ui from './ui';


const controller = ( (data, ui) => {

  ui.renderPage();
  ui.renderData();
  const defaultWeather = async (city = 'Accra') => {
    try {
      const res = await data.getWeather('Accra');
      ui.renderData(res);
      console.log(res);
    }catch(e) {
      console.log('sorry we could not find your city');
    }
    return {
        defaultWeather,
    }

  }

  const handleClick = (event) => {
    //   console.log(event.target.id === 'btnSearch');
    if (event.target.id === 'btnSearch') {
        const val = document.getElementById('search').value;
        

        const sData = data.getWeather(val);
        console.log(sData.then());
        
        ui.renderData(sData);

    }
  }

  document.getElementById('btnSearch').addEventListener('click', handleClick);
//   handleClick();
  console.log('hi it is me');
})(data, ui);
