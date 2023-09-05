import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Fetch countries from the API
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  const toggleVisited = (country) => {
    if (visitedCountries.includes(country)) {
      // Remove the country from the visited list
      setVisitedCountries(visitedCountries.filter((c) => c !== country));
    } else {
      // Add the country to the visited list
      setVisitedCountries([...visitedCountries, country]);
    }
  };

  return (
    <div className="App">
      <div>
        <h2>Countries</h2>
        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>
              <span
                className={visitedCountries.includes(country.name.common) ? 'visited' : ''}
                onClick={() => toggleVisited(country.name.common)}
              >
                {country.name.common}
                {country.flag}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Visited Countries</h2>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
