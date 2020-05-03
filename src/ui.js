import data from './data';
const ui = (() => {
  
  const renderPage = async (defaultWeather, unit) => {
    const result = await data.getWeather('Accra', 'C');
    
    const {
      feels_like, temp, temp_min, temp_max,
    } = result.main;

    const { main, description, icon} = result.weather[0];
    const { name } = result;
    const curDate = Date();

    const img = document.createElement('img');
    const showIcon = img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById('date').innerText = `${curDate}`;
    document.getElementById('name').innerText = `${name}, ${result.sys.country} - ${Math.round(temp)}ºF`;
    document.getElementById('description').innerText = `${description.toUpperCase()} - ${main}`;
    document.getElementById('feels').innerText = `Feels like: ${Math.round(feels_like)} ºF`;
    document.getElementById('temp').innerText = `Min temp ${Math.round(temp_min)} ºF - Max temp ${Math.round(temp_max)} ºF`
    document.getElementById('toggeleUnits').innerText = `Change to º${
      unit === 'C' ? 'F' : 'C'}`;

  };

  return {
    renderPage,
  };
})();

export default ui;