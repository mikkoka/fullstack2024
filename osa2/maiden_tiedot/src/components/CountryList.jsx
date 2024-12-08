const CountryList = ({shownCountries, setCountry}) => {

    if (shownCountries.length <= 10) {
      
      return  (      
        <>
          {shownCountries.map(c => <p key={c}>{c}<button onClick={() => {setCountry(c)}}>Show</button></p>)}
        </>
      ) 
    }
    else return (<p>Too many matches, specify another filter!</p>)
  
  }

  export default CountryList