import React, { useState } from 'react';
import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import { add } from './redux/weatherslice';
import { history_add } from './redux/historyslice';
import { VscHistory } from 'react-icons/vsc';

const apiKey = '9d3a6492f9b387c2b3bcf76e8b23d97d';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch();

  const value=useSelector(state => state.history)

  console.log(value)

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

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Weather App</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-6">
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            required
            className="p-2 rounded-lg border-2 border-gray-300 text-black"
          />
          <button type="submit" className="ml-2 p-2 bg-blue-700 text-white rounded-lg">
            Get Weather
          </button>
        </div>
        
      </form>
      {error && <p className="text-red-500">{error}</p>}
      
      <button
          type="button"
          className="absolute right-2 top-2 p-2 bg-green-500 text-white rounded-lg flex items-center"
        >
          <VscHistory className="mr-2" />
          History
        </button>

    </div>
  );
}

export default Weather;
