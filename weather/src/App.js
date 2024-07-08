import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import WeatherWidget from './WeatherWidget';


function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 text-white">
      <Weather/>
      <WeatherWidget/>
    </div>
  );
}

export default App;
