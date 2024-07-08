import './App.css';
import Weather from './Weather';
import History from './History';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 text-white">
      
      <Router>

          <Routes>

            <Route path='/' element={<Weather/>} />
            <Route path='/history' element={<History/>} />

          </Routes>

      </Router>

      {/* <Weather/>
      <WeatherWidget/> */}
    </div>
  );
}

export default App;
