const data = ( () => {
  // console.log('this is data');
  const getWeather = (async (city) => {
    const key = '9d544eaf8bd4972c4fd9ee909e1f3381';
    const getData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`,
    {mode: 'cors'});
    const weatherData = getData.json();
    return weatherData;
  });
  

  return getWeather;
})();


export default data;