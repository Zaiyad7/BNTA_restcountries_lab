import React, { useState, useEffect } from 'react';
import './App.css';
import Countries from './containers/Countries';
import VisitedCountries from './components/VisitedCountries';

function App() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  const toggleVisited = (country) => {
    if (visitedCountries.includes(country)) {
      setVisitedCountries(visitedCountries.filter((c) => c !== country));
    } else {
      setVisitedCountries([...visitedCountries, country]);
    }
  };

  return (
    <div className="App">
      <Countries
        countries={countries}
        visitedCountries={visitedCountries}
        toggleVisited={toggleVisited}
      />
      <VisitedCountries visitedCountries={visitedCountries} />
    </div>
  );
}

export default App;