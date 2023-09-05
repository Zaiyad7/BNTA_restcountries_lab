import React from "react";

function Countries({ countries, visitedCountries, toggleVisited }) {
    return (
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
    );
  }
  
  export default Countries;
