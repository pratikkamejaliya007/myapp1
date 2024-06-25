import './App.css';
import Dispaly from './Dispaly';
import Signup from './Signup';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>

    <Router>

      <Routes>

      <Route path='/' element={<Dispaly/>} />

      <Route path='/login' element={<Signup/>} />

      </Routes>

    </Router>
    
      {/* <Signup/> */}

    </>
  );
}

export default App;
