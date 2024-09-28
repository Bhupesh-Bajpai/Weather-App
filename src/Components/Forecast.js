import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Forecast = () => {
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('NewDellhi');

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        // const API_KEY = 'YOUR_API_KEY';
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=329875736c53427bbc7155835242709&q=New%20Delhi`);
        setForecast(response.data);
      } catch (error) {
        console.error('Error fetching forecast data', error);
      }
    };

    fetchForecast();
  }, [city]);

  const handleChangeCity = (e) => setCity(e.target.value);

  return (
    <div>
      <h1>5-Day Forecast</h1>
      <input type="text" value={city} onChange={handleChangeCity} placeholder="Enter city" />

      {forecast && (
        <div>
          {forecast.forecast.forecastday.map((day) => (
            <div key={day.date}>
              <h2>{day.date}</h2>
              <p>{day.day.condition.text}</p>
              <p>Max Temp: {day.day.maxtemp_c} °C</p>
              <p>Min Temp: {day.day.mintemp_c} °C</p>
              <img src={day.day.condition.icon} alt="weather icon" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Forecast;
