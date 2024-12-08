import { useState } from 'react'
import { useEffect } from 'react'
import countryService from './services/countries'
import weatherService from './services/weather'
import Input from './components/Input'
import CountryList from './components/CountryList'
import Country from './components/Country'
import Weather from './components/Weather'

function App() {
  const [searchString, setSearchString] = useState('')
  const [countryList, setCountryList] = useState([])
  const [countryData, setCountryData] = useState([])
  const [shownCountries, setShownCountries] = useState([])
  const [shownCountry, setShownCountry] = useState({})
  const [weather, setWeather] = useState({})
  

  const init_hook = () => {
    countryService
      .getAll()
      .then(response => {
        setCountryList(response.data.map((country => country.name.common)))
        setCountryData(response.data)
      })
  }
  
  useEffect(init_hook, [])


  const onSearchStringChange = (event) => { 
    const candidate_countries = countryList.filter(
      country => country
      .toLowerCase()
      .includes(event.target.value.toLowerCase())
    )  
    if (candidate_countries.length === 1) {
      setCountry(candidate_countries[0])
    }
    setSearchString(event.target.value) 
    setShownCountries(candidate_countries)
  } 

  const setCountry = (country_name) => {
    const country = countryData.find(
      country => country.name.common === country_name)
    weatherService.get(country.latlng[0], country.latlng[1])
      .then(response => {
        console.log(response.data)
        setWeather(response.data)
      })
    setShownCountry(country)


  }

  return (
    <div>
      <Input text={searchString} changeHandler={onSearchStringChange} />
      <CountryList shownCountries={shownCountries} setCountry={setCountry}/>
      <Country shownCountry={shownCountry} />
      <Weather shownCountry={shownCountry} weather={weather} />
    </div>
  )
}

export default App
