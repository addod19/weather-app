import data from './data';
const ui = (() => {
  
  const renderPage = async (defaultWeather) => {
    console.log("checking");
    const root = document.getElementById('root');
    // console.log('suoer');
    
    // const result = defaultWeather.then( (data) => {
    //   return data;
    // });

    const result = await data.getWeather('Accra', 'C');
    // console.log(result.main);
    
    const {
      feels_like, temp, temp_min, temp_max,
    } = result.main;

    const { main, description, icon} = result.weather[0];
    console.log(feels_like, temp);
    
    const { name } = result;
    // console.log(result.weather[0].main);
    console.log(result);

    document.getElementById('name').innerText = `${name}, ${result.sys.country}`;
    document.getElementById('description').innerText = `${description} - ${main}`;
    document.getElementById('feels').innerText = `Feels like: ${feels_like} ºF`;
    document.getElementById('temp').innerText = `Min temp ${temp_min}ºF - Max temp ${temp_max}ºF`


    
    // const { main, description, icon} = getData.weather[0];

  
    return root;
  };

  return {
    renderPage,
  };
})();

export default ui;