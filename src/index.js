import data from './data';
import ui from './ui';


const controller = ( (data, ui) => { 
  let wD;
  ui.renderPage();
  ui.renderData();
  const defaultWeather = async (city = 'Accra') => {
    try {
      const res = await data.getWeather('Accra');
      console.log(res);
      ui.renderData(res);
      wD = await res;
      return res;
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
        console.log(sData);
        
        ui.renderData(sData);

    }
  }

  document.getElementById('btnSearch').addEventListener('click', handleClick);
//   handleClick();
  console.log('hi it is me');
})(data, ui);
