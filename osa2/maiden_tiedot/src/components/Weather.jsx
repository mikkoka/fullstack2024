const Weather = ({shownCountry, weather}) => {

    if (weather.main !== undefined) {
      return(
        <p>
          <h4>Weather in {shownCountry.capital[0]}</h4>
          Temperature: {weather.main.temp}<br/>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Flag" /><br/>
          Wind: {weather.wind.speed}<br/>
        </p>

      )
  }
}

export default Weather


0