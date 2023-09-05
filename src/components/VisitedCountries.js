import React from 'react';

function VisitedCountries({ visitedCountries }) {
  return (
    <div>
      <h2>Visited Countries</h2>
      <ul>
        {visitedCountries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
}

export default VisitedCountries;
