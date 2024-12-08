const Country = ({shownCountry}) => {

    if (shownCountry.name !== undefined) {
      return(
        <p>
        <h3>{shownCountry.name.common}</h3>
          Capital {shownCountry.capital}<br/>
          Area {shownCountry.area}<br/>
          languages:
          <ul>
            {Object.values(shownCountry.languages).map(value => <li key={value}>{value}</li>)} 
          </ul>
          <img src={shownCountry.flags.png} alt="Flag" />

        </p>

      )
  }
}

export default Country