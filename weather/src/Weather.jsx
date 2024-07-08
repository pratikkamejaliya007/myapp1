import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './redux/weatherslice';
import { history_add } from './redux/historyslice';
import { VscHistory } from 'react-icons/vsc';
import { useNavigate } from 'react-router';
import WeatherWidget from './WeatherWidget';

const apiKey = '9d3a6492f9b387c2b3bcf76e8b23d97d';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector(state => state.Weather.value);

  const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
      dispatch(add(data));
      dispatch(history_add(data));
      setHistory([...history, data]);
      setError('');
    } catch (error) {
      setWeather(null);
      setError(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      getWeather(city);
    }
  };

  function handleHistory() {
    navigate('/history');
  }

  return (
    <div >
      <h1 className="text-5xl font-bold mb-8">Weather App</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            required
            className="p-2 rounded-lg border-2 border-gray-300 text-black w-full"
          />
          <button type="submit" className="ml-2 p-2 w-[200px] bg-blue-700 hover:bg-blue-800 text-white rounded-lg">
            Get Weather
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="button"
        className="fixed right-4 top-4 p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center"
        onClick={handleHistory}
      >
        <VscHistory className="mr-2" />
        History
      </button>
      {weather && <WeatherWidget data={weather} />}
    </div>
  );
}

export default Weather
