import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('New Dellhi'); // Default city
    const [unit, setUnit] = useState('C');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // const API_KEY = 'YOUR_API_KEY';
                // const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=329875736c53427bbc7155835242709&q=New%20Delhi`);
                setWeather(response.data);
            } catch (error) {
                console.error('Error fetching weather data', error);
            }
        };

        fetchWeather();
    }, [city]);

    const handleChangeCity = (e) => setCity(e.target.value);

    const toggleUnit = () => {
        setUnit(unit === 'C' ? 'F' : 'C');
    };

    return (
        <div>
            <h1>Current Weather</h1>
            <input type="text" value={city} onChange={handleChangeCity} placeholder="Enter city" />
            <button onClick={toggleUnit}>Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}</button>

            {weather && (
                <div>
                    <h2>{weather.location.name}</h2>
                    <p>{weather.current.condition.text}</p>
                    <p>
                        {unit === 'C'
                            ? `${weather.current.temp_c} °C`
                            : `${weather.current.temp_f} °F`}
                    </p>
                    <img src={weather.current.condition.icon} alt="weather icon" />
                </div>
            )}

            <button onClick={() => navigate('/forecast')}>View 5-Day Forecast</button>
            weather
        </div>
    );
};

export default Weather;

