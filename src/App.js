
import SearchBar from './components/SearchBar.js';
import WeatherForecast from './components/WeatherForecast.js';
import CityCard from './components/CityCard.js';

import WeatherDetails from './components/WeatherDetails.js';
import WeatherInfo from './components/WeatherInfo.js';


function App() {
  return (
    <div className="App">
      <div style={{display: "flex"}}>
        <div >
          
          <div>
            <WeatherDetails />
          </div>
          <div>
            <WeatherInfo />
          </div>
        </div>
      </div>
      <div style={{display: "flex", flexFlow: "column"}}>
        <div> <CityCard /></div>
        <div><SearchBar /></div>
        <div><WeatherForecast /></div>
      </div>

    </div>
  );
}

export default App;
